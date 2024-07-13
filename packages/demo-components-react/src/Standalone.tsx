import SVGTable, { TableProps } from '../../svg-table-react-repo/src';

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		{
			cells: [
				{
					content: 'Header 1',
				},
				{
					content: 'Col Span',
					colSpan: 2,
				},
			],
		},
		{
			cells: [
				{ content: 'Row 1, Cell 1' },
				{ content: 'Row Span\nmultiline\nsupport', rowSpan: 2 },
				{ content: 'Row 1, Cell 3' },
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};

export const Standalone = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} standalone={true} />;
};
