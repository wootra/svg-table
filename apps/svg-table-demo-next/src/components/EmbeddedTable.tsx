import SVGTable, { TableProps } from '@shjeon0730/svg-table';
import BasicDemo from './BasicDemo';
import BgColorAndTextColor from './BgColorAndTextColor';
import Gaps from './Gaps';
import NoBorderTableDemo from './NoBorderTableDemo';
import OnlyTableBolder from './OnlyTableBolder';
import TableBorderStyles from './TableBorderStyles';

const tableProps: TableProps = {
	columnWidths: [1, 1, 1], // this is just ratio.
	width: 900,
	defaultRowStyle: {
		bgColor: 'yellow',
		height: 50,
	},

	style: {
		rowGaps: 10,
		colGaps: 10,
	},
	rows: [
		{
			style: {
				height: 30,
			},
			cells: [
				{
					content: 'Header 1',
				},
				{
					content: 'Header 2',
				},
				{
					content: 'Header3',
				},
			],
		},
		{
			style: {
				height: 200,
			},
			cells: [
				{ content: <BgColorAndTextColor width={300} /> }, // since there is gaps added, it will be overflow.
				{ content: <BasicDemo width={293} /> },
				{ content: <Gaps width={293} /> },
			],
		},
		{
			style: {
				height: 200,
			},
			cells: [
				{ content: <NoBorderTableDemo width={293} /> },
				{ content: <OnlyTableBolder width={293} /> },
				{ content: <TableBorderStyles width={293} /> },
			],
		},
	],
};

const EmbeddedTable = () => {
	return <SVGTable {...tableProps} />;
};

export default EmbeddedTable;
