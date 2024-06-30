import { memo } from 'react';
import type { CalculatedCellProps, CellStyle, PatternArrays } from './types';

const isBorderRect = (style: CellStyle) => {
	const { borderWidths, borderColors, borderPatterns } = style;

	return (
		typeof borderWidths === 'number' &&
		typeof borderColors === 'string' &&
		(!borderPatterns ||
			(Array.isArray(borderPatterns) &&
				typeof borderPatterns[0] === 'number'))
	);
};

const getDashArray = (
	borderPatterns?: PatternArrays
): string | string[] | undefined => {
	if (!borderPatterns) return undefined;
	if (Array.isArray(borderPatterns)) {
		if (typeof borderPatterns[0] === 'number') {
			return borderPatterns.map(a => a.toString()).join(' ');
		} else if (Array.isArray(borderPatterns[0])) {
			return borderPatterns.map(a =>
				getDashArray(a as number[])
			) as string[];
		}
	}
	console.error(
		'type of borderPattern should be one of these types: number | number[] | number[][]'
	);
	return undefined;
};

const getRectDashArray = (
	borderPatterns?: PatternArrays
): string | undefined => {
	if (!borderPatterns) return undefined;
	if (Array.isArray(borderPatterns)) {
		if (typeof borderPatterns[0] === 'number') {
			return borderPatterns.map(a => a.toString()).join(' ');
		}
	}
	console.error(
		'type of borderPattern should be one of these types: number | number[] | number[][]'
	);
	return undefined;
};

const getRectStyle = (style: CellStyle) => {
	if (!isBorderRect(style)) return null;

	const { bgColor, borderWidths, borderColors, borderPatterns } = style;
	// when one of these
	return {
		fill: bgColor,
		stroke: borderColors as string,
		strokeWidth: borderWidths as number,
		strokeDasharray: getRectDashArray(borderPatterns),
	};
};

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
			...style,
			...defaultStyle,
		};

		const {
			bgColor,
			borderWidths,
			borderColors,
			borderPatterns,
			paddings,
		} = styleToUse;

		const rectStyleProps = isBorderRect(styleToUse)
			? getRectStyle(styleToUse)
			: { fill: bgColor };

		return (
			<g transform={`translate(${x}, ${y})`}>
				<rect width={width} height={height} {...rectStyleProps} />
				<text
					x={width / 2}
					y={height / 2}
					textAnchor='middle'
					dominantBaseline='middle'
					fill='white'
				>
					{content}
				</text>
			</g>
		);
	}
);
