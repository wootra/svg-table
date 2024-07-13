import SVGTable, {
	ContentAsFunc,
	convertToKebabCaseProps,
	createVanillaElement,
	SVGRenderElement,
	TableProps,
} from '@shjeon0730/svg-table-vanilla';

// this props will have an extensive amount of attributes that you can use for customization
const getOutBoundLabelOnTop: ContentAsFunc = props => {
	const textStyle = convertToKebabCaseProps(props.textStyle);
	// white-bg is given to defs property.
	return createVanillaElement(
		'text',
		{ x: props.x, y: props.y - props.height / 2, fill: props.textColor, ...textStyle, filter: 'url(#white-bg)' },
		'TOP LABEL'
	) as SVGRenderElement;
};

const getOutBoundLabelOnLeft: ContentAsFunc = props => {
	return createVanillaElement(
		'g',
		{ transform: `translate(-10, ${props.y})` },
		createVanillaElement(
			'g',
			{ transform: `rotate(-90)` },
			createVanillaElement('text', { dominantBaseline: 'auto', textAnchor: 'middle' }, 'LEFT LABEL')
		)
	) as SVGRenderElement;
};

const tableProps: Omit<TableProps, 'width'> = {
	// this can be used in svg area.
	defs: [
		createVanillaElement(
			'filter',
			{ x: '-0.1', y: '0', width: '1.2', height: '1', id: 'white-bg' },
			createVanillaElement('feFlood', { floodColor: 'var(--label-background, #fff)' }),
			createVanillaElement('feComposite', { in: 'SourceGraphic', operator: 'over' })
		) as SVGElement,
		createVanillaElement(
			'filter',
			{ x: '-0.1', y: '0', width: '1.2', height: '1', id: 'red-bg' },
			createVanillaElement('feFlood', { floodColor: 'red' }),
			createVanillaElement('feComposite', { in: 'SourceGraphic', operator: 'over' })
		) as SVGElement,
	],
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
					after: props =>
						createVanillaElement(
							'text',
							{
								...props.textStyle,
								x: props.width,
								y: props.height / 2,
								textAnchor: 'end',
								fill: 'yellow',
							},
							'After'
						) as SVGRenderElement,
					before: props =>
						createVanillaElement(
							'g',
							{},
							createVanillaElement('rect', {
								x: 0,
								y: 0,
								width: props.width / 2,
								height: props.height,
								fill: '#ff6666',
							}),
							createVanillaElement(
								'text',
								{
									...props.textStyle,
									x: 0,
									y: props.height / 2,
									fill: 'white',
								},
								'Before'
							)
						) as SVGRenderElement,
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
	return SVGTable({ ...tableProps, width });
};
