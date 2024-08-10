import SVGTable, { CellStyle, SVGTableCell, SVGTableRow, TableProps, TableStyle } from '@shjeon0730/svg-table-solid';

const defaultCellStyle: CellStyle = {
	borderWidths: [1, 0],
	borderColors: 'gray',
};

export const SimpleRowsTable = ({ width = 500 }: { width?: number }) => {
	return (
		<SVGTable width={width} defaultCellStyle={defaultCellStyle}>
			<SVGTableRow style={{ bgColor: 'lightgray' }}>
				<SVGTableCell>Header 1</SVGTableCell>
				<SVGTableCell colSpan={2}>Col Span</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell>Row 1, Cell 1</SVGTableCell>
				<SVGTableCell rowSpan={2}>{'Row Span\nmultiline\nsupport'}</SVGTableCell>
				<SVGTableCell>Row 1, Cell 3</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell>Header 1</SVGTableCell>
				<SVGTableCell colSpan={2}>Col Span</SVGTableCell>
			</SVGTableRow>
		</SVGTable>
	);
};

const tableProps: Omit<TableProps, 'width'> = {
	defaultCellStyle: {
		borderWidths: [1, 0],
		borderColors: 'blue',
	},
	style: {
		borderWidths: [0, 1],
		borderColors: 'blue',
	},
	rows: [
		{
			style: {
				bgColor: 'lightblue',
			},
			cells: [
				{
					content: 'Header 1',
				},
				{
					content: 'Col Span',
					colSpan: 2,
				},
			],
		},
		{
			cells: [
				{ content: 'Row 1, Cell 1' },
				{ content: 'Row Span\nmultiline\nsupport', rowSpan: 2 },
				{ content: 'Row 1, Cell 3' },
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};

export const SimpleRowsTableObj = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
