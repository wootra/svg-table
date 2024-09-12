import { element } from './element';
import type { BorderStyles, ColorsOnWidth, PatternArrays, PatternShapes, PrimitiveNode, WidthPos } from './types';
import { getBorderShape, getStrokeColor, getDashArray, getWid, PtStr } from './utils';

const Path = <NODE extends PrimitiveNode>({
	startPt,
	endPt,
	width,
	borderColors,
	borderPatterns,
	borderShapes,
	pos,
	className,
}: {
	startPt: PtStr;
	endPt: PtStr;
	width: number;
	borderColors?: ColorsOnWidth;
	borderPatterns?: PatternArrays;
	borderShapes?: PatternShapes;
	pos: WidthPos;
	className?: string;
}) => {
	if (width === 0) return null;

	return element<NODE>('path', {
		className: className ? `${pos}-path` : undefined, // left-path | right-path | top-path | bottom-path
		d: `M${startPt} L${endPt}`,
		strokeWidth: width,
		stroke: getStrokeColor(borderColors, pos),
		strokeDasharray: getDashArray(borderPatterns, pos),
		strokeLinecap: getBorderShape(borderShapes, borderPatterns, pos),
	});
};

const getPt = (x: number, y: number): PtStr => `${x},${y}`;
export const PathOnArea = <NODE extends PrimitiveNode>(
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
		rx = 0,
		ry = 0,
	} = props;

	const PathProps = {
		borderColors,
		borderPatterns,
		borderShapes,
	};
	const cornerExist = rx && ry; // if either rx or ry is 0, there is no rounded corder which should treat it as rectangular corner.

	const leftTop = getPt(0, 0);
	const leftBottom = getPt(0, height - 0);
	const rightTop = getPt(width - 0, 0);
	const rightBottom = getPt(width - 0, height - 0);

	if (cornerExist) {
		const width = (borderWidths && Array.isArray(borderWidths) ? borderWidths[0] : borderWidths) ?? 0;
		if (!width) return null;

		const leftLineTop = getPt(0, ry);
		const leftLineBottom = getPt(0, height - ry);
		const topLineLeft = getPt(rx, 0);
		const topLineRight = getPt(width - rx, 0);
		const rightLineTop = getPt(width, ry);
		const rightLineBottom = getPt(width, height - ry);
		const bottomLineLeft = getPt(rx, height);
		const bottomLineRight = getPt(width - rx, height);

		// should ignore border width.
		return element<NODE>(
			'g',
			{
				className: className ? `paths-on-area ${className}` : undefined,
			},
			// left-top-corner
			element<NODE>('path', {
				className: className ? `${className}-corner-path` : undefined, // left-path | right-path | top-path | bottom-path
				d: `M${leftLineTop} Q${leftTop},${topLineLeft} L${topLineRight} Q${rightTop},${rightLineTop} L${rightLineBottom} Q${rightBottom},${bottomLineRight} L${bottomLineLeft} Q${leftBottom},${leftLineBottom} L${leftLineTop}`,
				strokeWidth: width,
				stroke: getStrokeColor(borderColors),
				strokeDasharray: getDashArray(borderPatterns),
				strokeLinecap: getBorderShape(borderShapes, borderPatterns),
			})
		);
	} else {
		const leftWid = getWid(borderWidths, 'left');
		const rightWid = getWid(borderWidths, 'right');
		const topWid = getWid(borderWidths, 'top');
		const bottomWid = getWid(borderWidths, 'bottom');

		return element<NODE>(
			'g',
			{
				className: className ? `paths-on-area ${className}` : undefined,
			},
			!!leftWid &&
				Path<NODE>({
					startPt: leftTop,
					endPt: leftBottom,
					width: leftWid,
					...PathProps,
					pos: 'left',
				}),

			!!rightWid &&
				Path<NODE>({
					startPt: rightTop,
					endPt: rightBottom,
					width: rightWid,
					...PathProps,
					pos: 'right',
				}),
			!!topWid &&
				Path<NODE>({
					startPt: leftTop,
					endPt: rightTop,
					width: topWid,
					...PathProps,
					pos: 'top',
				}),
			!!bottomWid &&
				Path<NODE>({
					startPt: leftBottom,
					endPt: rightBottom,
					width: bottomWid,
					...PathProps,
					pos: 'bottom',
				})
		);
	}
};
