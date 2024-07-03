import SVGTable, { TableProps } from '@shjeon0730/svg-table';

const tableProps: Omit<TableProps, 'width'> = {
	style: {
		colGaps: 4,
		rowGaps: 10,
	},
	rows: [
		{
			cells: [
				{
					content: 'Header 1',
				},
				{
					content: 'Header 2',
				},
			],
		},
		{
			cells: [
				{ content: 'test' },
				{ content: 'Row 1, Cell 2', rowSpan: 2 },
				{ content: 'Row 1, Cell 3' },
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};
export const Paddings = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
