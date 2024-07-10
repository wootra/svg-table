import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';

// this props will have an extensive amount of attributes that you can use for customization

const overflowedCell = 'This should overflow Because it is so long!!';

const tableProps: Omit<TableProps, 'width'> = {
	defaultCellStyle: {
		allowOverflow: true,
	},
	rows: [
		[overflowedCell, 'Cell', 'Cell'],
		['Cell', overflowedCell, 'Cell'],
		['Cell', 'Cell', overflowedCell],
	],
};

import { useEffect } from 'react';

export const BasicWithPropsAllowingOverflow = ({ width = 500 }: { width?: number }) => {
	useEffect(() => {
		const el = document.getElementById('basic-with-props-allowing-overflow-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width });
		}
	}, [width]);

	return <div id='basic-with-props-allowing-overflow-demo' />;
};
