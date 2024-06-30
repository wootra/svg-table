import SVGTable, { TableProps } from 'svg-table';

const Rect = () => {
	return <rect x={0} y={0} width={100} height={100} fill='cyan' />;
};

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
			bgColor: 'transparent',
			borderWidths: [2, 2, 2, 2],
			borderColors: ['red', 'green', 'blue', 'purple'],
			borderPatterns: [
				[4, 4],
				[4, 6],
				[0, 6],
				[0, 6],
			],
			borderShapes: ['butt', 'butt', 'round', 'square'],
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
						},
					},
					{
						content: 'Header 2',
						colSpan: 2,
						style: {
							bgColor: '#cccccc',
							borderColors: ['red', 'green', 'blue', 'purple'],
							borderPatterns: [
								[4, 0.1],
								[2, 0.1],
								[0.1, 3],
								[0.1, 3],
							],
							borderShapes: ['butt', 'butt', 'round', 'square'],
						},
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

	return (
		<div
			style={{
				width: 500,
				overflow: 'visible',
			}}
		>
			<SVGTable {...tableProps} />
		</div>
	);
};

export default App;
