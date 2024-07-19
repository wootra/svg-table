import { ReactElement } from 'react';

import type {
	ContentAsFuncBase,
	TablePropsBase,
	TableInCellPropsBase,
	SVGRenderElementBase,
	CellPropsBase,
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

/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TableProps = TablePropsBase<ReactElement>;
/**
 * Properties for defining a row within a table, including cells and optional styling.
 */
export type RowProps = TableProps['rows'][number];

// /**
//  * Properties for defining a row within a table, including cells and optional styling.
//  */
// export type RowProps = RowPropsBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

export type RowPropsAsObj = Exclude<RowProps, (CellPropsBase<ReactElement> | string)[]>;

/**
 * Properties for defining a cell within a table, including content and optional styling.
 */
export type CellProps = RowPropsAsObj['cells'][number];

export type CellPropsAsObj = Exclude<CellProps, string>;

export type CellStyle = Exclude<CellPropsAsObj['style'], undefined>;

export type ContentProps = CellPropsAsObj['content'];

export type TableInCellProps = TableInCellPropsBase<ReactElement>;

export type ContentAsFunc = ContentAsFuncBase<ReactElement, ContentAsFuncRetTypes<ReactElement>>;

export type TablePropsWithoutRows = Omit<TableProps, 'rows'>;

export type SVGRenderElement = SVGRenderElementBase<SVGElement>;
