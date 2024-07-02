import SVGTable, { ContentAsFunc, TableProps } from '@shjeon0730/svg-table';

// this props will have an extensive amount of attributes that you can use for customization
const adjustedText: ContentAsFunc = props => {
	return (
		<text x={props.x + 10} y={props.y + 10}>
			Adjusted Text
		</text>
	);
};

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		{
			cells: [
				{
					content: 'Header 1',
				},
				{
					content: 'Header 2',
					colSpan: 2,
				},
			],
		},
		{
			cells: [
				{ content: adjustedText },
				{ content: 'Row Span', rowSpan: 2 },
				{ content: 'Row 1, Cell 3' },
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};

export const BasicWithProps = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
