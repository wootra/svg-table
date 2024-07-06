import type { ReactNode } from 'react';
import type {
	CalculatedCellProps,
	CellStyle,
	ContentProps,
	TableInCellProps,
	TableProps,
	TextStyle,
	Widths,
} from './types';
import { getWid, simpleValue } from './utils';
import FilledArea from './FilledArea';
import { SVGTable } from './SVGTable';

const convertToTableIfNeeded = (
	contentTouse: ReactNode | TableInCellProps,
	width: number,
	height: number,
	paddings: Widths,
	cellOpt: CalculatedCellProps & { _ignored: false }
): ReactNode => {
	if ((contentTouse as TableInCellProps).table) {
		const padLeft = getWid(paddings, 'left');
		const padTop = getWid(paddings, 'top');
		const padRight = getWid(paddings, 'right');
		const padBottom = getWid(paddings, 'bottom');

		const tableWid = simpleValue(width - padRight - padLeft);
		const adjustProps: Partial<TableProps> = cellOpt._heightAdjust
			? {
					height: simpleValue(
						Math.max(height - padTop - padBottom, 1)
					),
				}
			: {};

		return (
			<SVGTable
				width={simpleValue(tableWid)}
				{...adjustProps}
				{...(contentTouse as TableInCellProps).table}
			/>
		);
	}
	return contentTouse as ReactNode;
};

type TextAnchor = 'middle' | 'start' | 'end';

export const ACell = ({
	cellOpt,
	defaultStyle,
}: {
	cellOpt: CalculatedCellProps;
	defaultStyle: CellStyle;
}) => {
	if (cellOpt._ignored) return null;

	const { content, x, y, width, height, style, before, after, className } =
		cellOpt;

	const styleToUse = {
		...defaultStyle,
		...style,
	};

	const {
		bgColor,
		borderWidths,
		borderColors,
		borderPatterns,
		borderShapes,
		paddings,
		svgStyle,
		textColor,
		textStyle,
		beforeTextStyle,
		afterTextStyle,
		allowOverflow,
		cx = 0,
		cy = 0,
	} = styleToUse;
	const padLeft = getWid(paddings, 'left');
	const padTop = getWid(paddings, 'top');

	const svgStyleToUse = {
		...svgStyle,
		...(allowOverflow ? { overflow: 'visible' } : {}),
	};

	const propsToPass = (
		textStyleToUse: TextStyle | undefined,
		anchorBase: TextAnchor,
		startX: number,
		startY: number
	): ContentProps => ({
		x: simpleValue(startX),
		y: simpleValue(startY),
		width,
		height,
		textColor,
		textStyle: {
			textAnchor: anchorBase,
			dominantBaseline: 'middle',
			...textStyleToUse,
		},
	});
	// execute it if contents are callback function.
	let contentTouse =
		typeof content === 'function'
			? content(
					propsToPass(
						textStyle,
						'middle',
						width / 2 + cx,
						height / 2 + cy
					)
				)
			: content;
	let beforeToUse =
		typeof before === 'function'
			? before(propsToPass(beforeTextStyle, 'start', 0, height / 2))
			: before;
	let afterToUse =
		typeof after === 'function'
			? after(propsToPass(afterTextStyle, 'end', width, height / 2))
			: after;

	if (typeof contentTouse === 'object') {
		contentTouse = convertToTableIfNeeded(
			contentTouse,
			width,
			height,
			paddings,
			cellOpt
		);
	}

	const renderTextOnly = (
		contentToRender: string,
		startX: number,
		startY: number,
		textAnchor: TextAnchor,
		styleToApply: TextStyle = {}
	) => {
		const lines = contentToRender.split('\n');
		let textToRender: ReactNode = contentToRender;
		if (lines.length > 1) {
			const fontSize = (styleToApply.fontSize as number) || 16;
			textToRender = lines
				.filter(v => v)
				.map((line, index) => (
					<tspan
						key={index}
						x={startX}
						dy={index === 0 ? 0 : fontSize}
					>
						{line}
					</tspan>
				));
			startY = startY - ((lines.length - 1) * simpleValue(fontSize)) / 2;
		}

		return (
			<text
				x={simpleValue(startX)}
				y={simpleValue(startY)}
				textAnchor={textAnchor}
				dominantBaseline='middle'
				fill={textColor}
				{...styleToApply}
			>
				{textToRender}
			</text>
		);
	};

	return (
		<g
			transform={`translate(${x}, ${y})`}
			className={className ? `${className}-wrapper` : undefined}
		>
			<FilledArea
				className={className ? `${className}-filled-back` : undefined}
				width={width}
				height={height}
				borderWidths={borderWidths}
				borderColors={borderColors}
				borderPatterns={borderPatterns}
				borderShapes={borderShapes}
				{...(bgColor ? { bgColor } : {})}
			/>
			<svg
				width={width}
				height={Math.max(height, 1)}
				style={svgStyleToUse}
				viewBox={`0 0 ${width} ${height}`}
				className={className ? className : undefined}
			>
				<g
					transform={`translate(${padLeft}, ${padTop})`}
					className={className ? `${className}-padding` : undefined}
				>
					{before && typeof beforeToUse === 'string'
						? renderTextOnly(
								beforeToUse,
								0,
								height / 2,
								'start',
								beforeTextStyle
							)
						: beforeToUse}
					<g
						transform={`translate(${width / 2 + cx},${height / 2 + cy})`}
						className={
							className ? `${className}-content` : undefined
						}
					>
						<g
							transform={`translate(-${width / 2 + cx},-${height / 2 + cy})`}
						>
							{typeof contentTouse === 'string'
								? renderTextOnly(
										contentTouse,
										width / 2 + cx,
										height / 2 + cy,
										'middle',
										textStyle
									)
								: contentTouse}
						</g>
					</g>

					{afterToUse && typeof afterToUse === 'string'
						? renderTextOnly(
								afterToUse,
								width,
								height / 2,
								'end',
								afterTextStyle
							)
						: afterToUse}
				</g>
			</svg>
		</g>
	);
};
