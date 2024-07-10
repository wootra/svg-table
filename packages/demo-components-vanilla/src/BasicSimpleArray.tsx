import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';

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

import { useEffect } from 'react';

export const BasicSimpleArray = ({ width = 500 }: { width?: number }) => {
	useEffect(() => {
		const el = document.getElementById('basic-simple-array-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width });
		}
	}, [width]);

	return <div id='basic-simple-array-demo' />;
};
