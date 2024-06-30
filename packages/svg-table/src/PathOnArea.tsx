import { memo } from 'react';
import type {
	ColorsOnWidth,
	PatternArrays,
	PatternShapes,
	Widths,
} from './types';
import { getBorderShape, getColor, getDashArray, getWid } from './utils';

export const PathOnArea = memo(
	(props: {
		width: number;
		height: number;
		borderWidths: Widths;
		borderColors: ColorsOnWidth;
		borderPatterns: PatternArrays;
		borderShapes: PatternShapes;
	}) => {
		const {
			width,
			height,
			borderWidths,
			borderColors,
			borderPatterns,
			borderShapes,
		} = props;
		const leftWid = getWid(borderWidths, 'left');
		const rightWid = getWid(borderWidths, 'right');
		const topWid = getWid(borderWidths, 'top');
		const bottomWid = getWid(borderWidths, 'bottom');

		return (
			<g>
				{leftWid && (
					<path
						d={`M${leftWid / 2},${topWid / 2} L${leftWid / 2},${height - bottomWid / 2}`}
						strokeWidth={leftWid}
						stroke={getColor(borderColors, 'left')}
						strokeDasharray={getDashArray(borderPatterns, 'left')}
						strokeLinecap={getBorderShape(
							borderShapes,
							borderPatterns,
							'left'
						)}
					/>
				)}
				{rightWid && (
					<path
						d={`M${width - rightWid / 2} ${topWid / 2} L${width - rightWid / 2},${height - bottomWid / 2}`}
						strokeWidth={rightWid}
						stroke={getColor(borderColors, 'right')}
						strokeDasharray={getDashArray(borderPatterns, 'right')}
						strokeLinecap={getBorderShape(
							borderShapes,
							borderPatterns,
							'right'
						)}
					/>
				)}
				{topWid && (
					<path
						d={`M${leftWid / 2},${topWid / 2} L${width - rightWid / 2},${topWid / 2}`}
						strokeWidth={topWid}
						stroke={getColor(borderColors, 'top')}
						strokeDasharray={getDashArray(borderPatterns, 'top')}
						strokeLinecap={getBorderShape(
							borderShapes,
							borderPatterns,
							'top'
						)}
					/>
				)}
				{bottomWid && (
					<path
						d={`M${leftWid / 2} ${height - bottomWid / 2} L ${width - rightWid / 2} ${height - bottomWid / 2}`}
						strokeWidth={bottomWid}
						stroke={getColor(borderColors, 'bottom')}
						strokeDasharray={getDashArray(borderPatterns, 'bottom')}
						strokeLinecap={getBorderShape(
							borderShapes,
							borderPatterns,
							'bottom'
						)}
					/>
				)}
			</g>
		);
	}
);
