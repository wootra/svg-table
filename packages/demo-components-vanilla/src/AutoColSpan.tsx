import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';
import { useEffect } from 'react';

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['cell1', 'cell2\nline2', 'cell3', 'cell4'],
		['cell4', 'automatic span!'],
		['cell4', { content: 'auto span with row-span', rowSpan: 2 }],
		['cell5', 'more cells'],
	],
};

export const AutoColSpan = ({ width = 500 }: { width?: number }) => {
	useEffect(() => {
		const el = document.getElementById('auto-col-span-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width });
		}
	}, [width]);
	return <div id='auto-col-span-demo' />;
};
