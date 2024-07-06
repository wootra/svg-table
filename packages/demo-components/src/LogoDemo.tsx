import SVGTable, {
	CellProps,
	TableProps,
	TableInCellProps,
	RowProps,
	CellStyle,
	ContentAsFunc,
} from '@shjeon0730/svg-table';
import { useMemo } from 'react';
import { FaSmile } from 'react-icons/fa';
const DEFAULT_BG = '#23272f';
export const LogoDemo = ({
	width = 500,
	bgColor,
}: {
	width?: number;
	bgColor?: string | null;
}) => {
	const tableProps = useMemo(() => {
		const noBorderTable = (
			rows: RowProps[],
			className: string
		): TableInCellProps => {
			return {
				table: {
					className,
					style: {
						bgColor:
							bgColor ?? bgColor === null
								? undefined
								: DEFAULT_BG,
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
		const Smile: ContentAsFunc = props => {
			return (
				<g
					transform={`translate(${props.x - props.width / 2},${props.y - props.width / 2})`}
					style={{ fontSize: props.width * 0.95, color: '#ff7556a9' }}
				>
					<FaSmile />
				</g>
			);
		};

		const FilledCell: CellProps = {
			style: {
				textColor: '#51e0cf',
				textStyle: { fontSize: 10 },
				bgColor: '#009dff',
			},
			content: '!!',
		};
		const FilledCell1: CellProps = {
			style: { bgColor: '#33a100' },
			content: '',
		};
		const FilledCell2: CellProps = {
			style: { bgColor: '#ffae00', svgStyle: { pointerEvents: 'none' } },
			content: Smile,
		};
		const EmptyCell: CellProps = { content: '' };
		const TopFill: CellProps = {
			content: noBorderTable([[FilledCell], [EmptyCell]], 'top-fill'),
		};
		const BottomFill: CellProps = {
			content: noBorderTable([[EmptyCell], [FilledCell1]], 'bottom-fill'),
		};
		const MiddleFill: CellProps = {
			content: noBorderTable(
				[[EmptyCell], [FilledCell], [EmptyCell]],
				'middle-fill'
			),
		};
		const leftTopEmpty: CellProps = {
			content: noBorderTable(
				[
					[EmptyCell, FilledCell2],
					[FilledCell1, FilledCell],
				],
				'left-top-empty'
			),
		};
		const leftBottomEmpty: CellProps = {
			content: noBorderTable(
				[
					[FilledCell, FilledCell1],
					[EmptyCell, FilledCell2],
				],
				'left-bottom-empty'
			),
		};
		const rightTopEmpty: CellProps = {
			content: noBorderTable(
				[
					[FilledCell, EmptyCell],
					[FilledCell2, FilledCell],
				],
				'right-top-empty'
			),
		};
		const rightBottomEmpty: CellProps = {
			content: noBorderTable(
				[
					[FilledCell, FilledCell2],
					[FilledCell1, EmptyCell],
				],
				'right-bottom-empty'
			),
		};
		const middleEmpty: CellProps = {
			content: noBorderTable(
				[[FilledCell2, EmptyCell, FilledCell]],
				'middle-empty'
			),
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

		const OOO: CellProps = FilledCell2;
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
				defaultCellStyle: wordTableCellStyle,
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
				rows: [
					[O, O, O, _, __, OO, __, _, OO, T, Oo, _, O, _, _, O, T],
					[_, O, _, _, oO, TT, Oo, _, OO, H, Oo, _, O, _, _, O, O],
					[_, O, _, _, OO, TT, OO, _, OO, o, OT, _, O, O, _, O, o],
				],
			},
		};

		const tableProps: Omit<TableProps, 'width'> = {
			style: {
				rowGaps: 10,
				bgColor: bgColor ?? bgColor === null ? undefined : DEFAULT_BG,
			},
			defaultCellStyle: {
				borderWidths: 0,
			},
			height: 300,
			className: 'logo-demo',
			rows: [[{ content: SVG }], [{ content: TABLE }]],
		};

		return tableProps;
	}, []);
	return <SVGTable {...tableProps} width={width} />;
};
