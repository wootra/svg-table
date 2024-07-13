import SVGTable, { TableProps } from '../../svg-table-react-repo/src';
const NESTED_TABLE = {
	table: {
		style: {
			bgColor: '#e8e8ad',
			rowGaps: 5,
			borderColors: '#ad0000',
			borderWidths: 3,
			margins: 10,
		},
		rows: [['this table is in padding boundary.'], ['paddings: [30, 50, 30, 50]']],
	},
};

const tableProps: Omit<TableProps, 'width'> = {
	height: 500,
	style: {
		colGaps: 10,
		rowGaps: 20,
	},
	rows: [
		[
			{
				style: {
					paddings: [30, 50, 30, 50],
				},
				content: 'paddings: [30, 50, 30, 50]',
			},
			{
				style: {
					paddings: 50,
				},
				content: 'paddings: 50',
			},
		],
		[
			{
				style: {
					paddings: [30, 50, 30, 50],
				},
				colSpan: 2,
				content: NESTED_TABLE,
			},
		],
	],
};

export const Paddings = ({ width = 500 }: { width?: number }) => {
	return (
		<div>
			<p>in the first row, paddings for the text only works for left and top paddings.</p>
			<p>but paddings are still used when you add nested table to calculate valid area.</p>
			<SVGTable {...tableProps} width={width} />
		</div>
	);
};
