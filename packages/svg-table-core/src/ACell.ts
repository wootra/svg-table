import type { SVGAttributes } from 'react';
import type { GType, PrimitiveNode, SVGType, TextAnchor, TextType, Widths } from './common-types';
import type {
	TextStyleBase,
	CellStyleBase,
	ContentPropsBase,
	BeforeOrAfterAsObjBase,
	CalculatedCellPropsBase,
	SVGTableElement,
	TableInCellPropsBase,
	TablePropsBase,
	ContentTypeInCell,
	SVGTableElementAsObj,
} from './private-types';
import { getDuplicatedProps, getWid, simpleValue } from './utils';
import FilledArea from './FilledArea';
import { CenteredCellContent } from './CenteredCellContent';
import { element } from './element';
import { SVGTableBase } from './SVGTableBase';

const moveToLeftTop = <NODE extends PrimitiveNode>(
	width: number,
	height: number,
	content: SVGTableElement<NODE> | SVGTableElementAsObj
) => {
	return element<NODE>(
		'g',
		{
			transform: `translate(${-width / 2}, ${-height / 2})`,
		},
		content
	);
};

const convertToTableIfNeeded = <
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
>(
	contentTouse: ContentTypeInCell<NODE, TEXTTYPE, GTYPE, SVGTYPE>,
	width: number,
	height: number,
	paddings: Widths,
	cellOpt: CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> & {
		_ignored: false;
	}
): SVGTableElement<NODE> => {
	if ((contentTouse as TableInCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>).table) {
		const padLeft = getWid(paddings, 'left');
		const padTop = getWid(paddings, 'top');
		const padRight = getWid(paddings, 'right');
		const padBottom = getWid(paddings, 'bottom');

		const tableWid = simpleValue(width - padRight - padLeft);
		const adjustProps: Partial<TablePropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>> = cellOpt._heightAdjust
			? {
					height: simpleValue(Math.max(height - padTop - padBottom, 1)),
				}
			: {};

		if (cellOpt._standalone) adjustProps.standalone = true;

		return SVGTableBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>({
			width: simpleValue(tableWid),
			...adjustProps,
			...(contentTouse as TableInCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>).table,
		});
	}
	return contentTouse as SVGTableElement<NODE>;
};

const renderTextOnly = <NODE extends PrimitiveNode, TEXTTYPE extends TextType>(
	contentToRender: string,
	startX: number,
	startY: number,
	textAnchor: TextAnchor,
	styleToApply: SVGAttributes<TEXTTYPE> = {}
): SVGTableElement<NODE> => {
	const lines = contentToRender.split('\n');
	let textToRender: SVGTableElement<NODE>[] | string[] = [contentToRender];

	if (lines.length > 1) {
		const fontSize = (styleToApply.fontSize as number) || 16;
		textToRender = lines
			.filter(v => v)
			.map((line, index) =>
				element<NODE>(
					'tspan',
					{
						fontSize,
						x: startX,
						dy: index === 0 ? 0 : fontSize,
					},
					line
				)
			);
		startY = startY - ((lines.length - 1) * simpleValue(fontSize)) / 2;
	}

	const props: Record<string, any> = {
		x: simpleValue(startX),
		y: simpleValue(startY),
		textAnchor: textAnchor,
		dominantBaseline: 'middle',
		...styleToApply,
	};

	getDuplicatedProps(props);
	return element<NODE>('text', props as SVGAttributes<'text'>, ...textToRender);
};

const styleWithFill = <TEXTTYPE extends TextType>(
	style: TextStyleBase<TEXTTYPE> | undefined,
	color: string
): TextStyleBase<TEXTTYPE> => {
	return {
		fill: color,
		...style, // style will override
	};
};

const getAriaProps = <
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
>(
	cellOpt: CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> & {
		_ignored: false;
	}
) => {
	return JSON.parse(
		JSON.stringify({
			'aria-colspan': cellOpt.colSpan && cellOpt.colSpan > 1 ? cellOpt.colSpan : undefined,
			'aria-rowspan': cellOpt.rowSpan && cellOpt.rowSpan > 1 ? cellOpt.rowSpan : undefined,
		})
	);
};

