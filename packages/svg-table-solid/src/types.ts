import {
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
} from '@shjeon0730/svg-table-core/private-types';

export * from '@shjeon0730/svg-table-core/common-types';

export type ContentProps = ContentPropsBase<'text'>;
export type TableInCellProps = TableInCellPropsBase<Node, 'text', 'g', 'svg'>;

export type ContentAsFunc = ContentAsFuncBase<Node, 'text', SVGRenderElement>;

/** object for before or after content when it need to specify optional styles and dimensions */
export type BeforeOrAfterAsObj = BeforeOrAfterAsObjBase<Node, 'text'>;

/**
 * Represents the content that can be displayed before or after the main content in a cell.
 * It can be a Node, a function that returns a Node, or an object containing the content and optional styling.
 * */
export type BeforeOrAfter = BeforeOrAfterBase<Node, 'text'>;

/**
 * Properties for defining a cell within a table, including content and optional styling.
 */
export type CellProps = CellPropsBase<Node, 'text', 'g', 'svg'>;

export type CellPropsAsObj = CellPropsAsObjBase<Node, 'text', 'g', 'svg'>;

/**
 * Extended cell properties including calculated dimensions and positioning.
 */
export type CalculatedCellProps = CalculatedCellPropsBase<Node, 'text', 'g', 'svg'>;

/**
 * Properties for defining a row within a table, including cells and optional styling.
 */
export type RowProps = RowPropsBase<Node, 'text', 'g', 'svg'>;

export type RowPropsAsObj = RowPropsAsObjBase<Node, 'text', 'g', 'svg'>;

/**
 * Extended row properties including calculated dimensions and positioning.
 */
export type CalculatedRowProps = CalculatedRowPropsBase<Node, 'text', 'g', 'svg'>;

/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TableProps = TablePropsBase<Node, 'text', 'g', 'svg'>;

export type CellStyle = CellStyleBase<'text', 'g', 'svg'>;

export type SVGRenderElement = SVGRenderElementBase<Node>;
