import type {
	CalculatedCellProps,
	CalculatedRowProps,
	RowProps,
	TableStyle,
} from './types';
import { simpleValue } from './utils';

let debugObj = {};

const getCellWidth = (
	cellWidths: number[],
	startCol: number,
	colSpan: number,
	colGap: number
) => {
	if (cellWidths.length < startCol + colSpan - 1) {
		console.error(
			'Not enough column widths provided. check colSpan of the cell data. startCol: ' +
				startCol,
			'data is:',
			JSON.parse(JSON.stringify(debugObj))
		);
	}
	return simpleValue(
		cellWidths
			.slice(startCol, startCol + colSpan)
			.reduce((total, width) => total + width, 0) +
			colGap * (colSpan - 1)
	);
};

const getCellHeight = (
	rowHeights: number[],
	startRow: number,
	rowSpan: number,
	rowGap: number
) => {
	if (rowHeights.length < startRow + rowSpan - 1) {
		console.error(
			'Not enough row heights provided. check rowSpan of the cell data. startRow: ' +
				startRow,
			'data is:',
			JSON.parse(JSON.stringify(debugObj))
		);
	}
	return (
		rowHeights
			.slice(startRow, startRow + rowSpan)
			.reduce((total, height) => total + height, 0) +
		rowGap * (rowSpan - 1)
	);
};

const insertIgnoredCell = (row: CalculatedRowProps, colIndex: number) => {
	row.cells = [
		...row.cells.slice(0, colIndex),
		{
			_ignored: true,
		},
		...row.cells.slice(colIndex),
	];
};

export const calculateRows = (
	cellWidths: number[],
	rowHeights: number[],
	rows: RowProps[],
	style?: TableStyle
) => {
	let currentY = 0;
	const calcRows: CalculatedRowProps[] = rows.map(row => ({
		...row,
		x: -1,
		y: -1,
		height: -1,
		width: -1,
		cells: [
			...row.cells.map(
				cell =>
					({
						...cell,
						x: -1,
						y: -1,
						height: -1,
						width: -1,
						_ignored: false,
					}) as CalculatedCellProps
			),
		],
	}));

	for (let ri = 0; ri < calcRows.length; ri++) {
		const row = calcRows[ri];
		if (!row) continue;
		let currentX = 0;
		let idx = 0;

		for (const cell of row.cells) {
			debugObj = {
				row: row,
				cell: cell,
			};

			if (cell._ignored) {
				const widToSkip = getCellWidth(
					cellWidths,
					idx,
					1,
					style?.colGaps ?? 0
				);
				idx += 1;
				currentX += widToSkip + (style?.colGaps ?? 0);
				continue;
			}

			const cellWidth = getCellWidth(
				cellWidths,
				idx,
				cell.colSpan ?? 1,
				style?.colGaps ?? 0
			);

			if (cell.rowSpan) {
				// find same index of the below rows and add an empty cell with _ignored: true attribute.
				for (let i = 1; i < cell.rowSpan; i++) {
					insertIgnoredCell(
						calcRows[idx + i] as CalculatedRowProps,
						idx
					);
				}
			}
			cell.width = cellWidth;
			cell.height = getCellHeight(
				rowHeights,
				ri,
				cell.rowSpan ?? 1,
				style?.rowGaps ?? 0
			);
			cell.x = simpleValue(currentX);
			cell.y = simpleValue(currentY);

			currentX += cellWidth + (style?.colGaps ?? 0);
			idx += 1;
		}
		currentY += (rowHeights[ri] ?? 0) + (style?.rowGaps ?? 0);
	}

	return calcRows;
};
