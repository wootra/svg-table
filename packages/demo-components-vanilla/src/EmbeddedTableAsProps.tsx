import SVGTable, { CellProps, CellPropsAsObj, TableProps } from '@shjeon0730/svg-table-vanilla';

const embeddedTableProps = (color: string, columns: number, height = 50, fontSize = 12): CellPropsAsObj => {
	const filled: CellProps = {
		style: { bgColor: color, textColor: 'white' },
		content: 'filled',
	};
	const empty: CellProps = { content: 'empty' };
	// below logic make the nested table recurrsively.
	const cellStore: CellProps[] = Array(columns + 1)
		.fill('')
		.map((_, idx) => {
			if (idx === 0) {
				if (columns !== 1) {
					return embeddedTableProps(color, columns - 1, height / 3, fontSize / 3);
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
				rows: [cellStore.slice(0, columns), cellStore.slice(1, columns + 1), cellStore.slice(0, columns)],
			},
		},
	};
};

const tableProps: Omit<TableProps, 'width'> = {
	columnWidths: [1, 1, 1], // this is just ratio.
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
			cells: ['Header 1', 'Header 2', 'Header3'],
		},
		[embeddedTableProps('#5f1010', 2), embeddedTableProps('#111150', 3), embeddedTableProps('#0b310b', 4)],
		[
			embeddedTableProps('#836268', 3),
			{
				...embeddedTableProps('#275454', 4),
				rowSpan: 2,
			},
			embeddedTableProps('#475c56', 2),
		],
		[embeddedTableProps('#550255', 3), embeddedTableProps('#296541', 1)],
	],
};

import { useEffect } from 'react';

export const EmbeddedTableAsProps = ({ width = 900, standalone }: { width: number; standalone?: boolean }) => {
	useEffect(() => {
		const el = document.getElementById('embedded-table-as-props-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width, standalone });
		}
	}, [width, standalone]);

	return <div id='embedded-table-as-props-demo' />;
};
