// eslint-disable-next-line no-redeclare
import { Accessor, JSX, ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { SVGTableElement, SVGTableElementAsObj } from '@shjeon0730/svg-table-core';
import { __private__, convertToKebabCaseProps } from './utils';
import { ElementType } from './types';
const { convertVal } = __private__;

export const solidConverter = (
	element: SVGTableElement<ElementType> | Accessor<SVGTableElement<ElementType>>
): JSX.Element => {
	if (element === null || element === undefined) return element as JSX.Element;
	if (typeof element === 'string') return element;
	if (Array.isArray(element)) {
		return element.map(c => solidConverter(c));
	}
	if (typeof element === 'function') {
		return (element as Accessor<JSX.Element>)();
	}
	if (typeof element !== 'object') {
		if (typeof element !== 'number' && !element) return '';
		return convertVal(element);
	}
	const el: SVGTableElementAsObj = element as SVGTableElementAsObj;
	if (el.type && el.attrs) {
		const children: JSX.Element = Array.isArray(el.children)
			? el.children.map(c => solidConverter(c as SVGTableElement<ElementType>))
			: [solidConverter(el.children)];

		const kebabCaseProps = convertToKebabCaseProps(el.attrs);

		return Dynamic({ component: el.type as ValidComponent, ...kebabCaseProps, children });
	}
	return element as JSX.Element;
};
