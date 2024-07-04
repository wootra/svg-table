import SVGTable, { TableProps } from '@shjeon0730/svg-table';

const MARGIN_TOP = 10;
const MARGIN_RIGHT = 20;
const MARGIN_BOTTOM = 30;
const MARGIN_LEFT = 40;

const HORZ_GAP = 10;
const VERT_GAP = 20;

export const Margins = ({ width = 500 }: { width?: number }) => {
	const HALF = (width - MARGIN_LEFT - MARGIN_RIGHT - HORZ_GAP) / 2;
	const tableProps: Omit<TableProps, 'width'> = {
		style: {
			margins: [MARGIN_TOP, MARGIN_RIGHT, MARGIN_BOTTOM, MARGIN_LEFT],
			colGaps: HORZ_GAP,
			rowGaps: VERT_GAP,
			borderWidths: 1,
			borderColors: 'black',
		},
		rows: [
			{
				style: {
					height: 30,
				},
				cells: [
					{
						content: (
							<rect
								x={0}
								y={0}
								width={HALF}
								height={30}
								fill='red'
							/>
						),
					},
					{
						content: (
							<rect
								x={0}
								y={0}
								width={HALF}
								height={30}
								fill='blue'
							/>
						),
					},
				],
			},
			{
				cells: [
					{
						content: (
							<rect
								x={0}
								y={0}
								width={HALF}
								height={30}
								fill='pink'
							/>
						),
					},
					{
						content: (
							<rect
								x={0}
								y={0}
								width={HALF}
								height={30}
								fill='cyan'
							/>
						),
					},
				],
			},
			{
				cells: [
					{
						content: (
							<rect
								x={0}
								y={0}
								width={HALF}
								height={30}
								fill='orange'
							/>
						),
					},
					{
						content: (
							<rect
								x={0}
								y={0}
								width={HALF}
								height={30}
								fill='green'
							/>
						),
					},
				],
			},
		],
	};
	return <SVGTable {...tableProps} width={width} />;
};
