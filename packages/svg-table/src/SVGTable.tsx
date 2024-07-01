import type {
	CellProps,
	CellStyle,
	RowStyle,
	TableProps,
	TableStyle,
} from './types';
import { ACell } from './ACell';
import { calculateRows } from './calculateRows';
import { getWid } from './utils';
import FilledArea from './FilledArea';

const getTotalCells = (cells: CellProps[]) => {
	return cells.reduce((total, cell) => {
		if (cell.colSpan) {
			return total + cell.colSpan;
		}
		return total + 1;
	}, 0);
};

const parsedTableStyle = (style?: Partial<TableStyle>): TableStyle => {
	return {
		rowGaps: 0,
		colGaps: 0,
		bgColor: 'transparent',
		borderWidths: undefined,
		borderPatterns: undefined,
		borderShapes: undefined,
		borderColors: style?.borderWidths ? '#000' : undefined,
		svgStyle: { overflow: 'visible' },
		...style,
		margins: style?.margins ?? 0,
	};
};

const parseDefaultCellStyle = (
	defaultCellStyle?: Partial<CellStyle>
): CellStyle => {
	return {
		bgColor: 'transparent',
		borderWidths: 1,
		borderColors: '#000',
		borderPatterns: undefined,
		borderShapes: 'butt',
		paddings: [1, 1, 1, 1],
		textColor: '#000',
		...defaultCellStyle,
	};
};

const adjustColumnWidths = (
	columnWidths: number[],
	tableWidthWithoutGaps: number
) => {
	const totalWidth = columnWidths.reduce((total, width) => total + width, 0);
	const ratio = tableWidthWithoutGaps / totalWidth;
	if (ratio > 0.99 && ratio <= 1.01) return columnWidths;
	return columnWidths.map(width => width * ratio);
};

export const SVGTable: React.FC<TableProps> = ({
	rows,
	width = 500,
	defaultCellStyle,
	defaultRowStyle,
	columnWidths,
	style,
	className,
	defs,
}) => {
	// Calculate the total width and height of the table

	const defaultStyleForCell: CellStyle =
		parseDefaultCellStyle(defaultCellStyle);

	const maxColumns = Math.max(
		rows.reduce((max, row) => Math.max(max, getTotalCells(row.cells)), 0),
		1
	);
	const tableStyle: TableStyle = parsedTableStyle(style);

	const allColGaps =
		(maxColumns - 1) * tableStyle.colGaps +
		getWid(tableStyle.margins, 'left') +
		getWid(tableStyle.margins, 'right');

	const allRowGaps =
		(rows.length - 1) * tableStyle.rowGaps +
		getWid(tableStyle.margins, 'top') +
		getWid(tableStyle.margins, 'bottom');

	const cellWidths = columnWidths
		? adjustColumnWidths(columnWidths, width - allColGaps)
		: Array(maxColumns).fill((width - allColGaps) / maxColumns);

	const defaultStyleForRow: RowStyle = {
		bgColor: 'transparent',
		height: 30,
		...defaultRowStyle,
	};

	const rowHeights = rows.map(
		row => row.style?.height ?? defaultStyleForRow.height
	);

	const calculatedRows = calculateRows(
		cellWidths,
		rowHeights,
		rows,
		tableStyle
	);

	const rowsContent = calculatedRows.map((row, rowIndex) => {
		let idx = 0;
		const rowContent = [] as JSX.Element[];

		for (const cell of row.cells) {
			rowContent.push(
				<ACell
					key={idx}
					cellOpt={cell}
					defaultStyle={defaultStyleForCell}
				/>
			);
			idx += 1;
		}

		return <g key={rowIndex}>{rowContent}</g>;
	});

	const height =
		rows.reduce(
			(h, row) => h + (row.style?.height ?? defaultStyleForRow.height),
			0
		) + allRowGaps;

	return (
		<svg
			width={width}
			height={height}
			style={tableStyle.svgStyle}
			viewBox={`0 0 ${width} ${height}`}
			className={`svg-table ${className ?? ''}`}
		>
			{defs && <defs>{defs}</defs>}
			<FilledArea
				className='filled-area-behind-table'
				width={width}
				height={height}
				bgColor={tableStyle.bgColor}
				borderWidths={tableStyle.borderWidths}
				borderColors={tableStyle.borderColors}
				borderPatterns={tableStyle.borderPatterns}
				borderShapes={tableStyle.borderShapes}
			/>
			<g
				transform={`translate(${getWid(tableStyle.margins, 'left')} ${getWid(tableStyle.margins, 'top')})`}
			>
				{rowsContent}
			</g>
		</svg>
	);
};
