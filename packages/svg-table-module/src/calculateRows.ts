import type {
	CalculatedCellPropsBase,
	CalculatedRowPropsBase,
	RowPropsBase,
	TablePropsBase,
} from './private-types';
import type {
	GType,
	PrimitiveNode,
	SVGType,
	TableStyle,
	TextType,
} from './common-types';
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

const insertIgnoredCell = <
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
>(
	row: CalculatedRowPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>,
	colIndex: number,
	cell: CalculatedCellPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE> & {
		_ignored: false;
	}
) => {
	row.cells = [
		...(row.cells.slice(0, colIndex) ?? []),
		...Array(cell.colSpan ?? 1)
			.fill(null)
			.map(
				() =>
					({
						_ignored: true,
						colSpan: 1,
					}) as CalculatedCellPropsBase<
						NODE,
						TEXTTYPE,
						GTYPE,
						SVGTYPE
					>
			),
		...(row.cells.slice(colIndex) ?? []),
	];
};

export const calculateRows = <
	NODE extends PrimitiveNode,
	TEXTTYPE extends TextType,
	GTYPE extends GType,
	SVGTYPE extends SVGType,
>(
	cellWidths: number[],
	rowHeights: number[],
	rows: RowPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>[],
	style: TableStyle | undefined,
	tableProps: TablePropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>
) => {
	let currentY = 0;
	const embededTableHeightAdjust = !!tableProps.height;
	const standaloneTable = !!tableProps.standalone;

	const calcRows: CalculatedRowPropsBase<NODE, TEXTTYPE, GTYPE, SVGTYPE>[] =
		rows.map(aRow => {
			const row = Array.isArray(aRow) ? { cells: aRow } : aRow;
			return {
				...row,
				x: -1,
				y: -1,
				height: -1,
				width: -1,
				cells: [
					...row.cells.map(aCell => {
						const cell =
							typeof aCell === 'string'
								? { content: aCell }
								: aCell;
						return {
							...cell,
							x: -1,
							y: -1,
							height: -1,
							width: -1,
							_ignored: false,
							_heightAdjust: embededTableHeightAdjust,
							_standalone: standaloneTable,
						} as CalculatedCellPropsBase<
							NODE,
							TEXTTYPE,
							GTYPE,
							SVGTYPE
						>;
					}),
				],
			};
		});

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

			const isLastCellButNotLastColumn =
				row.cells[row.cells.length - 1] === cell &&
				idx !== cellWidths.length - 1;
			const colSpan = isLastCellButNotLastColumn
				? cellWidths.length - idx
				: 1;
			cell.colSpan = colSpan;
			const cellWidth = getCellWidth(
				cellWidths,
				idx,
				cell.colSpan,
				style?.colGaps ?? 0
			);

			if (cell.rowSpan) {
				// find same index of the below rows and add an empty cell with _ignored: true attribute.
				for (let i = 1; i < cell.rowSpan; i++) {
					if (calcRows[ri + i]) {
						insertIgnoredCell<NODE, TEXTTYPE, GTYPE, SVGTYPE>(
							calcRows[ri + i] as CalculatedRowPropsBase<
								NODE,
								TEXTTYPE,
								GTYPE,
								SVGTYPE
							>,
							idx,
							cell
						);
					} else {
						console.error(
							'row is not found at index: ' + (idx + i),
							'your cell is:',
							cell,
							'your rows are',
							calcRows,
							'idx is',
							idx
						);
					}
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
