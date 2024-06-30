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

export type CellStyle = {
	bgColor: string;
	paddings: Widths;
	borderWidths: Widths;
	borderColors: ColorsOnWidth;
	borderPatterns: PatternArrays;
	textColor: string;
};

export type CellProps = {
	style?: Partial<CellStyle>;
	content: string | JSX.Element;
	colSpan?: number;
	rowSpan?: number;
};

export type ParsedCellStyle = Omit<
	CellStyle,
	'paddings' | 'borderWidths' | 'borderColors' | 'borderPatterns'
> & {
	paddings: [number, number, number, number] | number;
	borderWidths: [number, number, number, number] | number;
	borderColors: [string, string, string, string] | string;
	borderPatterns:
		| [number[], number[], number[], number[]]
		| number[]
		| undefined;
};

export type CalculatedCellProps =
	| (Omit<CellProps, 'style'> & { style: ParsedCellStyle } & {
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
	style?: RowStyle;
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
	borderWidths: Widths;
	borderColors: ColorsOnWidth;
	borderPatterns: PatternArrays;
	margins: Widths;
	bgColor: string;
	colGaps: number;
	rowGaps: number;
};

export type ParsedTableStyle = Omit<
	TableStyle,
	'borderColors' | 'borderPatterns' | 'borderWidths'
> & {
	borderWidths: [number, number, number, number] | number;
	borderColors: [string, string, string, string] | string;
	borderPatterns: [number[], number[], number[], number[]] | number[];
};

export type TableProps = {
	width: number; // total size of the svg in px.
	columnWidths?: number[]; // width of each column in pt of the svg. it does not match with px if colGaps in style is given.
	defaultCellStyle?: Partial<CellStyle>;
	defaultRowStyle?: Partial<RowStyle>;
	rows: RowProps[];
	style?: Partial<TableStyle>;
};
