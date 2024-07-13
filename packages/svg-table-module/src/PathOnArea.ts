import { element } from './element';
import type { BorderStyles, ColorsOnWidth, PatternArrays, PatternShapes, PrimitiveNode, WidthPos } from './types';
import { getBorderShape, getStrokeColor, getDashArray, getWid } from './utils';

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
	startPt: `${number},${number}`;
	endPt: `${number},${number}`;
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

type PtStr = `${number},${number}`;
export const PathOnArea = <NODE extends PrimitiveNode>(
	props: {
		width: number;
		height: number;

		className?: string;
	} & Partial<BorderStyles>
) => {
	const { width, height, borderWidths, borderColors, borderPatterns, borderShapes, className } = props;
	const leftWid = getWid(borderWidths, 'left');
	const rightWid = getWid(borderWidths, 'right');
	const topWid = getWid(borderWidths, 'top');
	const bottomWid = getWid(borderWidths, 'bottom');
	const leftTop: PtStr = `0,0`;
	const leftBottom: PtStr = `0,${height}`;
	const rightTop: PtStr = `${width},0`;
	const rightBottom: PtStr = `${width},${height}`;
	const PathProps = {
		borderColors,
		borderPatterns,
		borderShapes,
	};

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
};
