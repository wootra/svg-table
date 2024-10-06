import { SVGTable, SVGTableRow, SVGTableCell, TablePropsWithoutRows } from '@shjeon0730/svg-table-solid';
import { BasicDemo } from './BasicDemo';
import { BgColorAndTextColor } from './BgColorAndTextColor';
import { Gaps } from './Gaps';
import { NoBorderTableDemo } from './NoBorderTableDemo';
import { OnlyTableBolder } from './OnlyTableBolder';
import { TableBorderStyles } from './TableBorderStyles';

const tableProps: TablePropsWithoutRows = {
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
};

export const EmbeddedTableJSX = ({ standalone = false }: { standalone?: boolean }) => {
	return (
		<SVGTable {...tableProps} standalone={standalone}>
			<SVGTableRow style={{ height: 30 }}>
				<SVGTableCell>Header 1</SVGTableCell>
				<SVGTableCell>Header 2</SVGTableCell>
				<SVGTableCell>Header 3</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell>
					<BgColorAndTextColor width={300} />
				</SVGTableCell>
				<SVGTableCell>
					<BasicDemo width={293} />
				</SVGTableCell>
				<SVGTableCell>
					<Gaps width={293} />
				</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell>
					<NoBorderTableDemo width={293} />
				</SVGTableCell>
				<SVGTableCell>
					<OnlyTableBolder width={293} />
				</SVGTableCell>
				<SVGTableCell>
					<TableBorderStyles width={293} />
				</SVGTableCell>
			</SVGTableRow>
		</SVGTable>
	);
};
