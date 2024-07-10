import SVGTable, { CellProps, TableProps } from '@shjeon0730/svg-table-vanilla';

const LONG_TEXT = 'This should overflow Because it is so long!!';

const overflowedCell: CellProps = {
	style: {
		allowOverflow: true,
	},
	content: LONG_TEXT,
};

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		[overflowedCell, 'Cell', 'Cell'],
		['Cell', LONG_TEXT, 'Cell'],
		['Cell', 'Cell', LONG_TEXT],
	],
};

import { useEffect } from 'react';

export const BasicWithPropsAllowingOverflowOnlyOneCell = ({ width = 500 }: { width?: number }) => {
	useEffect(() => {
		const el = document.getElementById('basic-with-props-allowing-overflow-only-one-cell-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width });
		}
	}, [width]);

	return <div id='basic-with-props-allowing-overflow-only-one-cell-demo' />;
};
