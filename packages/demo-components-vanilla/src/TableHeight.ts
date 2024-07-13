import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';

const tableProps: TableProps = {
	width: 500,
	height: 400,
	style: {
		borderWidths: 1,
		borderColors: 'red',
		margins: 20,
		colGaps: 10,
		rowGaps: 10,
	},
	defaultCellStyle: {
		borderWidths: 1,
		borderColors: 'red',
	},
	rows: [
		['header1', 'header2', 'header3'],
		['cell1', 'cell2', 'cell3'],
		['cell1', 'cell2', 'cell3'],
	],
};

export const TableHeight = () => {
	return SVGTable({ ...tableProps });
};
