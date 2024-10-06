import { SVGTableElement, SVGTableElementAttributes } from './private-types';
import { SVGElementName, PrimitiveNode } from './common-types';

export const element = <
	NODE extends PrimitiveNode,
	T extends SVGElementName | SVGElement = SVGElementName | SVGElement,
>(
	type: T,
	attrs: SVGTableElementAttributes<T>,
	...children: SVGTableElement[]
): SVGTableElement<NODE, T> | undefined => {
	const validChildren = children.filter(child => child !== undefined && child !== null);
	return Object.keys(attrs).length > 0 || validChildren.length > 0
		? {
				__internal: 'svg-table-element-as-obj',
				type,
				attrs,
				children:
					validChildren.length > 0 && Array.isArray(validChildren[0]) ? validChildren[0] : validChildren,
			}
		: undefined;
};
