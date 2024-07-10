import SVGTable, { TableProps } from '../../svg-table-react-repo/src';

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['cell1', 'cell2\nline2', 'cell3'],
		['cell4', { content: 'content', colSpan: 2 }],
		{
			style: {
				height: 100,
			},
			cells: [
				'cell7',
				{
					style: {
						bgColor: '#468cb7',
						textColor: 'white',
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
