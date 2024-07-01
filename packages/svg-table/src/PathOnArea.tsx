import { memo } from 'react';
import type { BorderStyles } from './types';
import { getBorderShape, getColor, getDashArray, getWid } from './utils';

export const PathOnArea = memo(
	(
		props: {
			width: number;
			height: number;

			className?: string;
		} & Partial<BorderStyles>
	) => {
		const {
			width,
			height,
			borderWidths,
			borderColors,
			borderPatterns,
			borderShapes,
			className,
		} = props;
		const leftWid = getWid(borderWidths, 'left');
		const rightWid = getWid(borderWidths, 'right');
		const topWid = getWid(borderWidths, 'top');
		const bottomWid = getWid(borderWidths, 'bottom');

		return (
			<g className={`paths-on-area ${className ?? ''}`}>
				{leftWid && (
					<path
						className='left-path'
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
						className='right-path'
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
						className='top-path'
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
						className='bottom-path'
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
