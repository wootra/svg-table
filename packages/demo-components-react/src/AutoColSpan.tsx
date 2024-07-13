import SVGTable, { TableProps } from '@shjeon0730/svg-table-react';

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['cell1', 'cell2\nline2', 'cell3', 'cell4'],
		['cell4', 'automatic span!'],
		['cell4', { content: 'auto span with row-span', rowSpan: 2 }],
		['cell5', 'more cells'],
	],
};

export const AutoColSpan = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
