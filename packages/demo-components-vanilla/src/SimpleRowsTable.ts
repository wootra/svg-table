import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';

const tableProps: Omit<TableProps, 'width'> = {
	defaultCellStyle: {
		borderWidths: [1, 0],
		borderColors: 'purple',
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
	return SVGTable({ ...tableProps, width });
};
