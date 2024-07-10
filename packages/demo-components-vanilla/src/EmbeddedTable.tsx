import SVGTable, { createRenderedString, TableProps } from '@shjeon0730/svg-table-vanilla';
import { basicDemo } from './BasicDemo';
import { bgColorAndTextColor } from './BgColorAndTextColor';
import { gaps } from './Gaps';
import { noBorderTableDemo } from './NoBorderTableDemo';
import { onlyTableBolder } from './OnlyTableBolder';
import { tableBorderStyles } from './TableBorderStyles';
const FIT_TO_CELL = 293;

const tableProps: TableProps = {
	columnWidths: [1, 1, 1], // this is just ratio.
	width: 900,
	defaultRowStyle: {
		height: 120,
	},
	className: 'embedded-standalone',
	style: {
		rowGaps: 10,
		colGaps: 10,
	},
	rows: [
		{
			style: {
				height: 30,
			},
			cells: ['Header 1', 'Header 2', 'Header3'],
		},
		[
			{ content: createRenderedString(bgColorAndTextColor({ width: 300 })) }, // since there is gaps added, it will be overflow.
			{ content: createRenderedString(basicDemo({ width: FIT_TO_CELL })) },
			{ content: createRenderedString(gaps({ width: FIT_TO_CELL })) },
		],
		[
			{ content: createRenderedString(noBorderTableDemo({ width: FIT_TO_CELL })) },
			{ content: createRenderedString(onlyTableBolder({ width: FIT_TO_CELL })) },
			{ content: createRenderedString(tableBorderStyles({ width: FIT_TO_CELL })) },
		],
	],
};

import { useEffect } from 'react';

export const EmbeddedTable = ({ standalone = false }: { standalone?: boolean }) => {
	useEffect(() => {
		const el = document.getElementById('embedded-table-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, standalone });
		}
	}, [standalone]);

	return <div id='embedded-table-demo' />;
};
