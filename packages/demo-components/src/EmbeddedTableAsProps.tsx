import SVGTable, { CellProps, TableProps } from '@shjeon0730/svg-table';

const embeddedTableProps = (
	color: string,
	columns: number,
	height = 50,
	fontSize = 12
): CellProps => {
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
					return embeddedTableProps(
						color,
						columns - 1,
						height / 3,
						fontSize / 3
					);
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
				defaultRowStyle: {
					height,
				},
				rows: [
					{
						cells: cellStore.slice(0, columns),
					},
					{
						cells: cellStore.slice(1, columns + 1),
					},
					{
						cells: cellStore.slice(0, columns),
					},
				],
			},
		},
	};
};

const tableProps: TableProps = {
	columnWidths: [1, 1, 1], // this is just ratio.
	width: 900,
	defaultRowStyle: {
		bgColor: 'yellow',
		height: 150,
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
			cells: [
				embeddedTableProps('red', 2),
				embeddedTableProps('blue', 3),
				embeddedTableProps('green', 4),
			],
		},
		{
			cells: [
				embeddedTableProps('pink', 3),
				embeddedTableProps('cyan', 4),
				embeddedTableProps('lime', 2),
			],
		},
		{
			cells: [
				embeddedTableProps('magenta', 3),
				embeddedTableProps('indigo', 2),
				embeddedTableProps('#296541', 1),
			],
		},
	],
};

export const EmbeddedTableAsProps = () => {
	return <SVGTable {...tableProps} />;
};
