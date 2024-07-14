import type { PropsWithChildren } from 'react';
import type { CalculatedCellProps, CellStyle, GroupProps } from './types';
import { simpleValue } from './utils';

export const CenteredCellContent = ({
	cellOpt,
	styleToUse,
	children,
}: PropsWithChildren<{
	cellOpt: CalculatedCellProps & { _ignored: false };
	styleToUse: CellStyle;
}>) => {
	const { width, height, className } = cellOpt;

	let { rotateCenterProps, cx = 0, cy = 0 } = styleToUse;

	const propsToPassForGroup = (
		startX: number,
		startY: number
	): GroupProps => ({
		x: simpleValue(startX),
		y: simpleValue(startY),
		width,
		height,
	});
	// below redundant transformation is needed to avoid firefox incompatibility.
	return (
		<svg
			viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}
			style={{ overflow: 'visible' }}
		>
			<g
				style={{
					translate: `${simpleValue(width / 2 + cx)},${simpleValue(height / 2 + cy)}`,
				}}
				className={className ? `${className}-content` : undefined}
			>
				<g
					style={{
						translate: `-${simpleValue(width / 2 + cx)},-${simpleValue(height / 2 + cy)}`,
					}}
					{...(typeof rotateCenterProps === 'function'
						? rotateCenterProps(
								propsToPassForGroup(
									width / 2 + cx,
									height / 2 + cy
								)
							)
						: rotateCenterProps)}
				>
					{children}
				</g>
			</g>
		</svg>
	);
};
