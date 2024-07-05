import SVGTable, { ContentAsFunc, TableProps } from '@shjeon0730/svg-table';

// this props will have an extensive amount of attributes that you can use for customization
const getOutBoundLabelOnTop: ContentAsFunc = props => {
	// white-bg is given to defs property.
	return (
		<text x={props.x} y={0} {...props.textStyle} filter='url(#white-bg)'>
			TOP LABEL
		</text>
	);
};

const getOutBoundLabelOnLeft: ContentAsFunc = props => {
	return (
		<g transform={`translate(-10, ${props.y})`}>
			<g transform={`rotate(-90)`}>
				<text dominantBaseline={'auto'} textAnchor='middle'>
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
				<feFlood floodColor='#FFFFFF' />
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
						<text
							x={props.width}
							y={props.height / 2}
							textAnchor='end'
							fill='yellow'
							{...props.textStyle}
						>
							After
						</text>
					),
					before: props => (
						<>
							<rect
								x={0}
								y={0}
								width={props.width}
								height={props.height}
								fill='#ff6666'
							/>
							<text
								x={0}
								y={props.height / 2}
								fill='white'
								{...props.textStyle}
							>
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
							y: 0,
							filter: 'url(#white-bg)',
						},
						beforeTextStyle: {
							filter: 'url(#red-bg)',
							fill: 'yellow',
						},
						afterTextStyle: {
							fill: 'green',
						},
					},
					content: 'Header 2',
					after: 'After Header 2', // this will not affected by textStyle
					before: 'Before Header 2',
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
