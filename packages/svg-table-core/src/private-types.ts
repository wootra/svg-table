import type { HTMLAttributes, SVGAttributes } from 'react';

import {
	RowStyle,
	PrimitiveNode,
	TableStyle,
	SVGElementName,
	Widths,
	GroupProps,
	BorderStyles,
	TextType,
	GType,
	SVGType,
} from './common-types';

/**
 * Style properties for SVG text elements.
 */
export type TextStyleBase = SVGAttributes<TextType>;

/** Style properties for SVG g element */
export type GroupStyleBase = SVGAttributes<GType>;

export type ContentPropsBase = {
	/**
	 * drawing x position of the content.
	 */
	x: number;
	/**
	 * drawing y position of the content.
	 */
	y: number;
	/**
	 * width of the cell.
	 */
	width: number;
	/**
	 * height of the cell.
	 */
	height: number;
	/**
	 * fill color of the text element
	 */
	textColor: string;
	/**
	 * style attribute on text element
	 */
	textStyle: TextStyleBase;
};

/**
 * Style properties for table cells, including background color, padding, and text styling.
 */
export type CellStyleBase = {
	/**
	 * Optional background color of the cell. Accepts any valid CSS color value.
	 */
	bgColor: string | undefined;
	/**
	 * Padding around the content of the cell. Can be specified as a single number (for all sides),
	 * a pair of numbers (top/bottom, left/right), or four numbers (top, right, bottom, left).
	 */
	paddings: Widths;
	/**
	 * Color of the text within the cell. Accepts any valid CSS color value.
	 */
	textColor: string;
	/**
	 * Determines whether the content of the cell is allowed to overflow its boundaries.
	 */
	allowOverflow: boolean;
	/**
	 * Optional styling for the text within the cell, using SVG text attributes.
	 * textStyle is given as style attribute of the text element.
	 */
	textStyle: TextStyleBase | undefined;
	/**
	 * Optional styling for rotate center of the cell. It will apply attribute on center of the text.
	 * for example, you can rotate the text or cell element based on the center of the cell.
	 */
	// eslint-disable-next-line no-unused-vars
	rotateCenterProps?:
		| GroupStyleBase
		// eslint-disable-next-line no-unused-vars
		| ((props: GroupProps) => GroupStyleBase);

	/**
	 * if you want to adjust the horizontal position of the text based on the center position, use this.
	 */
	cx?: number;
	/**
	 * if you want to adjust the vertical position of the text based on the center position, use this.
	 */
	cy?: number;

	/**
	 * Optional CSS styles for the SVG element representing the cell.
	 */
	svgStyle?: HTMLAttributes<SVGType>['style'];
	/**
	 * automatically draw borders only inner lines. if table has rx && ry, this option will be automatically set to true
	 */
	onlyInnerBorders?: boolean;
} & Partial<BorderStyles>;

export type ContentAsFuncRetTypes<NODE extends PrimitiveNode> =
	| SVGRenderElementBase<NODE>
	| SVGTableElementAsObj
	| SVGRenderElementBase<NODE>
	| SVGTableElementAsObj;

export type ContentAsFuncBase<
	NODE extends PrimitiveNode,
	RETTYPE extends ContentAsFuncRetTypes<NODE> = ContentAsFuncRetTypes<NODE>,
> =
	| ((
			// eslint-disable-next-line no-unused-vars
			props: ContentPropsBase
	  ) => RETTYPE)
	| (() => RETTYPE);

export type TableInCellPropsBase<NODE extends PrimitiveNode> = {
	table: TableOptionalPropsBase<NODE>;
};

/** object for before or after content when it need to specify optional styles and dimensions */
export type BeforeOrAfterAsObjBase<NODE extends PrimitiveNode> = {
	content: SVGRenderElementBase<NODE> | ContentAsFuncBase<NODE, ContentAsFuncRetTypes<NODE>>;
	/** style of the text element */
	textStyle?: TextStyleBase;
	/**  x offset of the text  */
	cx?: number;
	/** y offset of the text */
	cy?: number;
};

/**
 * Represents the content that can be displayed before or after the main content in a cell.
 * It can be a NodeWrapper, a function that returns a NodeWrapper, or an object containing the content and optional styling.
 * */
export type BeforeOrAfterBase<NODE extends PrimitiveNode> =
	| BeforeOrAfterAsObjBase<NODE>
	| SVGRenderElementBase<NODE>
	| ContentAsFuncBase<NODE, ContentAsFuncRetTypes<NODE>>;

export type ContentTypeInCell<NODE extends PrimitiveNode> =
	| SVGRenderElementBase<NODE>
	| SVGTableElement<NODE>
	| ContentAsFuncBase<NODE, ContentAsFuncRetTypes<NODE>>
	| TableInCellPropsBase<NODE>;
/**
 * Properties for defining a cell within a table, including content and optional styling.
 */
export type CellPropsBase<NODE extends PrimitiveNode> = CellPropsAsObjBase<NODE>;

export type CellPropsAsObjBase<NODE extends PrimitiveNode> = {
	/** Optional custom style for the cell, overriding default styles. */
	style?: Partial<CellStyleBase>;
	/** The content to be displayed within the cell, can be any React node. */
	content: ContentTypeInCell<NODE>;
	/** Optional content to be displayed before the main content, can be a React node or a function that returns a React node. */
	before?: BeforeOrAfterBase<NODE>;
	/** Optional content to be displayed after the main content, can be a React node or a function that returns a React node. */
	after?: BeforeOrAfterBase<NODE>;
	/** Optional. Specifies the number of columns a cell should span across. */
	colSpan?: number;
	/** Optional. Specifies the number of rows a cell should span across. */
	rowSpan?: number;
	/** clsss name to control individual cell.  */
	className?: string;
};

