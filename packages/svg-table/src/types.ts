import type { HTMLAttributes, ReactNode, SVGAttributes } from 'react';

/**
 * Represents widths for various elements, allowing for uniform or individual side specification.
 */
export type Widths =
	| [number, number] /** top/bottom, left/right */
	| [number, number, number, number] /** top, right, bottom, left */
	| number; /** top/bottom/left/right */
/**
 * Defines colors for borders, allowing for single, dual, or quad color specifications.
 */
export type ColorsOnWidth =
	| [string, string] // [top/bottom, left/right]
	| [string, string, string, string] // [top, right, bottom, left]
	| string; // single value

/**
 * Specifies dash patterns for borders, supporting various configurations for different sides.
 */
export type PatternArrays =
	| [number[], number[]] // [top/bottom, left/right]
	| [number[], number[], number[], number[]] // [top, right, bottom, left]
	| number[] // single pattern
	| undefined; // no pattern

/**
 * Specifies the shape of the stroke caps for dashed borders.
 */
export type PatternShape = SVGAttributes<SVGPathElement>['strokeLinecap'];

/**
 * Defines stroke cap shapes for borders, with configurations for different sides.
 */
export type PatternShapes =
	| [PatternShape, PatternShape] // [top/bottom, left/right]
	| [PatternShape, PatternShape, PatternShape, PatternShape] // [top, right, bottom, left]
	| PatternShape; // single shape
/**
 * Combines all border style properties into a single type.
 */
export type BorderStyles = {
	/** Specifies the width of the border on different sides. */
	borderWidths: Widths;
	/** Specifies the color of the border on different sides. */
	borderColors: ColorsOnWidth;
	/** Specifies the dash pattern for the border on different sides. */
	borderPatterns: PatternArrays;
	/** Specifies the shape of the stroke caps for the border on different sides. */
	borderShapes: PatternShapes;
};

/**
 * Horizontal alignment options for text.
 */
export type TextHAlign = 'left' | 'center' | 'right';

/**
 * Vertical alignment options for text.
 */
export type TextVAlign = 'top' | 'center' | 'bottom';

/**
 * Style properties for SVG text elements.
 */
export type TextStyle = SVGAttributes<SVGTextElement>;

/** Style properties for SVG g element */
export type GroupStyle = SVGAttributes<SVGGElement>;

/**
 * Style properties for table cells, including background color, padding, and text styling.
 */
export type CellStyle = {
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
	textStyle?: TextStyle;
	/**
	 * Optional styling for rotate center of the cell. It will apply attribute on center of the text.
	 * for example, you can rotate the text or cell element based on the center of the cell.
	 */
	// eslint-disable-next-line no-unused-vars
	rotateCenterProps?: GroupStyle | ((props: GroupProps) => GroupStyle);

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
	svgStyle?: HTMLAttributes<SVGSVGElement>['style'];
} & Partial<BorderStyles>;

export type ContentProps = {
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
	textStyle: TextStyle;
};

