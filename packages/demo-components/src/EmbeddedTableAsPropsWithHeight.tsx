import SVGTable, {
	CellProps,
	CellPropsAsObj,
	TableProps,
} from '@shjeon0730/svg-table';

const embeddedTableProps = (
	color: string,
	columns: number,
	fontSize = 12
): CellPropsAsObj => {
	const filled: CellProps = {
		style: { bgColor: color, textColor: 'white' },
		content: 'filled',
	};
	const empty: CellProps = { content: 'empty' };
	const cellStore: CellProps[] = Array(columns + 1)
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
	return {
		content: {
			table: {
				defaultCellStyle: {
					borderColors: color,
					borderWidths: 1,
					svgStyle: {
						fontSize,
					},
				},
				rows: [
					cellStore.slice(0, columns),
					cellStore.slice(1, columns + 1),
					cellStore.slice(0, columns),
				],
			},
		},
	};
};

const tableProps: Omit<TableProps, 'width' | 'height'> = {
	columnWidths: [1, 1, 1], // this is just ratio.
	rows: [
		['Header 1', 'Header 2', 'Header3'],
		[
			embeddedTableProps('red', 2),
			embeddedTableProps('blue', 3),
			embeddedTableProps('green', 4),
		],
		[
			{ ...embeddedTableProps('pink', 3), rowSpan: 2 },
			{ ...embeddedTableProps('cyan', 4), colSpan: 2 },
		],
		[embeddedTableProps('magenta', 3), embeddedTableProps('#296541', 1)],
	],
};

export const EmbeddedTableAsPropsWithHeight = ({
	width = 900,
	height = 150, // when height is given, all nested table will be dynamically adjusted in height.
}: {
	width: number;
	height?: number;
}) => {
	return <SVGTable width={width} {...tableProps} height={height} />;
};
