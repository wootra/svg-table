import { JSX } from 'solid-js';
import {
	ContentAsFuncBase,
	CellPropsBase,
	TablePropsBase,
	TableInCellPropsBase,
	SVGRenderElementBase,
	ContentAsFuncRetTypes,
} from '@shjeon0730/svg-table-core';

export type {
	PrimitiveNode,
	Widths,
	ColorsOnWidth,
	PatternArrays,
	PatternShape,
	PatternShapes,
	BorderStyles,
	TextHAlign,
	TextVAlign,
	GroupProps,
	RowStyle,
	WidthPos,
	TableStyle,
	SVGElementName,
	TextType,
	GType,
	SVGType,
	TextAnchor,
	DominantBaseline,
} from '@shjeon0730/svg-table-core';

export type ElementType = Node;
/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TableProps = TablePropsBase<ElementType>;
/**
 * Properties for defining a row within a table, including cells and optional styling.
 */
export type RowProps = TableProps['rows'][number];

// /**
//  * Properties for defining a row within a table, including cells and optional styling.
//  */
// export type RowProps = RowPropsBase<ElementType, SVGTextElement, SVGGElement, SVGSVGElement>;

export type RowPropsAsObj = Exclude<RowProps, (CellPropsBase<ElementType> | string)[]>;
export type RowPropsWithoutCells = Omit<RowPropsAsObj, 'cells'>;
export type RowPropsWithChildren = RowPropsWithoutCells & {
	children: JSX.Element;
};
/**
 * Properties for defining a cell within a table, including content and optional styling.
 */
export type CellProps = RowPropsAsObj['cells'][number];

export type CellPropsAsObj = Exclude<CellProps, string>;
export type CellPropsWithoutContent = Omit<CellPropsAsObj, 'content'>;
export type CellPropsWithChildren = CellPropsWithoutContent & {
	children: JSX.Element;
};
export type CellStyle = Exclude<CellPropsAsObj['style'], undefined>;

export type ContentProps = CellPropsAsObj['content'];

export type TableInCellProps = TableInCellPropsBase<ElementType>;

export type RetFromContentFunc = ContentAsFuncRetTypes<ElementType>;

export type ContentAsFunc = ContentAsFuncBase<ElementType, RetFromContentFunc>;

export type TablePropsWithoutRows = Omit<TableProps, 'rows'>;
export type TablePropsWithChildren = TablePropsWithoutRows & {
	children: JSX.Element;
};

export type SVGRenderElement = SVGRenderElementBase<SVGElement>;
