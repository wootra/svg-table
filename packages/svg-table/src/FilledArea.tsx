import { getRectStyle, isBorderRect } from './utils';
import type { BorderStyles } from './types';
import { PathOnArea } from './PathOnArea';

type Props = {
	width: number;
	height: number;
	bgColor?: string;

	className?: string;
} & Partial<BorderStyles>;

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
	const isBgColorVisible = bgColor && bgColor !== 'transparent';
	const isBorderOnRect = isBgColorVisible && isBorderRect(props);
	const rectStyleProps = isBorderOnRect
		? getRectStyle(props)
		: { fill: bgColor };
	return (
		<g className={`filled-area ${className ?? ''}`}>
			{isBgColorVisible && (
				<rect width={width} height={height} {...rectStyleProps} />
			)}
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
