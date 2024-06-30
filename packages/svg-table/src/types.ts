import { ReactNode, SVGAttributes } from 'react';

export type Widths =
	| [number, number] // top/bottom, left/right
	| [number, number, number, number] // top, right, bottom, left
	| number; // top/bottom/left/right

export type ColorsOnWidth =
	| [string, string]
	| [string, string, string, string]
	| string;

export type PatternArrays =
	| [number[], number[]]
	| [number[], number[], number[], number[]]
	| number[]
	| undefined;

export type PatternShape = SVGAttributes<SVGPathElement>['strokeLinecap'];

export type PatternShapes =
	| [PatternShape, PatternShape]
	| [PatternShape, PatternShape, PatternShape, PatternShape]
	| PatternShape;

export type BorderStyles = {
	borderWidths: Widths;
	borderColors: ColorsOnWidth;
	borderPatterns: PatternArrays;
	borderShapes: PatternShapes;
};

export type TextHAlign = 'left' | 'center' | 'right';
export type TextVAlign = 'top' | 'center' | 'bottom';

export type TextStyle = SVGAttributes<SVGTextElement>;

export type CellStyle = {
	bgColor: string;
	paddings: Widths;
	textColor: string;
	textStyle?: TextStyle;
} & BorderStyles;

export type CellProps = {
	style?: Partial<CellStyle>;
	content: ReactNode;
	colSpan?: number;
	rowSpan?: number;
};

export type CalculatedCellProps =
	| (CellProps & {
			_ignored: false;
			x: number;
			y: number;
			width: number;
			height: number;
	  })
	| { _ignored: true };

export type RowStyle = {
	height: number;
	bgColor: string;
};

export type RowProps = {
	style?: Partial<RowStyle>;
	cells: CellProps[];
};

export type CalculatedRowProps = Omit<RowProps, 'cells'> & {
	x: number;
	y: number;
	width: number;
	height: number;
	cells: CalculatedCellProps[];
};

export type TableStyle = {
	margins: Widths;
	bgColor: string;
	colGaps: number;
	rowGaps: number;
} & BorderStyles;

export type TableProps = {
	className?: string;
	width: number; // total size of the svg in px.
	columnWidths?: number[]; // width of each column in pt of the svg. it does not match with px if colGaps in style is given.
	defaultCellStyle?: Partial<CellStyle>;
	defaultRowStyle?: Partial<RowStyle>;
	rows: RowProps[];
	style?: Partial<TableStyle>;
};
