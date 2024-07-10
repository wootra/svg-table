import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';

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

import { useEffect } from 'react';

export const basicDemo = ({ width = 500 }: { width?: number }) => {
	return SVGTable({ ...tableProps, width });
};

export const BasicDemo = ({ width = 500 }: { width?: number }) => {
	useEffect(() => {
		const el = document.getElementById('basic-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width });
		}
	}, [width]);

	return <div id='basic-demo' />;
};
