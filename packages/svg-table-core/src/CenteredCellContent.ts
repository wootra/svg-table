import type { CalculatedCellPropsBase, SVGTableElement } from './private-types';
import type { GType, GroupProps, PrimitiveNode, SVGType, TextType } from './common-types';
import type { CellStyleBase } from './private-types';

import { getDuplicatedProps, simpleValue } from './utils';
import { element } from './element';
import { SVGAttributes } from 'react';

export const CenteredCellContent = <
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
>({
	cellOpt,
	styleToUse,
	children,
}: {
	cellOpt: CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> & {
		_ignored: false;
	};
	styleToUse: CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE>;
	children: SVGTableElement[] | SVGTableElement;
}): SVGTableElement<NODE> => {
	const { width, height, className } = cellOpt;

	let { rotateCenterProps, cx = 0, cy = 0 } = styleToUse;

	const propsToPassForGroup = (startX: number, startY: number): GroupProps => ({
		x: simpleValue(startX),
		y: simpleValue(startY),
		width,
		height,
	});

	const rotationGroupProps = {
		// style: {
		// 	transform: `translate(-${simpleValue(width / 2 + cx)},-${simpleValue(height / 2 + cy)})`,
		// },
		...(typeof rotateCenterProps === 'function'
			? rotateCenterProps(propsToPassForGroup(width / 2 + cx, height / 2 + cy))
			: rotateCenterProps),
	};

	getDuplicatedProps(rotationGroupProps);

	// below redundant transformation is needed to avoid firefox incompatibility.
	return element<NODE>(
		'svg',
		{
			viewBox: `${-width / 2} ${-height / 2} ${width} ${height}`,
			style: { overflow: 'visible' },
		},
		element<NODE>(
			'g',
			{
				// style: {
				// 	transform: `translate(${simpleValue(width / 2 + cx)},${simpleValue(height / 2 + cy)})`,
				// },
				className: className ? `${className}-content` : undefined,
			},
			element<NODE>('g', rotationGroupProps as SVGAttributes<'g'>, children)
		)
	);
};
