import { ReactElement } from 'react';

import type {
	ContentAsFuncBase,
	BeforeOrAfterAsObjBase,
	BeforeOrAfterBase,
	CellPropsBase,
	CalculatedCellPropsBase,
	RowPropsBase,
	RowPropsAsObjBase,
	CellPropsAsObjBase,
	CalculatedRowPropsBase,
	TablePropsBase,
	TableInCellPropsBase,
	ContentPropsBase,
	CellStyleBase,
	SVGRenderElementBase,
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

export type ContentProps = ContentPropsBase<SVGTextElement>;
export type TableInCellProps = TableInCellPropsBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

export type ContentAsFunc = ContentAsFuncBase<ReactElement, SVGTextElement>;

/** object for before or after content when it need to specify optional styles and dimensions */
export type BeforeOrAfterAsObj = BeforeOrAfterAsObjBase<ReactElement, SVGTextElement>;

/**
 * Represents the content that can be displayed before or after the main content in a cell.
 * It can be a ReactElement, a function that returns a ReactElement, or an object containing the content and optional styling.
 * */
export type BeforeOrAfter = BeforeOrAfterBase<ReactElement, SVGTextElement>;

/**
 * Properties for defining a cell within a table, including content and optional styling.
 */
export type CellProps = CellPropsBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

export type CellPropsAsObj = CellPropsAsObjBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

/**
 * Extended cell properties including calculated dimensions and positioning.
 */
export type CalculatedCellProps = CalculatedCellPropsBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

/**
 * Properties for defining a row within a table, including cells and optional styling.
 */
export type RowProps = RowPropsBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

export type RowPropsAsObj = RowPropsAsObjBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

/**
 * Extended row properties including calculated dimensions and positioning.
 */
export type CalculatedRowProps = CalculatedRowPropsBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TableProps = TablePropsBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>;

export type CellStyle = CellStyleBase<SVGTextElement, SVGGElement, SVGSVGElement>;

export type SVGRenderElement = SVGRenderElementBase<SVGElement>;
