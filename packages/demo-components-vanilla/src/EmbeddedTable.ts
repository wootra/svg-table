import SVGTable, { createRenderedString, TableProps } from '@shjeon0730/svg-table-vanilla';
import { BasicDemo } from './BasicDemo';
import { BgColorAndTextColor } from './BgColorAndTextColor';
import { Gaps } from './Gaps';
import { NoBorderTableDemo } from './NoBorderTableDemo';
import { OnlyTableBolder } from './OnlyTableBolder';
import { TableBorderStyles } from './TableBorderStyles';
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
			{ content: createRenderedString(BgColorAndTextColor({ width: 300 })) }, // since there is gaps added, it will be overflow.
			{ content: createRenderedString(BasicDemo({ width: FIT_TO_CELL })) },
			{ content: createRenderedString(Gaps({ width: FIT_TO_CELL })) },
		],
		[
			{ content: createRenderedString(NoBorderTableDemo({ width: FIT_TO_CELL })) },
			{ content: createRenderedString(OnlyTableBolder({ width: FIT_TO_CELL })) },
			{ content: createRenderedString(TableBorderStyles({ width: FIT_TO_CELL })) },
		],
	],
};

export const EmbeddedTable = ({ standalone = false }: { standalone?: boolean }) => {
	return SVGTable({ ...tableProps, standalone });
};
