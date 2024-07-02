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
				<feFlood flood-color='#FFFFFF' />
				<feComposite in='SourceGraphic' operator='and' />
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
				},
				{
					content: 'Header 2',
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
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};

export const OutboundLabels = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
