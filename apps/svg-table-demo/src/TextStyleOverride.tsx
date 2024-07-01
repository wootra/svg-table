import SVGTable, { TableProps } from '@shjeon0730/svg-table';

const textLeftTop = {
	textAnchor: 'start',
	dominantBaseline: 'hanging',
	x: 0,
	y: 0,
};

const tableProps: Omit<TableProps, 'width'> = {
	columnWidths: [100, 300, 200],
	defaultCellStyle: {
		textColor: '#ff0000',
	},
	rows: [
		{
			cells: [
				{
					content: 'Header 1',
					style: {
						bgColor: '#f0f0f0',
						paddings: [10, 4, 0, 0],
						textColor: 'blue',
						textStyle: {
							textAnchor: 'middle',
							dominantBaseline: 'auto',
							fontSize: 10,
						},
					},
				},
				{
					content: 'Header 2',
					colSpan: 2,
					style: {
						textStyle: {
							textAnchor: 'middle',
							dominantBaseline: 'middle',
						},
					},
				},
			],
		},
		{
			cells: [
				{ content: 'test' },
				{
					content: 'Row 1, Cell 2',
					rowSpan: 2,
					style: {
						textStyle: {
							fontSize: 30,
							fontFamily: 'sans-serif',
						},
					},
				},
				{
					content: 'Row 1, Cell 3',
					style: {
						textStyle: textLeftTop,
					},
				},
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};
const TextStyleOverride = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};

export default TextStyleOverride;
