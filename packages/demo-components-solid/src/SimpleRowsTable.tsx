import SVGTable, { CellStyle, SVGTableCell, SVGTableRow, TableStyle } from '@shjeon0730/svg-table-solid';

const defaultCellStyle: CellStyle = {
	borderWidths: [1, 0],
	borderColors: 'gray',
};
const tableStyle: Partial<TableStyle> = {
	borderWidths: [0, 1],
	borderColors: 'gray',
};

export const SimpleRowsTable = ({ width = 500 }: { width?: number }) => {
	return (
		<SVGTable width={width} defaultCellStyle={defaultCellStyle} style={tableStyle}>
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
