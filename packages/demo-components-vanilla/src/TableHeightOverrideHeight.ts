import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';

const tableProps: TableProps = {
	width: 500,
	height: 300,
	rowHeights: [1, 1, 1],
	defaultCellStyle: {
		borderWidths: 1,
		borderColors: 'red',
	},
	rows: [
		{
			style: {
				height: 200,
			},
			cells: ['header1', 'header2', 'header3'],
		},
		['cell1', 'cell2', 'cell3'],
		['cell1', 'cell2', 'cell3'],
	],
};

export const TableHeightOverrideHeight = () => {
	return SVGTable({ ...tableProps });
};
