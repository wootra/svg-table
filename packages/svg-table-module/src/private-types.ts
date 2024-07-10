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
export type TextStyleBase<TEXTTYPE extends TextType> = SVGAttributes<TEXTTYPE>;

/** Style properties for SVG g element */
export type GroupStyleBase<GTYPE extends GType> = SVGAttributes<GTYPE>;

export type ContentPropsBase<TEXTTYPE extends TextType> = {
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
	textStyle: TextStyleBase<TEXTTYPE>;
};

/**
 * Style properties for table cells, including background color, padding, and text styling.
 */
export type CellStyleBase<TEXTTYPE extends TextType, GTYPE extends GType, SVGTYPE extends SVGType> = {
	/**
	 * Optional background color of the cell. Accepts any valid CSS color value.
	 */
	bgColor?: string;
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
	textStyle?: TextStyleBase<TEXTTYPE>;
	/**
	 * Optional styling for rotate center of the cell. It will apply attribute on center of the text.
	 * for example, you can rotate the text or cell element based on the center of the cell.
	 */
	// eslint-disable-next-line no-unused-vars
	rotateCenterProps?:
		| GroupStyleBase<GTYPE>
		// eslint-disable-next-line no-unused-vars
		| ((props: GroupProps) => GroupStyleBase<GTYPE>);

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
	svgStyle?: HTMLAttributes<SVGTYPE>['style'];
} & Partial<BorderStyles>;

export type ContentAsFuncBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	RETTYPE extends SVGRenderElementBase<NODE> | SVGTableElementAsObj =
		| SVGRenderElementBase<NODE>
		| SVGTableElementAsObj,
> =
	| ((
			// eslint-disable-next-line no-unused-vars
			props: ContentPropsBase<TEXTTYPE>
	  ) => RETTYPE)
	| (() => RETTYPE);

export type TableInCellPropsBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
> = {
	// table in a cell automatically have width based on the cell's width
	table: Omit<TablePropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>, 'width'> & {
		width?: number;
	};
};

/** object for before or after content when it need to specify optional styles and dimensions */
export type BeforeOrAfterAsObjBase<NODE extends PrimitiveNode, TEXTTYPE extends TextType> = {
	content: SVGRenderElementBase<NODE> | ContentAsFuncBase<NODE, TEXTTYPE>;
	/** style of the text element */
	textStyle?: TextStyleBase<TEXTTYPE>;
	/**  x offset of the text  */
	cx?: number;
	/** y offset of the text */
	cy?: number;
};

/**
 * Represents the content that can be displayed before or after the main content in a cell.
 * It can be a NodeWrapper, a function that returns a NodeWrapper, or an object containing the content and optional styling.
 * */
export type BeforeOrAfterBase<NODE extends PrimitiveNode, TEXTTYPE extends TextType> =
	| BeforeOrAfterAsObjBase<NODE, TEXTTYPE>
	| SVGRenderElementBase<NODE>
	| ContentAsFuncBase<NODE, TEXTTYPE>;

export type ContentTypeInCell<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
> =
	| SVGRenderElementBase<NODE>
	| SVGTableElement<NODE>
	| ContentAsFuncBase<NODE, TEXTTYPE>
	| TableInCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>;
/**
 * Properties for defining a cell within a table, including content and optional styling.
 */
export type CellPropsBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
	CONTENT_TYPE extends ContentTypeInCell<NODE, TEXTTYPE, GTYPE, SVGTYPE> = ContentTypeInCell<
		NODE,
		TEXTTYPE,
		GTYPE,
		SVGTYPE
	>,
	BEFORE_OR_AFTER_TYPE extends BeforeOrAfterBase<NODE, TEXTTYPE> = BeforeOrAfterBase<NODE, TEXTTYPE>,
	CELL_STYLE_TYPE extends CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE> = CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE>,
> =
	| {
			/** Optional custom style for the cell, overriding default styles. */
			style?: Partial<CELL_STYLE_TYPE>;
			/** The content to be displayed within the cell, can be any React node. */
			content: CONTENT_TYPE;
			/** Optional content to be displayed before the main content, can be a React node or a function that returns a React node. */
			before?: BEFORE_OR_AFTER_TYPE;
			/** Optional content to be displayed after the main content, can be a React node or a function that returns a React node. */
			after?: BEFORE_OR_AFTER_TYPE;
			/** Optional. Specifies the number of columns a cell should span across. */
			colSpan?: number;
			/** Optional. Specifies the number of rows a cell should span across. */
			rowSpan?: number;
			/** clsss name to control individual cell.  */
			className?: string;
	  }
	| string;

export type CellPropsAsObjBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
> = Exclude<CellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>, string>;

/**
 * Extended cell properties including calculated dimensions and positioning.
 */
export type CalculatedCellPropsBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
> =
	| (CellPropsAsObjBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> & {
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

/**
 * Properties for defining a row within a table, including cells and optional styling.
 */
export type RowPropsBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
> =
	| {
			/** Optional custom style for the row, overriding default styles. */
			style?: Partial<RowStyle>;
			/** An array of CellPropsBase, defining the cells within the row. */
			cells: CellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>[];
	  }
	| CellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>[];

export type RowPropsAsObjBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
> = Exclude<RowPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>, CellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>[]>;

/**
 * Extended row properties including calculated dimensions and positioning.
 */
export type CalculatedRowPropsBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
	CELL_CALC_PROP extends CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> = CalculatedCellPropsBase<
		NODE,
		TEXTTYPE,
		GTYPE,
		SVGTYPE
	>,
> = Omit<RowPropsAsObjBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>, 'cells'> & {
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
export type TablePropsBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
	CELL_STYLE extends CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE> = CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE>,
	ROW_PROP extends RowPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> = RowPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>,
> = {
	/** Optional CSS class name for the table. */
	className?: string;
	/** Optional. Defines SVG definitions such as gradients or patterns that can be used within the table. */
	defs?: NODE | NODE[];
	/** Optional when standalone is true, ns is added automatically, width and height attributes will not be given. */
	standalone?: boolean;
	/** Optional. override more attributes on the root svg on top of default attributes for more flexiblity. */
	svgAttrs?: SVGAttributes<'svg'>;
	/** Total width of the SVG table in pixels. */
	width: number;
	/** Optional. Total height of the SVG table in pixels. if it is given, rows will be adjusted based on this size. */
	height?: number;
	/** Optional. Specifies the width of each column. These are in points and may not match pixels if colGaps is specified. this is not real sizes but ratios based on width after extracting left and right margins and colGaps */
	columnWidths?: number[];
	/** Optional. Specifies the height of each row. These are in points and may not match pixels if rowGaps is specified. this is not real sizes but ratios based on height after extracting top and bottom margins and rowGaps */
	rowHeights?: number[];
	/** Optional default cell style that applies to all cells unless overridden. */
	defaultCellStyle?: Partial<CELL_STYLE>;
	/** Optional default row style that applies to all rows unless overridden. */
	defaultRowStyle?: Partial<RowStyle>;
	/** An array of RowPropsBase, defining the rows within the table. */
	rows: ROW_PROP[];
	/** Optional custom style for the table, overriding default styles. */
	style?: Partial<TableStyle>;
};

export type CellElementPropsBase<
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
> = {
	cellOpt: CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>;
	defaultStyle: CellStyleBase<TEXTTYPE, GTYPE, SVGTYPE>;
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
