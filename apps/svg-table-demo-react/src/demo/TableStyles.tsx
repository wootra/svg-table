import SVGTable, { TableProps } from '@shjeon0730/svg-table-react';
import { ImBug } from 'react-icons/im';

const Circle = () => {
	return <ellipse cx={15} cy={15} rx={30} ry={30} fill='orange' style={{ filter: 'blur(10px)' }} />;
};

const tableProps: Omit<TableProps, 'width'> = {
	columnWidths: [2, 1, 2],

	defaultRowStyle: {
		bgColor: 'yellow',
		height: 50,
	},

	style: {
		// table's border customizations
		rowGaps: 10,
		colGaps: 10,
		margins: [10, 10, 10, 10],
		bgColor: '#043404',
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
					before: <Circle />,
					style: {
						allowOverflow: false,
					},
					after: props => (
						<g transform={`translate(${props.x - 40}, ${props.y - 16}) scale(2)`}>
							<ImBug fill='#0d7484' color='yellow' />
						</g>
					),
					content: 'Row1, Cell1',
				},
				{
					content: `rotate 15, 
					opacity 0.5`,
					rowSpan: 2,
					style: {
						textStyle: {
							rotate: '15',
						},
						svgStyle: {
							opacity: 0.5,
						},
					},
				},
				{ content: 'Row 1, Cell 3' },
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};
export const TableStyles = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
