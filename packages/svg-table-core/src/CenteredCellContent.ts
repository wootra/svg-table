import type { CalculatedCellPropsBase, SVGTableElement } from './private-types';
import type { GroupProps, PrimitiveNode } from './common-types';
import type { CellStyleBase } from './private-types';

import { getDuplicatedProps, simpleValue } from './utils';
import { element } from './element';
import { SVGAttributes } from 'react';

export const CenteredCellContent = <NODE extends PrimitiveNode>({
	cellOpt,
	styleToUse,
	children,
}: {
	cellOpt: CalculatedCellPropsBase<NODE> & {
		_ignored: false;
	};
	styleToUse: CellStyleBase;
	children: SVGTableElement[] | SVGTableElement;
}): SVGTableElement<NODE> => {
	let { width, height, className } = cellOpt;

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

	width = Math.max(width, 1);
	height = Math.max(height, 1);
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