export type GroupProps = {
	/**
	 * translated x position of the g element
	 */
	x: number;
	/**
	 * translated y position of the g element
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
};

// eslint-disable-next-line no-unused-vars
export type ContentAsFunc = (props: ContentProps) => ReactNode;

export type TableInCellProps = {
	// table in a cell automatically have width based on the cell's width
	table: Omit<TableProps, 'width'> & { width?: number };
};

/** object for before or after content when it need to specify optional styles and dimensions */
export type BeforeOrAfterAsObj = {
	content: ReactNode | ContentAsFunc;
	/** style of the text element */
	textStyle?: TextStyle;
	/**  x offset of the text  */
	cx?: number;
	/** y offset of the text */
	cy?: number;
};

/**
 * Represents the content that can be displayed before or after the main content in a cell.
 * It can be a ReactNode, a function that returns a ReactNode, or an object containing the content and optional styling.
 * */
export type BeforeOrAfter = BeforeOrAfterAsObj | ReactNode | ContentAsFunc;

/**
 * Properties for defining a cell within a table, including content and optional styling.
 */
export type CellProps =
	| {
			/** Optional custom style for the cell, overriding default styles. */
			style?: Partial<CellStyle>;
			/** The content to be displayed within the cell, can be any React node. */
			content: ReactNode | ContentAsFunc | TableInCellProps;
			/** Optional content to be displayed before the main content, can be a React node or a function that returns a React node. */
			before?: BeforeOrAfter;
			/** Optional content to be displayed after the main content, can be a React node or a function that returns a React node. */
			after?: BeforeOrAfter;
			/** Optional. Specifies the number of columns a cell should span across. */
			colSpan?: number;
			/** Optional. Specifies the number of rows a cell should span across. */
			rowSpan?: number;
			/** clsss name to control individual cell.  */
			className?: string;
	  }
	| string;

export type CellPropsAsObj = Exclude<CellProps, string>;

/**
 * Extended cell properties including calculated dimensions and positioning.
 */
export type CalculatedCellProps =
	| (CellPropsAsObj & {
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
 * Style properties for table rows, including height and optional background color.
 */
export type RowStyle = {
	/** The height of the row. */
	height: number;
	/** Optional background color of the row. */
	bgColor?: string;
};

/**
 * Properties for defining a row within a table, including cells and optional styling.
 */
export type RowProps =
	| {
			/** Optional custom style for the row, overriding default styles. */
			style?: Partial<RowStyle>;
			/** An array of CellProps, defining the cells within the row. */
			cells: CellProps[];
	  }
	| CellProps[];

export type RowPropsAsObj = Exclude<RowProps, CellProps[]>;

/**
 * Extended row properties including calculated dimensions and positioning.
 */
export type CalculatedRowProps = Omit<RowPropsAsObj, 'cells'> & {
	/** The x-coordinate of the row's position. */
	x: number;
	/** The y-coordinate of the row's position. */
	y: number;
	/** The calculated width of the row. */
	width: number;
	/** The calculated height of the row. */
	height: number;
	/** An array of CalculatedCellProps, including position and size for each cell. */
	cells: CalculatedCellProps[];
};

/**
 * Style properties for the table, including margins, gaps, and optional background color.
 */
export type TableStyle = {
	/** Margins around the table. Can be specified similarly to paddings in CellStyle. */
	margins: Widths;
	/** Optional background color of the table. */
	bgColor?: string;
	/** The gap between columns. */
	colGaps: number;
	/** The gap between rows. */
	rowGaps: number;
	/** Optional CSS styles for the SVG element representing the table. */
	svgStyle: HTMLAttributes<SVGSVGElement>['style'];
} & Partial<BorderStyles>; /** Optionally includes border styles defined in BorderStyles. */
/**
 * Properties for defining a table, including dimensions, rows, and optional styling.
 */
export type TableProps = {
	/** Optional CSS class name for the table. */
	className?: string;
	/** Optional. Defines SVG definitions such as gradients or patterns that can be used within the table. */
	defs?: ReactNode;
	/** Optional when standalone is true, ns is added automatically, width and height attributes will not be given. */
	standalone?: boolean;
	/** Optional. override more attributes on the root svg on top of default attributes for more flexiblity. */
	svgAttrs?: SVGAttributes<SVGSVGElement>;
	/** Total width of the SVG table in pixels. */
	width: number;
	/** Optional. Total height of the SVG table in pixels. if it is given, rows will be adjusted based on this size. */
	height?: number;
	/** Optional. Specifies the width of each column. These are in points and may not match pixels if colGaps is specified. this is not real sizes but ratios based on width after extracting left and right margins and colGaps */
	columnWidths?: number[];
	/** Optional. Specifies the height of each row. These are in points and may not match pixels if rowGaps is specified. this is not real sizes but ratios based on height after extracting top and bottom margins and rowGaps */
	rowHeights?: number[];
	/** Optional default cell style that applies to all cells unless overridden. */
	defaultCellStyle?: Partial<CellStyle>;
	/** Optional default row style that applies to all rows unless overridden. */
	defaultRowStyle?: Partial<RowStyle>;
	/** An array of RowProps, defining the rows within the table. */
	rows: RowProps[];
	/** Optional custom style for the table, overriding default styles. */
	style?: Partial<TableStyle>;
};

export type WidthPos = 'left' | 'right' | 'top' | 'bottom';
