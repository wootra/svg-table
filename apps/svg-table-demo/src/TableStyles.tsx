import SVGTable, { TableProps } from 'svg-table';

const Rect = () => {
	return <ellipse cx={15} cy={15} rx={30} ry={30} fill='cyan' />;
};

const TableStyles = ({ width = 500 }: { width?: number }) => {
	const tableProps: TableProps = {
		columnWidths: [100, 300, 200],
		width: width,

		defaultRowStyle: {
			bgColor: 'yellow',
			height: 50,
		},
		defaultCellStyle: {
			textColor: '#ff0000',
			textStyle: {
				textAnchor: 'start',
				dominantBaseline: 'hanging',
				x: 0,
				y: 0,
			},
		},
		style: {
			rowGaps: 10,
			colGaps: 10,
			margins: [10, 10, 10, 10],
			bgColor: 'lime',
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

	return <SVGTable {...tableProps} />;
};

export default TableStyles;
