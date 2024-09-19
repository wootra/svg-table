import SVGTable, {
	CellProps,
	TableProps,
	TableInCellProps,
	RowProps,
	CellStyle,
	ContentAsFunc,
	simpleValue,
	createVanillaElement,
	createRenderedString,
} from '@shjeon0730/svg-table-vanilla';

const smile: ContentAsFunc = props => {
	return createVanillaElement(
		'g',
		{
			transform: `translate(${simpleValue(props.x - props.width / 2)} ${simpleValue(props.y - props.width / 2)})`,
			style: `font-size: ${simpleValue(props.width * 0.95)}px; color:#ff7556a9`,
		},
		createRenderedString(`
		<svg
				stroke='currentColor'
				fill='currentColor'
				stroke-width='0'
				viewBox='0 0 496 512'
				height='1em'
				width='1em'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z'></path>
			</svg>
	`)
	);
};

const DEFAULT_BG = '#23272f';
export const LogoDemo = ({
	width = 500,
	bgColor,
	className,
}: {
	width?: number;
	bgColor?: string | null;
	className?: string;
}) => {
	const noBorderTable = (rows: RowProps[]): TableInCellProps => {
		return {
			table: {
				style: {
					bgColor: (bgColor ?? bgColor === null) ? undefined : DEFAULT_BG,
					rowGaps: 1,
					colGaps: 1,
				},
				rows,
				defaultCellStyle: {
					borderWidths: 0,
				},
			},
		};
	};

	const FilledCell: CellProps = {
		style: {
			textColor: '#51e0cf',
			textStyle: { fontSize: 10 },
			bgColor: '#009dff',
		},
		className: 'filled-cell',
		content: 'v\n===@===\n|\n!',
	};
	const FilledCell1: CellProps = {
		style: {
			bgColor: '#33a100',
		},
		className: 'filled-cell-1',
		content: '',
	};
	const FilledCell2: CellProps = {
		style: {
			bgColor: '#ffae00',
			svgStyle: { pointerEvents: 'none' },
		},
		className: 'filled-cell-2',
		content: smile,
	};
	const FilledCellOverflow: CellProps = {
		style: {
			bgColor: '#f6fd36',
			svgStyle: { pointerEvents: 'none' },
			allowOverflow: true,
		},
		className: 'filled-cell-overflow',
		content: smile,
	};
	const EmptyCell: CellProps = { content: '' };
	const TopFill: CellProps = {
		className: 'top-fill',
		style: { bgColor: 'rgb(0,0,0,0.01)' },
		content: noBorderTable([[FilledCell], [EmptyCell]]),
	};
	const BottomFill: CellProps = {
		className: 'bottom-fill',
		style: { bgColor: 'rgb(0,0,0,0.01)' },
		content: noBorderTable([[EmptyCell], [FilledCell1]]),
	};
	const MiddleFill: CellProps = {
		className: 'middle-fill',
		style: { bgColor: 'rgb(0,0,0,0.01)' },
		content: noBorderTable([[EmptyCell], [FilledCell], [EmptyCell]]),
	};
	const leftTopEmpty: CellProps = {
		className: 'left-top-empty',
		style: { bgColor: 'rgb(0,0,0,0.01)' },
		content: noBorderTable([
			[EmptyCell, FilledCell2],
			[FilledCell1, FilledCell],
		]),
	};
	const leftBottomEmpty: CellProps = {
		className: 'left-bottom-empty',
		style: { bgColor: 'rgb(0,0,0,0.01)' },
		content: noBorderTable([
			[FilledCell, FilledCell1],
			[EmptyCell, FilledCell2],
		]),
	};
	const rightTopEmpty: CellProps = {
		className: 'right-top-empty',
		style: { bgColor: 'rgb(0,0,0,0.01)' },
		content: noBorderTable([
			[FilledCell, EmptyCell],
			[FilledCell2, FilledCell],
		]),
	};
	const rightBottomEmpty: CellProps = {
		className: 'right-bottom-empty',
		style: { bgColor: 'rgb(0,0,0,0.01)' },
		content: noBorderTable([
			[FilledCell, FilledCell2],
			[FilledCell1, EmptyCell],
		]),
	};
	const middleEmpty: CellProps = {
		className: 'middle-empty',
		content: noBorderTable([[FilledCell2, EmptyCell, FilledCell]]),
	};

	const O: CellProps = FilledCell1;
	const T: CellProps = TopFill;
	const o: CellProps = BottomFill;
	const H: CellProps = MiddleFill;
	const _: CellProps = EmptyCell;
	const oO: CellProps = leftTopEmpty;
	const OO: CellProps = FilledCell;
	const Oo: CellProps = rightTopEmpty;
	const oo: CellProps = BottomFill;
	const __: CellProps = EmptyCell;
	const TT: CellProps = TopFill;
	const TO: CellProps = leftBottomEmpty;
	const OT: CellProps = rightBottomEmpty;

	const OOO: CellProps = FilledCellOverflow;
	const O_O: CellProps = middleEmpty;
	const ___: CellProps = EmptyCell;

	const wordTableCellStyle: Partial<CellStyle> = {
		borderColors: '#989898',
		borderWidths: 1,
		borderPatterns: [4, 4],
	};

	const SVG: TableInCellProps = {
		table: {
			rowHeights: [1, 1, 1],
			defaultCellStyle: {
				...wordTableCellStyle,
			},
			columnWidths: [2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2], // make empty column smaller
			rows: [
				[oO, OO, TT, _, OO, ___, OO, _, oO, OO, OO],
				[TO, OO, Oo, _, TO, O_O, OT, _, OO, __, oo],
				[oo, OO, OT, _, __, OOO, __, _, TO, OO, OO],
			],
		},
	};

	const TABLE: TableInCellProps = {
		table: {
			defaultCellStyle: wordTableCellStyle,
			columnWidths: [3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 6, 3, 1, 6, 3],
			rows: [
				[O, O, O, _, __, OO, __, _, OO, T, Oo, _, O, _, _, O, T],
				[_, O, _, _, oO, TT, Oo, _, OO, H, Oo, _, O, _, _, O, O],
				[_, O, _, _, OO, TT, OO, _, OO, o, OT, _, O, O, _, O, o],
			],
		},
	};

	const tableProps: Omit<TableProps, 'width'> = {
		style: {
			rx: 20,
			ry: 20,
			rowGaps: 10,
			bgColor: (bgColor ?? bgColor === null) ? undefined : DEFAULT_BG,
		},
		defaultCellStyle: {
			borderWidths: 0,
			allowOverflow: true,
		},
		height: 300,
		className,
		rows: [[{ content: SVG }], [{ content: TABLE }]],
	};

	return SVGTable({ ...tableProps, width });
};
