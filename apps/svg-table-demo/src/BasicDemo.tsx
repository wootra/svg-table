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

const BasicDemo = ({ width = 500 }: { width?: number }) => {
	const tableProps: TableProps = {
		width: width,
		rows: [
			{
				cells: [
					{
						content: 'Header 1',
					},
					{
						content: 'Header 2',
						colSpan: 2,
					},
				],
			},
			{
				cells: [
					{ content: <Rect /> },
					{ content: 'Row 1, Cell 2', rowSpan: 2 },
					{ content: 'Row 1, Cell 3' },
				],
			},
			{
				cells: [
					{ content: 'Row 2, Cell 1' },
					{ content: 'Row 2, Cell 3' },
				],
			},
		],
	};

	return <SVGTable {...tableProps} />;
};

export default BasicDemo;
