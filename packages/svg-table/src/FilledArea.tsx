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
	className?: string;
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
		className,
	} = props;
	const isBorderOnRect = isBorderRect(props);
	const rectStyleProps = isBorderOnRect
		? getRectStyle(props)
		: { fill: bgColor };
	return (
		<g className={`filled-area ${className ?? ''}`}>
			<rect width={width} height={height} {...rectStyleProps} />
			{!isBorderOnRect && (
				<PathOnArea
					className='paths-on-area-for-filled-area'
					width={width}
					height={height}
					borderWidths={borderWidths}
					borderColors={borderColors}
					borderPatterns={borderPatterns}
					borderShapes={borderShapes}
				/>
			)}
		</g>
	);
};

export default FilledArea;
