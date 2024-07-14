import { SVGTableElement, SVGTableElementAttributes } from './private-types';
import { SVGElementName, PrimitiveNode } from './common-types';

export const element = <
	NODE extends PrimitiveNode,
	T extends SVGElementName | SVGElement = SVGElementName | SVGElement,
>(
	type: T,
	attrs: SVGTableElementAttributes<T>,
	...children: SVGTableElement[]
): SVGTableElement<NODE, T> => {
	return {
		__internal: 'svg-table-element-as-obj',
		type,
		attrs,
		children: children.length > 0 && Array.isArray(children[0]) ? children[0] : children,
	};
};
