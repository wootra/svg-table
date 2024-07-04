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
import { memo } from 'react';

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
		allowOverflow: false,
		borderWidths: 1,
		borderColors: '#000',
		borderPatterns: undefined,
		borderShapes: undefined,
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

const adjustRowHeights = (
	rowHeights: number[],
	tableHeightWithoutGaps: number
) => {
	const totalHeight = rowHeights.reduce((total, width) => total + width, 0);
	const ratio = tableHeightWithoutGaps / totalHeight;
	if (ratio > 0.99 && ratio <= 1.01) return rowHeights;
	return rowHeights.map(width => width * ratio);
};

export const SVGTable: React.FC<TableProps> = memo(
	({
		rows,
		width = 500,
		height: heightFromProps,
		defaultCellStyle,
		defaultRowStyle,
		columnWidths,
		rowHeights: rowHeightFromProps,
		style,
		className,
		defs,
	}) => {
		// Calculate the total width and height of the table

		const defaultStyleForCell: CellStyle =
			parseDefaultCellStyle(defaultCellStyle);

		const maxColumns = Math.max(
			rows.reduce(
				(max, row) => Math.max(max, getTotalCells(row.cells)),
				0
			),
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

		const defaultStyleForRow: RowStyle = {
			height: 30,
			...defaultRowStyle,
		};

		const height =
			heightFromProps ??
			rows.reduce(
				(h, row) =>
					h + (row.style?.height ?? defaultStyleForRow.height),
				0
			) + allRowGaps;

		const cellWidths = columnWidths
			? adjustColumnWidths(columnWidths, width - allColGaps)
			: Array(maxColumns).fill((width - allColGaps) / maxColumns);

		let rowHeights =
			rowHeightFromProps ??
			rows.map(row => row.style?.height ?? defaultStyleForRow.height);

		if (heightFromProps) {
			console.log(
				'rowHeight before adjust',
				rowHeights.toString(),
				'height is:',
				heightFromProps,
				'heightFromProps - allRowGaps is ',
				heightFromProps - allRowGaps
			);
			rowHeights = adjustRowHeights(
				rowHeights,
				heightFromProps - allRowGaps
			);
			console.log('rowHeight after adjust', rowHeights.toString());
			for (let i = 0; i < rows.length; i++) {
				const rowHeightFromRowStyle = rows[i]?.style?.height;
				// below logic is to make more specific style wins.
				if (
					rowHeightFromRowStyle &&
					typeof rowHeights[i] === 'number'
				) {
					rowHeights[i] = rowHeightFromRowStyle;
				}
			}
			console.log('rowHeight after override', rowHeights.toString());
		}

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

			return (
				<g key={rowIndex} className={`row-${rowIndex}`}>
					{rowContent}
				</g>
			);
		});

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
					className='content-area'
					transform={`translate(${getWid(tableStyle.margins, 'left')} ${getWid(tableStyle.margins, 'top')})`}
				>
					{rowsContent}
				</g>
			</svg>
		);
	}
);
