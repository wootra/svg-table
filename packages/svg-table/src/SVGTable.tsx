import type {
	CellProps,
	CellStyle,
	RowStyle,
	TableProps,
	TableStyle,
} from './types';
import { ACell } from './ACell';
import { calculateRows } from './calculateRows';
import { convertToColorArrays, convertToWidthArrays } from './utils';

const getTotalCells = (cells: CellProps[]) => {
	return cells.reduce((total, cell) => {
		if (cell.colSpan) {
			return total + cell.colSpan;
		}
		return total + 1;
	}, 0);
};

const parsedTableStyle = (style?: Partial<TableStyle>) => {
	return {
		rowGaps: 0,
		colGaps: 0,
		bgColor: 'transparent',
		borderWidths: 1,
		borderPatterns: undefined,
		...style,
		borderColors: convertToColorArrays(style?.borderColors ?? '#000'),
		margins: convertToWidthArrays(style?.margins ?? 0, 0),
	};
};

const parseDefaultCellStyle = (
	defaultCellStyle?: Partial<CellStyle>
): CellStyle => {
	return {
		bgColor: 'transparent',
		borderColors: '#000',
		borderWidths: 1,
		borderPatterns: [4],
		paddings: [1, 1, 1, 1],
		textColor: '#000',
		...defaultCellStyle,
	};
};
export const SVGTable: React.FC<TableProps> = ({
	rows,
	width = 500,
	defaultCellStyle,
	defaultRowStyle,
	columnWidths,
	style,
}) => {
	// Calculate the total width and height of the table

	const defaultStyleForCell: CellStyle =
		parseDefaultCellStyle(defaultCellStyle);

	const maxColumns = Math.max(
		rows.reduce((max, row) => Math.max(max, getTotalCells(row.cells)), 0),
		1
	);

	const cellWidths =
		columnWidths ?? Array(maxColumns).fill(width / maxColumns);

	const defaultStyleForRow: RowStyle = {
		bgColor: 'transparent',
		height: 30,
		...defaultRowStyle,
	};

	const height = rows.reduce(
		(h, row) => h + (row.style?.height ?? defaultStyleForRow.height),
		0
	);

	const rowHeights = rows.map(
		row => row.style?.height ?? defaultStyleForRow.height
	);

	const tableStyle: TableStyle = parsedTableStyle(style);

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
			// if (cell._ignored) {
			// 	continue;
			// }

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

	const h = height + (rows.length - 1) * (style?.rowGaps ?? 0);
	const w = width + (maxColumns - 1) * (style?.colGaps ?? 0);
	return (
		<div style={{ outline: '1px solid green', width, height }}>
			<svg
				width={width}
				height={height}
				viewBox={`0 0 ${w} ${h}`}
				style={{ overflow: 'visible' }}
			>
				{rowsContent}
			</svg>
		</div>
	);
};
