import type { ReactNode } from 'react';
import type {
	BeforeOrAfterAsObj,
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
import { CenteredCellContent } from './CenteredCellContent';

type TextAnchor = 'middle' | 'start' | 'end';

const moveToLeftTop = (width: number, height: number, content: ReactNode) => {
	return (
		<g transform={`translate(${-width / 2}, ${-height / 2})`}>{content}</g>
	);
};

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

		if (cellOpt._standalone) adjustProps.standalone = true;

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
				<tspan key={index} x={startX} dy={index === 0 ? 0 : fontSize}>
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
			{...styleToApply}
		>
			{textToRender}
		</text>
	);
};

const styleWithFill = (
	style: TextStyle | undefined,
	color: string
): TextStyle => {
	return {
		fill: color,
		...style, // style will override
	};
};

const getAriaProps = (cellOpt: CalculatedCellProps & { _ignored: false }) => {
	return JSON.parse(
		JSON.stringify({
			'aria-colspan':
				cellOpt.colSpan && cellOpt.colSpan > 1
					? cellOpt.colSpan
					: undefined,
			'aria-rowspan':
				cellOpt.rowSpan && cellOpt.rowSpan > 1
					? cellOpt.rowSpan
					: undefined,
		})
	);
};

const getContents = (
	cellOpt: CalculatedCellProps & { _ignored: false },
	styleToUse: CellStyle
) => {
	const { content, width, height, before, after } = cellOpt;

	let { paddings, textColor, textStyle, cx = 0, cy = 0 } = styleToUse;

	// update styles with textColor only when fill is not given.
	textStyle = styleWithFill(textStyle, textColor);
	const { content: before2, ...beforeOpts } =
		typeof before === 'object' && (before as BeforeOrAfterAsObj).content
			? (before as BeforeOrAfterAsObj)
			: ({ content: before } as BeforeOrAfterAsObj);

	const { content: after2, ...afterOpts } =
		typeof after === 'object' && (after as BeforeOrAfterAsObj).content
			? (after as BeforeOrAfterAsObj)
			: ({ content: after } as BeforeOrAfterAsObj);

	const beforeTextStyle = styleWithFill(beforeOpts.textStyle, textColor);
	const afterTextStyle = styleWithFill(afterOpts.textStyle, textColor);

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
	const getContent = () => {
		if (typeof content === 'function') {
			let node = content(
				propsToPass(
					textStyle,
					'middle',
					width / 2 + cx,
					height / 2 + cy
				)
			);
			return node;
		} else if (typeof content === 'object') {
			const node = convertToTableIfNeeded(
				content,
				width,
				height,
				paddings,
				cellOpt
			);

			return node;
		} else {
			return content;
		}
	};

	const contentToUse = getContent();

	let beforeToUse =
		typeof before2 === 'function'
			? before2(propsToPass(beforeTextStyle, 'start', 0, height / 2))
			: before2;

	let afterToUse =
		typeof after2 === 'function'
			? after2(propsToPass(afterTextStyle, 'end', width, height / 2))
			: after2;

	const beforeContent =
		beforeToUse && typeof beforeToUse === 'string'
			? renderTextOnly(
					beforeToUse,
					0,
					height / 2,
					'start',
					beforeTextStyle
				)
			: beforeToUse;

	const afterContent =
		afterToUse && typeof afterToUse === 'string'
			? renderTextOnly(
					afterToUse,
					width,
					height / 2,
					'end',
					afterTextStyle
				)
			: afterToUse;

	const mainContent =
		typeof contentToUse === 'string'
			? renderTextOnly(contentToUse, cx, cy, 'middle', textStyle)
			: moveToLeftTop(width, height, contentToUse);

	return {
		beforeContent,
		afterContent,
		mainContent,
	};
};

const FilledAreaInCell = ({
	cellOpt,
	styleToUse,
}: {
	cellOpt: CalculatedCellProps & { _ignored: false };
	styleToUse: CellStyle;
}) => {
	const { width, height, className } = cellOpt;

	let { bgColor, borderWidths, borderColors, borderPatterns, borderShapes } =
		styleToUse;

	return (
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
	);
};

export const ACell = ({
	cellOpt,
	defaultStyle,
}: {
	cellOpt: CalculatedCellProps;
	defaultStyle: CellStyle;
}) => {
	if (cellOpt._ignored) return null;

	const { x, y, width, height, style, className } = cellOpt;

	const styleToUse = {
		...defaultStyle,
		...style,
	};

	let { paddings, svgStyle, allowOverflow } = styleToUse;
	const padLeft = getWid(paddings, 'left');
	const padTop = getWid(paddings, 'top');

	const svgStyleToUse = {
		...svgStyle,
		...(allowOverflow ? { overflow: 'visible' } : {}),
	};

	const ariaProps = getAriaProps(cellOpt);

	const { beforeContent, afterContent, mainContent } = getContents(
		cellOpt,
		styleToUse
	);

	return (
		<g
			transform={`translate(${x}, ${y})`}
			className={className ? `${className}-wrapper` : undefined}
		>
			<FilledAreaInCell cellOpt={cellOpt} styleToUse={styleToUse} />
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
					role='cell'
					{...ariaProps}
				>
					{beforeContent}
					<CenteredCellContent
						cellOpt={cellOpt}
						styleToUse={styleToUse}
					>
						{mainContent}
					</CenteredCellContent>
					{afterContent}
				</g>
			</svg>
		</g>
	);
};
