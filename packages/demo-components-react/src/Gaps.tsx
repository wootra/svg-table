import SVGTable, { TableProps } from '../../svg-table-react-repo/src';

const tableProps: Omit<TableProps, 'width'> = {
	style: {
		colGaps: 4,
		rowGaps: 10,
	},
	rows: [
		[
			'Header 1',
			{
				content: 'Header 2',
				colSpan: 2,
			},
		],
		['Row1, Cell1', { content: 'Row 1, Cell 2', rowSpan: 2 }, 'Row 1, Cell 3'],
		['Row 2, Cell 1', 'Row 2, Cell 3'],
	],
};
export const Gaps = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
