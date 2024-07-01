import { memo, useMemo } from 'react';
import type {
	BorderStyles,
	ColorsOnWidth,
	PatternArrays,
	PatternShapes,
	WidthPos,
} from './types';
import { getBorderShape, getColor, getDashArray, getWid } from './utils';

const Path = memo(
	({
		startPt,
		endPt,
		width,
		borderColors,
		borderPatterns,
		borderShapes,
		pos,
	}: {
		startPt: `${number},${number}`;
		endPt: `${number},${number}`;
		width: number;
		borderColors?: ColorsOnWidth;
		borderPatterns?: PatternArrays;
		borderShapes?: PatternShapes;
		pos: WidthPos;
	}) => {
		return (
			<path
				className={`${pos}-path`} // left-path | right-path | top-path | bottom-path
				d={`M${startPt} L${endPt}`}
				strokeWidth={width}
				stroke={getColor(borderColors, pos)}
				strokeDasharray={getDashArray(borderPatterns, pos)}
				strokeLinecap={getBorderShape(
					borderShapes,
					borderPatterns,
					pos
				)}
			/>
		);
	}
);

type PtStr = `${number},${number}`;
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
		const leftWid = useMemo(
			() => getWid(borderWidths, 'left'),
			[borderWidths]
		);
		const rightWid = useMemo(
			() => getWid(borderWidths, 'right'),
			[borderWidths]
		);
		const topWid = useMemo(
			() => getWid(borderWidths, 'top'),
			[borderWidths]
		);
		const bottomWid = useMemo(
			() => getWid(borderWidths, 'bottom'),
			[borderWidths]
		);
		const leftTop: PtStr = `${leftWid / 2},${topWid / 2}`;
		const leftBottom: PtStr = `${leftWid / 2},${height - bottomWid / 2}`;
		const rightTop: PtStr = `${width - rightWid / 2},${topWid / 2}`;
		const rightBottom: PtStr = `${width - rightWid / 2},${height - bottomWid / 2}`;
		const PathProps = {
			borderColors,
			borderPatterns,
			borderShapes,
		};

		return (
			<g className={`paths-on-area ${className ?? ''}`}>
				{leftWid && (
					<Path
						startPt={leftTop}
						endPt={leftBottom}
						width={leftWid}
						{...PathProps}
						pos='left'
					/>
				)}
				{rightWid && (
					<Path
						startPt={rightTop}
						endPt={rightBottom}
						width={rightWid}
						{...PathProps}
						pos='right'
					/>
				)}
				{topWid && (
					<Path
						startPt={leftTop}
						endPt={rightTop}
						width={topWid}
						{...PathProps}
						pos='top'
					/>
				)}
				{bottomWid && (
					<Path
						startPt={leftBottom}
						endPt={rightBottom}
						width={bottomWid}
						{...PathProps}
						pos='bottom'
					/>
				)}
			</g>
		);
	}
);
