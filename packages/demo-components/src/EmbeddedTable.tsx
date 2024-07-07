import SVGTable, { TableProps } from '@shjeon0730/svg-table';
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
		bgColor: 'yellow',
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
			{ content: <BgColorAndTextColor width={300} /> }, // since there is gaps added, it will be overflow.
			{ content: <BasicDemo width={293} /> },
			{ content: <Gaps width={293} /> },
		],
		[
			{ content: <NoBorderTableDemo width={293} /> },
			{ content: <OnlyTableBolder width={293} /> },
			{ content: <TableBorderStyles width={293} /> },
		],
	],
};

export const EmbeddedTable = ({
	standalone = false,
}: {
	standalone?: boolean;
}) => {
	return <SVGTable {...tableProps} standalone={standalone} />;
};
