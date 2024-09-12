import SVGTable, { TableProps } from '@shjeon0730/svg-table-react';

const tableProps: Omit<TableProps, 'width'> = {
	style: {
		bgColor: 'none',
		borderColors: 'gray',
		borderWidths: 1,
		rx: 20,
		ry: 30,
	},
	defaultCellStyle: {
		borderWidths: 2,
		borderColors: 'gray',
	},
	rows: [
		{
			style: {
				bgColor: '#beddbe',
				borderWidths: [0, 0, 1, 0],
				borderColors: 'gray',
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

export const BasicDemoWithRadius = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
