import type {
	CellProps,
	CellPropsAsObj,
	CellStyle,
	RowPropsAsObj,
	RowStyle,
	TableProps,
	TableStyle,
} from './types';
import { ACell } from './ACell';
import { calculateRows } from './calculateRows';
import { getWid, simpleValue } from './utils';
import FilledArea from './FilledArea';
import { INTERNAL_CSS_VARS } from '.';

const getTotalCells = (cells: CellProps[]) => {
	return cells.reduce((total, cell) => {
		const cellAsObj = cell as CellPropsAsObj;
		if (cellAsObj.colSpan) {
			return total + cellAsObj.colSpan;
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
		borderColors: style?.borderWidths
			? `var(${INTERNAL_CSS_VARS.borderLineColor}, #000)`
			: undefined,
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
		borderColors: `var(${INTERNAL_CSS_VARS.borderLineColor}, #000)`,
		borderPatterns: undefined,
		borderShapes: undefined,
		paddings: [1, 1, 1, 1],
		textColor: `var(${INTERNAL_CSS_VARS.textColor}, #000)`,
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
	return columnWidths.map(width => Math.max(simpleValue(width * ratio), 1));
};

const adjustRowHeights = (
	rowHeights: number[],
	tableHeightWithoutGaps: number
) => {
	const totalHeight = rowHeights.reduce((total, width) => total + width, 0);
	const ratio = tableHeightWithoutGaps / totalHeight;
	if (ratio > 0.99 && ratio <= 1.01) return rowHeights;
	return rowHeights.map(width => Math.max(simpleValue(width * ratio), 1));
};

export const SVGTable: React.FC<TableProps> = tableProps => {
	const {
		rows,
		width = 500,
		height: heightFromProps,
		standalone = false,
		defaultCellStyle,
		defaultRowStyle,
		columnWidths,
		rowHeights: rowHeightFromProps,
		style,
		className,
		defs,
		svgAttrs,
	} = tableProps;
	// Calculate the total width and height of the table

	const defaultStyleForCell: CellStyle =
		parseDefaultCellStyle(defaultCellStyle);

	const maxColumns = Math.max(
		rows.reduce(
			(max, row) =>
				Array.isArray(row)
					? Math.max(max, row.length)
					: Math.max(max, getTotalCells(row.cells)),
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

	let height =
		heightFromProps ??
		rows.reduce((h, row) => {
			if (Array.isArray(row)) {
				return h + defaultStyleForRow.height;
			}
			return h + (row.style?.height ?? defaultStyleForRow.height);
		}, 0) + allRowGaps;

	height = simpleValue(height);

	const cellWidths = columnWidths
		? adjustColumnWidths(columnWidths, width - allColGaps)
		: Array(maxColumns).fill(
				simpleValue((width - allColGaps) / maxColumns)
			);

	let rowHeights =
		rowHeightFromProps ??
		rows.map(
			row =>
				(row as RowPropsAsObj).style?.height ??
				defaultStyleForRow.height
		);

	if (heightFromProps) {
		rowHeights = adjustRowHeights(rowHeights, heightFromProps - allRowGaps);
		for (let i = 0; i < rows.length; i++) {
			const rowHeightFromRowStyle = (rows[i] as RowPropsAsObj)?.style
				?.height;
			// below logic is to make more specific style wins.
			if (rowHeightFromRowStyle && typeof rowHeights[i] === 'number') {
				rowHeights[i] = rowHeightFromRowStyle;
			}
		}
	}

	const calculatedRows = calculateRows(
		cellWidths,
		rowHeights,
		rows,
		tableStyle,
		tableProps
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
			<g
				key={rowIndex}
				className={
					className ? `${className}-row-${rowIndex}` : undefined
				}
			>
				{rowContent}
			</g>
		);
	});
	const propsForSvg = standalone
		? {
				xmlns: 'http://www.w3.org/2000/svg',
				xmlnsXlink: 'http://www.w3.org/1999/xlink',
			}
		: {
				width,
				height,
			};
	return (
		<svg
			{...propsForSvg}
			style={tableStyle.svgStyle}
			viewBox={`0 0 ${width} ${height}`}
			className={className ? `svg-table ${className}` : undefined}
			{...svgAttrs}
		>
			{defs && <defs>{defs}</defs>}
			<FilledArea
				className={
					className
						? `${className}-filled-area-behind-table`
						: undefined
				}
				width={width}
				height={height}
				bgColor={tableStyle.bgColor}
				borderWidths={tableStyle.borderWidths}
				borderColors={tableStyle.borderColors}
				borderPatterns={tableStyle.borderPatterns}
				borderShapes={tableStyle.borderShapes}
			/>
			<g
				className={className ? `${className}-content-area` : undefined}
				transform={`translate(${getWid(tableStyle.margins, 'left')} ${getWid(tableStyle.margins, 'top')})`}
			>
				{rowsContent}
			</g>
		</svg>
	);
};
