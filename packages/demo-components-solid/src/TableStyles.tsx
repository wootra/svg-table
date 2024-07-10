import SVGTable, { TableProps } from '@shjeon0730/svg-table-solid';
const imBug = () => {
	return (
		<svg
			stroke='currentColor'
			fill='#0d7484'
			stroke-width='0'
			version='1.1'
			viewBox='0 0 16 16'
			color='yellow'
			style='color:yellow'
			height='1em'
			width='1em'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M16 9v-1h-3.020c-0.092-1.136-0.497-2.172-1.12-3.004h2.53l1.095-4.379-0.97-0.243-0.905 3.621h-2.729c-0.014-0.011-0.028-0.021-0.042-0.032 0.105-0.305 0.162-0.632 0.162-0.972 0-1.653-1.343-2.992-3-2.992s-3 1.34-3 2.992c0 0.34 0.057 0.667 0.162 0.972-0.014 0.011-0.028 0.021-0.042 0.032h-2.729l-0.905-3.621-0.97 0.243 1.095 4.379h2.53c-0.623 0.832-1.028 1.868-1.12 3.004h-3.020v1h3.021c0.059 0.713 0.242 1.388 0.526 1.996h-1.937l-1.095 4.379 0.97 0.243 0.905-3.621h1.756c0.917 1.219 2.303 1.996 3.854 1.996s2.937-0.777 3.854-1.996h1.756l0.905 3.621 0.97-0.243-1.095-4.379h-1.937c0.283-0.608 0.466-1.283 0.526-1.996h3.021z'></path>
		</svg>
	) as SVGElement;
};

const circle = () => {
	return (<ellipse cx={15} cy={15} rx={30} ry={30} fill='orange' style={{ filter: 'blur(10px)' }} />) as SVGElement;
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
					before: circle,
					style: {
						allowOverflow: false,
					},
					after: props =>
						(
							<g transform={`translate(${props.x - 40}, ${props.y - 16}) scale(2)`}>{imBug()}</g>
						) as SVGElement,
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
