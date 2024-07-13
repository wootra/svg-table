import SVGTable, { TableProps } from '@shjeon0730/svg-table-solid';
import { BasicDemo } from './BasicDemo';
import { BgColorAndTextColor } from './BgColorAndTextColor';
import { Gaps } from './Gaps';
import { NoBorderTableDemo } from './NoBorderTableDemo';
import { OnlyTableBolder } from './OnlyTableBolder';
import { TableBorderStyles } from './TableBorderStyles';

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
			{ content: (<BgColorAndTextColor width={300} />) as SVGElement }, // since there is gaps added, it will be overflow.
			{ content: (<BasicDemo width={293} />) as SVGElement },
			{ content: (<Gaps width={293} />) as SVGElement },
		],
		[
			{ content: (<NoBorderTableDemo width={293} />) as SVGElement },
			{ content: (<OnlyTableBolder width={293} />) as SVGElement },
			{ content: (<TableBorderStyles width={293} />) as SVGElement },
		],
	],
};

export const EmbeddedTable = ({ standalone = false }: { standalone?: boolean }) => {
	return SVGTable({ ...tableProps, standalone });
};
