import { DEFAULT_WITH_CSSVARS } from './consts';
import {
	ColorsOnWidth,
	PatternArrays,
	PatternShape,
	PatternShapes,
	RectStyle,
	RectStyleOption,
	WidthPos,
	Widths,
} from './types';

const getValFromArr = <T = unknown>(arr: [T, T, T, T] | [T, T], pos?: WidthPos) => {
	if (arr.length === 4) {
		switch (pos) {
			case 'left':
				return arr[3];
			case 'right':
				return arr[1];
			case 'bottom':
				return arr[2];
			default:
			case 'top':
				return arr[0];
		}
	} else if (arr.length === 2) {
		switch (pos) {
			case 'left':
				return arr[1];
			case 'right':
				return arr[1];
			case 'top':
			case 'bottom':
			default:
				return arr[0];
		}
	}
	return;
};

export const getWid = (widths: Widths | undefined, pos?: WidthPos) => {
	if (widths === undefined) return 0;
	if (typeof widths === 'number') return widths;
	if (Array.isArray(widths)) {
		const val = getValFromArr<number>(widths, pos);
		if (val !== undefined) return val;
	}
	console.error(
		'Invalid widths type: ',
		widths,
		'for',
		pos,
		' should be number or [number, number, number, number] or [number, number]'
	);
	return 0;
};

export const getStrokeColor = (colors: ColorsOnWidth | undefined, pos?: WidthPos) => {
	if (!colors) return undefined;
	if (typeof colors === 'string') return colors;
	if (Array.isArray(colors)) {
		if (pos) {
			const val = getValFromArr<string>(colors, pos);
			if (val !== undefined) return val;
		} else {
			return (colors && Array.isArray(colors) ? colors[0] : colors) ?? DEFAULT_WITH_CSSVARS.border;
		}
	}
	console.error(
		'Invalid colors type: ',
		colors,
		' should be string or [string, string, string, string] or [string, string]'
	);
	return DEFAULT_WITH_CSSVARS.border;
};

export const isValidateArrayType = (arr: unknown[], type: 'number' | 'string') => {
	return Array.isArray(arr) && arr.every(item => typeof item === type);
};

export const isValidate2DArrayType = (arr: unknown[], type: 'number' | 'string') => {
	return (
		Array.isArray(arr) &&
		arr.every(item => {
			return Array.isArray(item) && isValidateArrayType(item, type);
		})
	);
};

export const getDashArray = (dashArrays: PatternArrays, pos?: WidthPos) => {
	if (dashArrays === undefined) return undefined;
	if (isValidateArrayType(dashArrays, 'number')) {
		return dashArrays.map(a => a.toString()).join(' ');
	}
	if (isValidate2DArrayType(dashArrays, 'number')) {
		const arr = dashArrays as [number[], number[]] | [number[], number[], number[], number[]];
		const val = getValFromArr<number[]>(arr, pos);
		if (val !== undefined) return val.map(a => a.toString()).join(' ');
	}
	console.error(
		'Invalid dashArrays type: ',
		dashArrays,
		' should be number[] or [number[], number[], number[], number[]] or [number[], number[]]'
	);
	return undefined;
};

const validatedBorderShape = (borderShape: PatternShape, dashArrays?: string) => {
	if (!dashArrays && !borderShape) return undefined; // ignore without warning.
	if (!dashArrays) {
		console.warn('border shape does not have any effect without dash arrays. automatically ignoring it.');
		return undefined;
	}
	if (!borderShape || borderShape === 'butt') {
		const dashArrs = dashArrays.split(' ');
		if (dashArrs.some((val, idx) => val === '0' && idx % 2 === 0)) {
			console.error(
				'"butt" border shape(or undefined - default) will not be shown with 0 size. in odd order. i.e. stroke-dasharray="0 1" will not be shown since the first value is 0.',
				'\n\nyour dash array:',
				dashArrays
			);
		}
	}
	return borderShape;
};

export const getBorderShape = (
	borderShapes: PatternShapes,
	dashArrays: PatternArrays,
	pos?: WidthPos
): PatternShape => {
	if (!borderShapes) return validatedBorderShape(borderShapes, getDashArray(dashArrays, pos));
	if (typeof borderShapes === 'string') return validatedBorderShape(borderShapes, getDashArray(dashArrays, pos));
	if (Array.isArray(borderShapes)) {
		const val = getValFromArr<PatternShape>(borderShapes, pos);
		if (val !== undefined) {
			return validatedBorderShape(val, getDashArray(dashArrays, pos));
		}
	}
	console.error(
		'Invalid borderShapes type: ',
		borderShapes,
		' should be string or [string, string, string, string] or [string, string]'
	);
	return 'butt';
};

export const isBorderRect = (style: RectStyleOption) => {
	const { borderWidths, borderColors, borderPatterns, bgColor, rx, ry } = style;
	if (!bgColor) return false;
	return (
		(!rx || typeof rx === 'number') &&
		(!ry || typeof ry === 'number') &&
		(!borderWidths || typeof borderWidths === 'number') &&
		(!borderColors || typeof borderColors === 'string') &&
		(!borderPatterns || (Array.isArray(borderPatterns) && typeof borderPatterns[0] === 'number'))
	);
};

export const getRectStyle = (style: RectStyleOption): RectStyle | null => {
	if (!isBorderRect(style)) return null;

	const { bgColor, borderWidths, borderColors, borderPatterns, rx, ry } = style;
	// when one of these
	return {
		...(bgColor ? { fill: bgColor } : {}),
		...(rx || ry ? { rx: rx ?? 0, ry: ry ?? 0 } : {}),
		stroke: (borderColors ?? DEFAULT_WITH_CSSVARS.border) as string,
		strokeWidth: borderWidths as number,
		strokeDasharray: getDashArray(borderPatterns, 'left'),
	};
};

export const simpleValue = (val: number) => {
	return parseFloat(val.toFixed(2));
};

export const camelToKebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export const kebabToCamelCase = (str: string) =>
	str
		.split('-')
		.map((v, i) => (i === 0 ? v : v[0]?.toUpperCase() + v.substring(1)))
		.join('');

export const getDuplicatedProps = (attr: Record<string, any>) => {
	Object.keys(attr).forEach(key => {
		attr[camelToKebabCase(key)] = attr[key];
	});

	Object.keys(attr).forEach(key => {
		attr[kebabToCamelCase(key)] = attr[key];
	});
};

export type PtStr = `${number},${number}`;
