import SVGTable, { TableProps } from '@shjeon0730/svg-table-react';

const MARGIN_TOP = 10;
const MARGIN_RIGHT = 20;
const MARGIN_BOTTOM = 30;
const MARGIN_LEFT = 40;

const HORZ_GAP = 10;
const VERT_GAP = 20;
const rectCell = (width: number, fill: string) => ({
	content: <rect x={0} y={0} width={width} height={30} fill={fill} />,
});

export const Margins = ({ width = 500 }: { width?: number }) => {
	const HALF = (width - MARGIN_LEFT - MARGIN_RIGHT - HORZ_GAP) / 2;
	const tableProps: Omit<TableProps, 'width'> = {
		style: {
			margins: [MARGIN_TOP, MARGIN_RIGHT, MARGIN_BOTTOM, MARGIN_LEFT],
			colGaps: HORZ_GAP,
			rowGaps: VERT_GAP,
			borderWidths: 1,
		},
		defaultRowStyle: {
			height: 30,
		},
		rows: [
			[rectCell(HALF, '#a76767'), rectCell(HALF, '#59597c')],
			[rectCell(HALF, '#675558'), rectCell(HALF, '#3e5656')],
			[rectCell(HALF, '#766850'), rectCell(HALF, '#304830')],
		],
	};
	return <SVGTable {...tableProps} width={width} />;
};
