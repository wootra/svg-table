import { memo } from 'react';
import type { CalculatedCellProps, CellStyle } from './types';
import { getWid } from './utils';
import FilledArea from './FilledArea';

export const ACell = memo(
	({
		cellOpt,
		defaultStyle,
	}: {
		cellOpt: CalculatedCellProps;
		defaultStyle: CellStyle;
	}) => {
		if (cellOpt._ignored) return null;

		const { content, x, y, width, height, style } = cellOpt;

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
		} = styleToUse;
		const padLeft = getWid(paddings, 'left');
		const padTop = getWid(paddings, 'top');
		const padRight = getWid(paddings, 'right');
		const padBottom = getWid(paddings, 'bottom');
		const svgStyleToUse = {
			...svgStyle,
			...(allowOverflow ? { overflow: 'visible' } : {}),
		};
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
						<g transform={`translate(-${padRight}, -${padBottom})`}>
							{typeof content === 'string' && (
								<text
									x={width / 2}
									y={height / 2}
									textAnchor='middle'
									dominantBaseline='middle'
									fill={textColor}
									{...textStyle}
								>
									{content}
								</text>
							)}
							{typeof content !== 'string' && content}
						</g>
					</g>
				</svg>
			</g>
		);
	}
);
