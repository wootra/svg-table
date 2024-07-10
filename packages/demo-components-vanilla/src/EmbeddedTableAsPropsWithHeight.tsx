import SVGTable, { CellProps, CellPropsAsObj, TableProps } from '@shjeon0730/svg-table-vanilla';
import { useEffect } from 'react';

const embeddedTableProps = (color: string, columns: number, fontSize = 12): CellPropsAsObj => {
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
				rows: [cellStore.slice(0, columns), cellStore.slice(1, columns + 1), cellStore.slice(0, columns)],
			},
		},
	};
};

const tableProps: Omit<TableProps, 'width' | 'height'> = {
	columnWidths: [1, 1, 1], // this is just ratio.
	rowHeights: [1, 3, 3, 3],
	rows: [
		['Header 1', 'Header 2', 'Header3'],
		[embeddedTableProps('#5f1010', 2), embeddedTableProps('#111150', 3), embeddedTableProps('#0b310b', 4)],
		[
			{ ...embeddedTableProps('#836268', 3), rowSpan: 2 },
			{ ...embeddedTableProps('#275454', 4), colSpan: 2 },
		],
		[embeddedTableProps('#550255', 3), embeddedTableProps('#296541', 1)],
	],
};

export const EmbeddedTableAsPropsWithHeight = ({
	width = 900,
	height = 400, // when height is given, all nested table will be dynamically adjusted in height.
	standalone = false,
}: {
	width: number;
	height?: number;
	standalone?: boolean;
}) => {
	useEffect(() => {
		const el = document.getElementById('embedded-table-as-height-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width, height, standalone });
		}
	}, [width, height, standalone]);

	return <div id='embedded-table-as-height-demo' />;
};
