import { getRectStyle, isBorderRect } from './utils';
import type { BorderStyles, PrimitiveNode } from './types';
import { PathOnArea } from './PathOnArea';
import { element } from './element';

type Props = {
	width: number;
	height: number;
	bgColor?: string;

	className?: string;
} & Partial<BorderStyles>;

const FilledArea = <NODE extends PrimitiveNode>(props: Props) => {
	const { bgColor, width, height, borderWidths, borderColors, borderPatterns, borderShapes, className } = props;
	const isBgColorVisible = bgColor && bgColor !== 'transparent';
	const isBorderOnRect = isBgColorVisible && isBorderRect(props);
	const rectStyleProps = isBorderOnRect ? getRectStyle(props) : { fill: bgColor };
	return element<NODE>(
		'g',
		{
			className: className ? `filled-area ${className ?? ''}` : undefined,
		},
		isBgColorVisible &&
			element<NODE>('rect', {
				width: width,
				height: height,
				...rectStyleProps,
			}),
		!isBorderOnRect &&
			PathOnArea<NODE>({
				className: className ? 'paths-on-area-for-filled-area' : undefined,
				width: width,
				height: height,
				borderWidths: borderWidths,
				borderColors: borderColors,
				borderPatterns: borderPatterns,
				borderShapes: borderShapes,
			})
	);
};

export default FilledArea;