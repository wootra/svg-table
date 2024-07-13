import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';
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
	return SVGTable({ ...tableProps, width });
};
