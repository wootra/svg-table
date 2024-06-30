import SVGTable, { TableProps } from 'svg-table';

const App = () => {
	const tableProps: TableProps = {
		columnWidths: [100, 200, 300],
		width: 500,
		defaultRowStyle: {
			bgColor: 'yellow',
			height: 50,
		},
		defaultCellStyle: {
			textColor: '#ff0000',
		},
		style: {
			rowGaps: 10,
			colGaps: 10,
			margins: [10, 10, 10, 10],
		},
		rows: [
			{
				cells: [
					{ content: 'Header 1', style: { bgColor: '#f0f0f0' } },
					{
						content: 'Header 2',
						colSpan: 2,
						style: { bgColor: '#f0f0f0' },
					},
				],
			},
			{
				cells: [
					{ content: 'Row 1, Cell 1' },
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

export default App;
