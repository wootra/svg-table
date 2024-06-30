import { getRectStyle, isBorderRect } from './utils';
import { ColorsOnWidth, PatternArrays, PatternShapes, Widths } from './types';
import { PathOnArea } from './PathOnArea';

type Props = {
	width: number;
	height: number;
	bgColor: string;
	borderWidths: Widths;
	borderColors: ColorsOnWidth;
	borderPatterns: PatternArrays;
	borderShapes: PatternShapes;
};

const FilledArea = (props: Props) => {
	const {
		bgColor,
		width,
		height,
		borderWidths,
		borderColors,
		borderPatterns,
		borderShapes,
	} = props;
	const isBorderOnRect = isBorderRect(props);
	const rectStyleProps = isBorderOnRect
		? getRectStyle(props)
		: { fill: bgColor };
	return (
		<>
			<rect width={width} height={height} {...rectStyleProps} />
			{!isBorderOnRect && (
				<PathOnArea
					width={width}
					height={height}
					borderWidths={borderWidths}
					borderColors={borderColors}
					borderPatterns={borderPatterns}
					borderShapes={borderShapes}
				/>
			)}
		</>
	);
};

export default FilledArea;