const getContents = <
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
>(
	cellOpt: CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> & {
		_ignored: false;
	},
	styleToUse: CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE>
) => {
	const { content, width, height, before, after } = cellOpt;

	let { paddings, textColor, textStyle, cx = 0, cy = 0 } = styleToUse;

	// update styles with textColor only when fill is not given.
	textStyle = styleWithFill(textStyle, textColor);
	const { content: before2, ...beforeOpts } =
		typeof before === 'object' && (before as BeforeOrAfterAsObjBase<NODE, TEXTTYPE>).content
			? (before as BeforeOrAfterAsObjBase<NODE, TEXTTYPE>)
			: ({ content: before } as BeforeOrAfterAsObjBase<NODE, TEXTTYPE>);

	const { content: after2, ...afterOpts } =
		typeof after === 'object' && (after as BeforeOrAfterAsObjBase<NODE, TEXTTYPE>).content
			? (after as BeforeOrAfterAsObjBase<NODE, TEXTTYPE>)
			: ({ content: after } as BeforeOrAfterAsObjBase<NODE, TEXTTYPE>);

	const beforeTextStyle = styleWithFill(beforeOpts.textStyle, textColor);
	const afterTextStyle = styleWithFill(afterOpts.textStyle, textColor);

	const propsToPass = (
		textStyleToUse: TextStyleBase<TEXTTYPE> | undefined,
		anchorBase: TextAnchor,
		startX: number,
		startY: number
	): ContentPropsBase<TEXTTYPE> => ({
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
			let node = content(propsToPass(textStyle, 'middle', width / 2 + cx, height / 2 + cy));
			return node;
		} else if (typeof content === 'object') {
			const node = convertToTableIfNeeded<NODE, TEXTTYPE, GTYPE, SVGTYPE>(
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
		typeof before2 === 'function' ? before2(propsToPass(beforeTextStyle, 'start', 0, height / 2)) : before2;

	let afterToUse =
		typeof after2 === 'function' ? after2(propsToPass(afterTextStyle, 'end', width, height / 2)) : after2;

	const beforeContent =
		beforeToUse && typeof beforeToUse === 'string'
			? renderTextOnly<NODE, TEXTTYPE>(beforeToUse, 0, height / 2, 'start', beforeTextStyle)
			: beforeToUse;

	const afterContent =
		afterToUse && typeof afterToUse === 'string'
			? renderTextOnly<NODE, TEXTTYPE>(afterToUse, width, height / 2, 'end', afterTextStyle)
			: afterToUse;

	const mainContent =
		typeof contentToUse === 'string'
			? renderTextOnly<NODE, TEXTTYPE>(contentToUse, cx, cy, 'middle', textStyle)
			: moveToLeftTop(width, height, contentToUse);

	return {
		beforeContent,
		afterContent,
		mainContent,
	};
};

const FilledAreaInCell = <
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
>({
	cellOpt,
	styleToUse,
}: {
	cellOpt: CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> & {
		_ignored: false;
	};
	styleToUse: CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE>;
}): SVGTableElement<NODE> => {
	const { width, height, className } = cellOpt;

	let { bgColor, borderWidths, borderColors, borderPatterns, borderShapes } = styleToUse;

	return FilledArea({
		className: className ? `${className}-filled-back` : undefined,
		width: width,
		height: height,
		borderWidths: borderWidths,
		borderColors: borderColors,
		borderPatterns: borderPatterns,
		borderShapes: borderShapes,
		...(bgColor ? { bgColor } : {}),
	});
};

export const ACell = <
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
>({
	cellOpt,
	defaultStyle,
}: {
	cellOpt: CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>;
	defaultStyle: CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE>;
}): SVGTableElement<NODE> => {
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

	const { beforeContent, afterContent, mainContent } = getContents(cellOpt, styleToUse);

	return element<NODE>(
		'g',
		{
			transform: `translate(${x}, ${y})`,
			className: className ? `${className}-wrapper` : undefined,
		},
		FilledAreaInCell<NODE, TEXTTYPE, GTYPE, SVGTYPE>({ cellOpt: cellOpt, styleToUse: styleToUse }),
		element<NODE>(
			'svg',
			{
				width: width,
				height: Math.max(height, 1),
				style: svgStyleToUse,
				viewBox: `0 0 ${width} ${height}`,
				className: className ? className : undefined,
			},
			element<NODE>(
				'g',
				{
					transform: `translate(${padLeft}, ${padTop})`,
					className: className ? `${className}-padding` : undefined,
					role: 'cell',
					...ariaProps,
				},
				beforeContent,
				CenteredCellContent<NODE, TEXTTYPE, GTYPE, SVGTYPE>({
					cellOpt: cellOpt,
					styleToUse: styleToUse,
					children: mainContent,
				}),
				afterContent
			)
		)
	);
};