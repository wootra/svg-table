import SVGTable, { TableProps } from '@shjeon0730/svg-table-solid';

const tableProps: Omit<TableProps, 'width'> = {
	style: {
		borderWidths: 1,
		margins: 10,
	},
	rows: [
		['Header 1', 'Header 2', 'Header 3'],
		['Cell 1', 'Cell 2', 'Cell 3'],
		['Cell 1', 'Cell 2', 'Cell 3'],
	],
};
export const TableBolderWithMargin = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
