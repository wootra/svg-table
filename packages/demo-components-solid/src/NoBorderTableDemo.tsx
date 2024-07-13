import SVGTable, { TableProps } from '@shjeon0730/svg-table-solid';

const tableProps: Omit<TableProps, 'width'> = {
	defaultCellStyle: {
		borderWidths: 0,
	},
	rows: [
		['header1', { content: 'header2', colSpan: 2 }],
		['Row1, Cell1', { content: 'Row 1, Cell 2', rowSpan: 2 }, 'Row 1, Cell 3'],
		['Row 2, Cell 1', 'Row 2, Cell 3'],
	],
};
export const NoBorderTableDemo = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
