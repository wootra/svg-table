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
	SVGTableElement,
} from '../../svg-table-module/src/private-types';

export * from '../../svg-table-module/src/common-types';

export type ContentProps = ContentPropsBase<'text'>;
export type TableInCellProps = TableInCellPropsBase<SVGElement | HTMLElement, 'text', 'g', 'svg'>;

export type ContentAsFunc = ContentAsFuncBase<
	SVGElement | HTMLElement,
	'text',
	SVGRenderElement | SVGTableElement<SVGElement | HTMLElement>
>;

/** object for before or after content when it need to specify optional styles and dimensions */
export type BeforeOrAfterAsObj = BeforeOrAfterAsObjBase<SVGElement | HTMLElement, 'text'>;

/**
 * Represents the content that can be displayed before or after the main content in a cell.
 * It can be a SVGElement | HTMLElement, a function that returns a SVGElement | HTMLElement, or an object containing the content and optional styling.
 * */
export type BeforeOrAfter = BeforeOrAfterBase<SVGElement | HTMLElement, 'text'>;

/**
 * Properties for defining a cell within a table, including content and optional styling.
 */
export type CellProps = CellPropsBase<SVGElement | HTMLElement, 'text', 'g', 'svg'>;

export type CellPropsAsObj = CellPropsAsObjBase<SVGElement | HTMLElement, 'text', 'g', 'svg'>;

/**
 * Extended cell properties including calculated dimensions and positioning.
 */
export type CalculatedCellProps = CalculatedCellPropsBase<SVGElement | HTMLElement, 'text', 'g', 'svg'>;

/**
 * Properties for defining a row within a table, including cells and optional styling.
 */
export type RowProps = RowPropsBase<SVGElement | HTMLElement, 'text', 'g', 'svg'>;

export type RowPropsAsObj = RowPropsAsObjBase<SVGElement | HTMLElement, 'text', 'g', 'svg'>;

/**
 * Extended row properties including calculated dimensions and positioning.
 */
export type CalculatedRowProps = CalculatedRowPropsBase<SVGElement | HTMLElement, 'text', 'g', 'svg'>;

/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TableProps = TablePropsBase<SVGElement | HTMLElement, 'text', 'g', 'svg', CellStyle, RowProps>;

export type CellStyle = CellStyleBase<'text', 'g', 'svg'>;

export type SVGRenderElement = SVGRenderElementBase<SVGElement | HTMLElement>;
