import SVGTable, { ContentAsFunc, TableProps } from '@shjeon0730/svg-table';

// this props will have an extensive amount of attributes that you can use for customization
const getOutBoundLabelOnTop: ContentAsFunc = props => {
	// white-bg is given to defs property.
	return (
		<text x={props.x} y={props.y - props.height / 2} {...props.textStyle} filter='url(#white-bg)'>
			TOP LABEL
		</text>
	);
};

const getOutBoundLabelOnLeft: ContentAsFunc = props => {
	return (
		<g transform={`translate(-10, ${props.y})`}>
			<g transform={`rotate(-90)`}>
				<text {...props.textStyle} dominantBaseline={'auto'} textAnchor='middle'>
					LEFT LABEL
				</text>
			</g>
		</g>
	);
};

const tableProps: Omit<TableProps, 'width'> = {
	// this can be used in svg area.
	defs: (
		<>
			<filter x='-0.1' y='0' width='1.2' height='1' id='white-bg'>
				<feFlood floodColor='var(--label-background, #fff)' />
				<feComposite in='SourceGraphic' operator='over' />
			</filter>
			<filter x='-0.1' y='0' width='1.2' height='1' id='red-bg'>
				<feFlood floodColor='red' />
				<feComposite in='SourceGraphic' operator='over' />
			</filter>
		</>
	),
	style: {
		margins: [0, 0, 0, 30],
	},
	rows: [
		{
			cells: [
				{
					style: {
						allowOverflow: true,
					},
					content: getOutBoundLabelOnTop,
					after: props => (
						<text {...props.textStyle} y={props.height / 2} x={props.width} textAnchor='end' fill='yellow'>
							After
						</text>
					),
					before: props => (
						<>
							<rect x={0} y={0} width={props.width / 2} height={props.height} fill='#ff6666' />
							<text {...props.textStyle} x={0} y={props.height / 2} fill='white'>
								Before
							</text>
						</>
					),
				},
				{
					style: {
						allowOverflow: true,
						textStyle: {
							// another way of outbounding label
							y: -15,
							filter: 'url(#white-bg)',
						},
					},
					content: 'Header 2',
					after: {
						content: 'After Header 2',
						textStyle: {
							fill: 'green',
						},
					}, // this will not affected by textStyle
					before: {
						content: 'Before Header 2',
						textStyle: {
							filter: 'url(#red-bg)',
							fill: 'yellow',
						},
					},
					colSpan: 2,
				},
			],
		},
		{
			cells: [
				{
					style: {
						allowOverflow: true,
					},
					content: 'text',
					before: getOutBoundLabelOnLeft,
				},
				{ content: 'Row Span', rowSpan: 2 },
				{ content: 'Row 1, Cell 3' },
			],
		},
		['Row 2, Cell 1', 'Row 2, Cell 3'],
	],
};

export const OutboundLabels = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
