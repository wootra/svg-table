import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';

const tableProps: Omit<TableProps, 'width'> = {
	defaultCellStyle: {
		borderWidths: 0, // remove default cell border
	},
	style: {
		borderWidths: 1, // eanble table border
	},
	rows: [
		['Header 1', 'Header 2', 'Header3'],
		['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
		['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
	],
};

export const OnlyTableBolder = ({ width = 500 }: { width?: number }) => {
	return SVGTable({ ...tableProps, width });
};
