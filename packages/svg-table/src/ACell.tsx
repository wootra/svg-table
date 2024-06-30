import { memo } from 'react';
import type { CalculatedCellProps, CellStyle } from './types';
import { getRectStyle, isBorderRect } from './utils';
import { PathOnArea } from './PathOnArea';
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
			textColor,
		} = styleToUse;

		return (
			<g transform={`translate(${x}, ${y})`}>
				<FilledArea
					width={width}
					height={height}
					bgColor={bgColor}
					borderWidths={borderWidths}
					borderColors={borderColors}
					borderPatterns={borderPatterns}
					borderShapes={borderShapes}
				/>
				<text
					x={width / 2}
					y={height / 2}
					textAnchor='middle'
					dominantBaseline='middle'
					fill={textColor}
				>
					{content}
				</text>
			</g>
		);
	}
);