/**
 * Extended cell properties including calculated dimensions and positioning.
 */
export type CalculatedCellPropsBase<NODE extends PrimitiveNode> =
	| (CellPropsAsObjBase<NODE> & {
			/** Indicates that the cell is not ignored and should be rendered. */
			_ignored: false;
			_heightAdjust: boolean;
			_standalone: boolean;
			/** The x-coordinate of the cell's position. */
			x: number;
			/** The y-coordinate of the cell's position. */
			y: number;
			/** The calculated width of the cell. */
			width: number;
			/** The calculated height of the cell. */
			height: number;
	  })
	| {
			/** Indicates that the cell is ignored and should not be rendered. */
			_ignored: true;
	  };

export type RowPropsAsObjBase<NODE extends PrimitiveNode> = {
	/** Optional custom style for the row, overriding default styles. */
	style?: Partial<RowStyle>;
	/** An array of CellPropsBase, defining the cells within the row. */
	cells: (CellPropsBase<NODE> | string)[];
};

/**
 * Properties for defining a row within a table, including cells and optional styling.
 */
export type RowPropsBase<NODE extends PrimitiveNode> = RowPropsAsObjBase<NODE> | (CellPropsBase<NODE> | string)[];

/**
 * Extended row properties including calculated dimensions and positioning.
 */
export type CalculatedRowPropsBase<
	NODE extends PrimitiveNode,
	CELL_CALC_PROP extends CalculatedCellPropsBase<NODE> = CalculatedCellPropsBase<NODE>,
> = Omit<RowPropsAsObjBase<NODE>, 'cells'> & {
	/** The x-coordinate of the row's position. */
	x: number;
	/** The y-coordinate of the row's position. */
	y: number;
	/** The calculated width of the row. */
	width: number;
	/** The calculated height of the row. */
	height: number;
	/** An array of CalculatedCellPropsBase, including position and size for each cell. */
	cells: CELL_CALC_PROP[];
};

/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TableOptionalAttributesBase<NODE extends PrimitiveNode> = {
	/** Optional CSS class name for the table. */
	className?: string;
	/** Optional. Defines SVG definitions such as gradients or patterns that can be used within the table. */
	defs?: NODE | NODE[];
	/** Optional when standalone is true, ns is added automatically, width and height attributes will not be given. */
	standalone?: boolean;
	/** Optional. override more attributes on the root svg on top of default attributes for more flexiblity. */
	svgAttrs?: SVGAttributes<'svg'>;
	/** Optional. Total height of the SVG table in pixels. if it is given, rows will be adjusted based on this size. */
	height?: number;
	/** Optional. Specifies the width of each column. These are in points and may not match pixels if colGaps is specified. this is not real sizes but ratios based on width after extracting left and right margins and colGaps */
	columnWidths?: number[];
	/** Optional. Specifies the height of each row. These are in points and may not match pixels if rowGaps is specified. this is not real sizes but ratios based on height after extracting top and bottom margins and rowGaps */
	rowHeights?: number[];
	/** Optional default cell style that applies to all cells unless overridden. */
	defaultCellStyle?: Partial<CellStyleBase>;
	/** Optional default row style that applies to all rows unless overridden. */
	defaultRowStyle?: Partial<RowStyle>;
	/** Optional custom style for the table, overriding default styles. */
	style?: Partial<TableStyle>;
};

/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TableOptionalPropsBase<NODE extends PrimitiveNode> = TableOptionalAttributesBase<NODE> & {
	/** An array of RowPropsBase, defining the rows within the table. */
	rows: (RowPropsAsObjBase<NODE> | (CellPropsBase<NODE> | string)[])[];
};

/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TablePropsBase<NODE extends PrimitiveNode> = TableOptionalPropsBase<NODE> & {
	/** Total width of the SVG table in pixels. */
	width?: number;
};

export type CellElementPropsBase<NODE extends PrimitiveNode> = {
	cellOpt: CalculatedCellPropsBase<NODE>;
	defaultStyle: CellStyleBase;
};

export type SVGTableElementAttributes<
	T extends SVGElementName | SVGElement | 'style' = SVGElementName | SVGElement | 'style',
> = SVGAttributes<T>;

export type SVGTableElementAsObj<
	T extends SVGElementName | SVGElement | 'style' = SVGElementName | SVGElement | 'style',
> = {
	__internal: 'svg-table-element-as-obj' | 'svg-table-rendered-text';
	type: T;
	attrs: SVGTableElementAttributes<T>;
	children: SVGTableElement[];
};

export type SVGRenderElementBase<NODE extends PrimitiveNode = PrimitiveNode> =
	| NODE
	| string
	| boolean
	| null
	| undefined;

export type SVGTableElement<
	NODE extends PrimitiveNode = PrimitiveNode,
	T extends SVGElementName | SVGElement = SVGElementName | SVGElement,
	RET extends SVGTableElementAsObj<T> | SVGRenderElementBase<NODE> =
		| SVGTableElementAsObj<T>
		| SVGRenderElementBase<NODE>,
> = RET;
