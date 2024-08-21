import SVGTable, {
	CellPropsAsObj,
	SVGTableCell,
	SVGTableRow,
	TablePropsWithoutRows,
	NestedSVGTable,
} from '@shjeon0730/svg-table-solid';
import { JSX } from 'solid-js';

const embeddedTableProps = (color: string, columns: number, fontSize = 12): CellPropsAsObj => {
	const filled: CellPropsAsObj = {
		style: { bgColor: color, textColor: 'white' },
		content: 'filled',
	};
	const empty: CellPropsAsObj = { content: 'filled' };
	const cellStore: CellPropsAsObj[] = Array(columns + 1)
		.fill('')
		.map((_, idx) => {
			if (idx === 0) {
				if (columns !== 1) {
					return embeddedTableProps(color, columns - 1, fontSize / 3);
				}
				return empty;
			}
			if (idx % 2 === 0) {
				return empty;
			}
			return filled;
		});
	const tableProps: Omit<TablePropsWithoutRows, 'width'> = {
		defaultCellStyle: {
			borderColors: color,
			borderWidths: 1,
			svgStyle: {
				fontSize,
			},
		},
	};
	return {
		content: (
			<NestedSVGTable {...tableProps}>
				<SVGTableRow>
					{cellStore.slice(0, columns).map(({ content, ...cell }) => (
						<SVGTableCell {...cell}>{content as Node}</SVGTableCell>
					))}
				</SVGTableRow>
				<SVGTableRow>
					{cellStore.slice(1, columns + 1).map(({ content, ...cell }) => (
						<SVGTableCell {...cell}>{content as Node}</SVGTableCell>
					))}
				</SVGTableRow>
				<SVGTableRow>
					{cellStore.slice(0, columns).map(({ content, ...cell }) => (
						<SVGTableCell {...cell}>{content as Node}</SVGTableCell>
					))}
				</SVGTableRow>
			</NestedSVGTable>
		),
	} as CellPropsAsObj;
};

const tableProps: Omit<TablePropsWithoutRows, 'width' | 'height'> = {
	columnWidths: [1, 1, 1], // this is just ratio.
	rowHeights: [1, 3, 3, 3],
	/*
	rows: [
		['Header 1', 'Header 2', 'Header3'],
		[embeddedTableProps('#5f1010', 2), embeddedTableProps('#111150', 3), embeddedTableProps('#0b310b', 4)],
		[
			{ ...embeddedTableProps('#836268', 3), rowSpan: 2 },
			{ ...embeddedTableProps('#275454', 4), colSpan: 2 },
		],
		[embeddedTableProps('#550255', 3), embeddedTableProps('#296541', 1)],
	],
	*/
};

export const EmbeddedTableAsPropsWithHeightJSX = ({
	width = 900,
	height = 400, // when height is given, all nested table will be dynamically adjusted in height.
	standalone = false,
}: {
	width: number;
	height?: number;
	standalone?: boolean;
}) => {
	return (
		<SVGTable width={width} {...tableProps} height={height} standalone={standalone}>
			<SVGTableRow>
				<SVGTableCell>Header 1</SVGTableCell>
				<SVGTableCell>Header 2</SVGTableCell>
				<SVGTableCell>Header 3</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell>
					<NestedSVGTable>
						<SVGTableRow>
							<SVGTableCell>cell 1</SVGTableCell>
							<SVGTableCell>cell 2</SVGTableCell>
							<SVGTableCell>cell 3</SVGTableCell>
						</SVGTableRow>
						<SVGTableRow>
							<SVGTableCell>cell 1</SVGTableCell>
							<SVGTableCell>cell 2</SVGTableCell>
							<SVGTableCell>cell 3</SVGTableCell>
						</SVGTableRow>
						<SVGTableRow>
							<SVGTableCell>cell 1</SVGTableCell>
							<SVGTableCell>cell 2</SVGTableCell>
							<SVGTableCell>cell 3</SVGTableCell>
						</SVGTableRow>
					</NestedSVGTable>
				</SVGTableCell>
				<SVGTableCell>{embeddedTableProps('#111150', 3).content as unknown as JSX.Element}</SVGTableCell>
				<SVGTableCell>{embeddedTableProps('#0b310b', 4).content as unknown as JSX.Element}</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell rowSpan={2}>
					{embeddedTableProps('#836268', 3).content as unknown as JSX.Element}
				</SVGTableCell>
				<SVGTableCell colSpan={2}>
					{embeddedTableProps('#275454', 4).content as unknown as JSX.Element}
				</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell>{embeddedTableProps('#550255', 3).content as unknown as JSX.Element}</SVGTableCell>
				<SVGTableCell>{embeddedTableProps('#296541', 1).content as unknown as JSX.Element}</SVGTableCell>
			</SVGTableRow>
		</SVGTable>
	);
};
