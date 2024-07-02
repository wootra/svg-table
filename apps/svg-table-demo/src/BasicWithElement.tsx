import SVGTable, { TableProps } from '@shjeon0730/svg-table';

const Rect = () => {
	return (
		<g>
			<rect x={10} y={5} width={100} height={15} fill='cyan' />
			<text x={10} y={15}>
				hi
			</text>
		</g>
	);
};
const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		{
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
				{ content: <Rect /> },
				{ content: 'Row Span', rowSpan: 2 },
				{ content: 'Row 1, Cell 3' },
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};

const BasicWithElement = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};

export default BasicWithElement;
