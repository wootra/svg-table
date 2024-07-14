import { SVGTableElement, SVGTableElementAsObj } from '@shjeon0730/svg-table-core/private-types';
import { convertToKebabCaseProps } from './utils';

export const svgConverter = (element: SVGTableElement): string => {
	if (element === null || element === undefined) return '';
	if (typeof element === 'string') return element;
	if (Array.isArray(element)) {
		return element.map(c => svgConverter(c)).join('\n');
	}

	if (typeof element !== 'object') {
		if (typeof element !== 'number' && !element) return '';
		return svgConverter(element);
	}
	const el: SVGTableElementAsObj = element as SVGTableElementAsObj;
	if (el.type && el.attrs && el.__internal === 'svg-table-element-as-obj') {
		const children =
			typeof el.children === 'string'
				? el.children
				: el.children
					? el.children
							.map(c => (typeof c === 'boolean' && !c ? null : svgConverter(c as SVGTableElement)))
							.filter(v => v)
							.join('\n')
					: '';
		const kebabCaseProps = convertToKebabCaseProps(el.attrs);
		const attrs = Object.entries(kebabCaseProps)
			.map(entry => {
				const [key, val] = entry;
				return `${key}="${val}"`;
			})
			.filter(v => v)
			.join(' ');

		return `<${el.type} ${attrs}>${children}</${el.type}>`;
	}

	if (el.__internal === 'svg-table-rendered-text') {
		const children =
			typeof el.children === 'string' ? el.children : el.children ? el.children.filter(v => v).join('\n') : '';
		return children;
	}

	return (element as HTMLElement).outerHTML;
};
