import { SVGTableElement } from '@shjeon0730/svg-table-core/private-types';
import { SVGElementName } from './types';

export const kebabize = (str: string) =>
	str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($: string, ofs: string) => (ofs ? '-' : '') + $.toLowerCase());

const convertVal = (
	val: string | number | boolean | Record<string, string | number | null> | null,
	key: string
): string => {
	if (typeof val !== 'number' && !val) return '';
	if (typeof val === 'object') {
		if (Array.isArray(val)) {
			console.error('something is wrong.. value type cannot be array', 'key:', key, 'val:', val);
			return '';
			// throw new Error('something is wrong.. value type cannot be array');
		}
		return Object.entries(val)
			.map(([k, v]) => {
				return `${kebabize(k)}:${v}`;
			})
			.join(';');
	}
	return `${val}`;
};

const convertAttrToHtmlStyle = (attrName: string) => {
	if (attrName === 'className') return 'class';
	switch (attrName) {
		case 'viewBox':
			return attrName;
	}
	if (attrName.match(/[A-Z]+/)) {
		const newKey = kebabize(attrName);

		return newKey;
	}
	return attrName;
};

export const convertToKebabCaseProps = (attrs: Record<string, any>) => {
	const kebabCaseProps = Object.keys(attrs).reduce(
		(curr, key: string) => {
			const convertedKey = convertAttrToHtmlStyle(key);
			const converted = `${convertVal(attrs[key], key)}`;
			if (!converted) return curr;
			return { ...curr, [convertedKey]: converted };
		},
		{} as Record<string, any>
	);
	return kebabCaseProps;
};

export const createVanillaElement = (
	type: SVGElementName,
	attrs: Record<string, any>,
	...children: SVGTableElement<SVGElement | HTMLElement>[]
): SVGTableElement<SVGElement | HTMLElement> => {
	return {
		__internal: 'svg-table-element-as-obj',
		type,
		attrs,
		children,
	};
};

export const createRenderedString = (...renderedHtml: string[]): SVGTableElement<SVGElement | HTMLElement> => {
	return {
		__internal: 'svg-table-rendered-text',
		type: 'g',
		attrs: {},
		children: [renderedHtml.join('')],
	};
};

export const __private__ = {
	convertVal,
	convertAttrToHtmlStyle,
};
