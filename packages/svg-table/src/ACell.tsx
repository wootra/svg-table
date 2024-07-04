import { memo } from 'react';
import type {
	CalculatedCellProps,
	CellStyle,
	ContentProps,
	TableInCellProps,
} from './types';
import { getWid } from './utils';
import FilledArea from './FilledArea';
import { SVGTable } from './SVGTable';

export const ACell = memo(
	({
		cellOpt,
		defaultStyle,
	}: {
		cellOpt: CalculatedCellProps;
		defaultStyle: CellStyle;
	}) => {
		if (cellOpt._ignored) return null;

		const { content, x, y, width, height, style, before, after } = cellOpt;

		const styleToUse = {
			...defaultStyle,
			...style,
		};

		const {
			bgColor,
			borderWidths,
			borderColors,
			borderPatterns,
			borderShapes,
			paddings,
			svgStyle,
			textColor,
			textStyle,
			allowOverflow,
			cx = 0,
			cy = 0,
		} = styleToUse;
		const padLeft = getWid(paddings, 'left');
		const padTop = getWid(paddings, 'top');
		const padRight = getWid(paddings, 'right');
		const svgStyleToUse = {
			...svgStyle,
			...(allowOverflow ? { overflow: 'visible' } : {}),
		};
		const propsToPass: ContentProps = {
			x: width / 2,
			y: height / 2,
			width,
			height,
			textColor,
			textStyle: {
				textAnchor: 'middle',
				dominantBaseline: 'middle',
				...textStyle,
			},
		};
		let contentTouse =
			typeof content === 'function' ? content(propsToPass) : content;

		if (typeof contentTouse === 'object') {
			if ((contentTouse as TableInCellProps).table) {
				const tableWid = width - padRight - padLeft;
				const adjustProps = cellOpt._heightAdjust
					? {
							height: height - padTop - padRight,
						}
					: {};

				contentTouse = (
					<SVGTable
						width={tableWid}
						{...adjustProps}
						{...(contentTouse as TableInCellProps).table}
					/>
				);
			}
		}

		return (
			<g
				transform={`translate(${x}, ${y})`}
				className='cell-wrapper'
				width={width}
				height={height}
			>
				<FilledArea
					width={width}
					height={height}
					borderWidths={borderWidths}
					borderColors={borderColors}
					borderPatterns={borderPatterns}
					borderShapes={borderShapes}
					{...(bgColor ? { bgColor } : {})}
				/>
				<svg width={width} height={height} style={svgStyleToUse}>
					<g transform={`translate(${padLeft}, ${padTop})`}>
						{before && typeof before === 'function'
							? before(propsToPass)
							: before}
						{typeof contentTouse === 'string' && (
							<text
								x={width / 2 + cx}
								y={height / 2 + cy}
								textAnchor='middle'
								dominantBaseline='middle'
								fill={textColor}
								{...textStyle}
							>
								{contentTouse}
							</text>
						)}
						{typeof contentTouse !== 'string' &&
							!(contentTouse as TableInCellProps).table &&
							contentTouse}

						{after && typeof after === 'function'
							? after(propsToPass)
							: after}
					</g>
				</svg>
			</g>
		);
	}
);
