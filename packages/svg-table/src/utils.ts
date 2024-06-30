import { ColorsOnWidth, PatternArrays, Widths } from './types';

export const convertToWidthArrays = (
	widths: Widths,
	defaultWid: number
): number | [number, number, number, number] => {
	if (typeof widths === 'number') return defaultWid;
	if (Array.isArray(widths)) {
		if (widths.length === 4) return widths;
		if (widths.length === 2)
			return [widths[0], widths[1], widths[0], widths[1]];
	}
	console.error(
		'Invalid widths type: ',
		widths,
		' should be number or [number, number, number, number] or [number, number]'
	);
	return defaultWid;
};

export const getWid = (
	widths: Widths,
	pos: 'left' | 'right' | 'top' | 'bottom'
) => {
	if (typeof widths === 'number') return widths;
	if (Array.isArray(widths)) {
		if (widths.length === 4) {
			switch (pos) {
				case 'left':
					return widths[3];
				case 'right':
					return widths[1];
				case 'top':
					return widths[0];
				case 'bottom':
					return widths[2];
				default:
					break;
			}
		} else if (widths.length === 2) {
			switch (pos) {
				case 'left':
					return widths[1];
				case 'right':
					return widths[1];
				case 'top':
					return widths[0];
				case 'bottom':
					return widths[0];
				default:
					break;
			}
		}
	}
	console.error(
		'Invalid widths type: ',
		widths,
		' should be number or [number, number, number, number] or [number, number]'
	);
	return 0;
};

export const convertToColorArrays = (
	colors: ColorsOnWidth,
	defaultColor = 'black'
): string | [string, string, string, string] => {
	if (typeof colors === 'string') return colors;
	if (Array.isArray(colors)) {
		if (colors.length === 4) return colors;
		if (colors.length === 2)
			return [colors[0], colors[1], colors[0], colors[1]] as [
				string,
				string,
				string,
				string,
			];
	}
	console.error(
		'Invalid colors type: ',
		colors,
		' should be string or [string, string, string, string] or [string, string]'
	);
	return defaultColor;
};

export const isValidateArrayType = (
	arr: unknown[],
	type: 'number' | 'string'
) => {
	return Array.isArray(arr) && arr.every(item => typeof item === type);
};

export const isValidate2DArrayType = (
	arr: unknown[],
	type: 'number' | 'string'
) => {
	return (
		Array.isArray(arr) &&
		arr.every(item => {
			return Array.isArray(item) && isValidateArrayType(item, type);
		})
	);
};

export const convertToPatternArrays = (
	patterns: PatternArrays,
	defaultPattern = undefined
): number[] | [number[], number[], number[], number[]] | undefined => {
	if (patterns === undefined || isValidateArrayType(patterns, 'number'))
		return patterns as number[] | undefined;
	if (isValidate2DArrayType(patterns, 'number')) {
		if (patterns.length === 4)
			return patterns as [number[], number[], number[], number[]];
		if (patterns.length === 2)
			return [patterns[0], patterns[1], patterns[0], patterns[1]] as [
				number[],
				number[],
				number[],
				number[],
			];
	}
	console.error(
		'Invalid patterns type: ',
		patterns,
		' should be string or [string, string, string, string] or [string, string]'
	);
	return defaultPattern;
};
