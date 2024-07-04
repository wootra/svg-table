import SVGTable, { TableProps } from '@shjeon0730/svg-table';

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['cell1', 'cell2', 'cell3'],
		['cell4', { content: 'content', colSpan: 2 }],
		{
			style: {
				height: 100,
			},
			cells: [
				'cell7',
				{
					style: {
						bgColor: 'red',
					},
					content: 'content',
				},
				'cell9',
			],
		},
	],
};

export const BasicSimpleArray = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
