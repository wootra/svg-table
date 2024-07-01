import SVGTable, { TableProps } from '@shjeon0730/svg-table';

const Circle = () => {
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

		style: {
			// table's border customizations
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
						content: <Circle />,
						style: {
							svgStyle: {
								overflow: 'visible', // override internal svg's style
							},
						},
					},
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
