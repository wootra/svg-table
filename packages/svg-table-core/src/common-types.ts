import type { HTMLAttributes, ReactSVG, SVGAttributes } from 'react';
export type PrimitiveNode = object;
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
	/** Specifies the radius for rounded corners on different sides. */
	rx?: number;
	/** Specifies the radius for rounded corners on different sides. */
	ry?: number;
};

/**
 * Horizontal alignment options for text.
 */
export type TextHAlign = 'left' | 'center' | 'right';

/**
 * Vertical alignment options for text.
 */
export type TextVAlign = 'top' | 'center' | 'bottom';

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

/**
 * Style properties for table rows, including height and optional background color.
 */
export type RowStyle = {
	/** The height of the row. */
	height: number;
	/** Optional background color of the row. */
	bgColor?: string;
} & Partial<BorderStyles>;

export type WidthPos = 'left' | 'right' | 'top' | 'bottom';

/**
 * Style properties for the table, including margins, gaps, and optional background color.
 */
export type TableStyle = {
	/** Margins around the table. Can be specified similarly to paddings in CellStyleBase. */
	margins: Widths;
	/** Optional background color of the table. */
	bgColor?: string;
	/** The gap between columns. */
	colGaps: number;
	/** The gap between rows. */
	rowGaps: number;
	/** Optional CSS styles for the SVG element representing the table. */
	svgStyle: HTMLAttributes<'svg'>['style'];
} & Partial<BorderStyles>; /** Optionally includes border styles defined in BorderStyles. */

/**
 * style for background or border of table or cell or row
 */
export type RectStyleOption = Partial<{
	bgColor: string;
	borderWidths: Widths;
	borderColors: ColorsOnWidth;
	borderPatterns: PatternArrays;
	rx: number;
	ry: number;
}>;

export type RectStyle = {
	fill?: string;
	stroke?: string;
	strokeWidth?: number;
	strokeDasharray?: string;
	rx?: number;
	ry?: number;
};

export type SVGElementName = keyof ReactSVG;

export type TextType = 'text' | SVGTextElement;
export type GType = 'g' | SVGGElement;
export type SVGType = 'svg' | SVGSVGElement;

export type TextAnchor = 'middle' | 'start' | 'end';
export type DominantBaseline = 'middle' | 'hanging' | 'auto';
