import SVGTable, { TableProps } from '@shjeon0730/svg-table';
const propsDefault: Omit<TableProps, 'width'> = {
	defaultCellStyle: {
		borderWidths: [0, 1, 1, 0], // since default border is black, should be hide before customize some borders.
	},
	rows: [
		{
			cells: [
				{
					content: 'Header 1',
					style: {
						borderColors: 'blue',
						borderWidths: [0, 0, 1, 0], // cell level style will override default style.
					},
				},
				{
					content: 'Header 2',
					colSpan: 2,
					style: {
						borderWidths: [0, 0, 3, 0], // cell level style will override default style.
						borderColors: 'orange',
						borderPatterns: [6, 5],
						borderShapes: 'round',
					},
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

const TableBorderStyles = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...propsDefault} width={width} />;
};

export default TableBorderStyles;
