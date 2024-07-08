import SVGTable, {
	CellProps,
	TableProps,
	TableInCellProps,
	RowProps,
	CellStyle,
	ContentAsFunc,
	simpleValue,
} from '@shjeon0730/svg-table';
import React, { useMemo } from 'react';
import { FaSmile } from 'react-icons/fa';

const Smile: ContentAsFunc = props => {
	return (
		<g
			transform={`translate(${simpleValue(props.x - props.width / 2)},${simpleValue(props.y - props.width / 2)})`}
			style={{
				fontSize: simpleValue(props.width * 0.95),
				color: '#ff7556a9',
			}}
		>
			<FaSmile />
		</g>
	);
};

const DEFAULT_BG = '#23272f';
export const LogoDemo = React.memo(
	({
		width = 500,
		bgColor,
		className,
	}: {
		width?: number;
		bgColor?: string | null;
		className?: string;
	}) => {
		const tableProps = useMemo(() => {
			const noBorderTable = (rows: RowProps[]): TableInCellProps => {
				return {
					table: {
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
				content: Smile,
			};
			const FilledCellOverflow: CellProps = {
				style: {
					bgColor: '#f6fd36',
					svgStyle: { pointerEvents: 'none' },
					allowOverflow: true,
				},
				className: 'filled-cell-overflow',
				content: Smile,
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
				content: noBorderTable([
					[EmptyCell],
					[FilledCell],
					[EmptyCell],
				]),
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
					columnWidths: [
						3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 6, 3, 1, 6, 3,
					],
					rows: [
						[
							O,
							O,
							O,
							_,
							__,
							OO,
							__,
							_,
							OO,
							T,
							Oo,
							_,
							O,
							_,
							_,
							O,
							T,
						],
						[
							_,
							O,
							_,
							_,
							oO,
							TT,
							Oo,
							_,
							OO,
							H,
							Oo,
							_,
							O,
							_,
							_,
							O,
							O,
						],
						[
							_,
							O,
							_,
							_,
							OO,
							TT,
							OO,
							_,
							OO,
							o,
							OT,
							_,
							O,
							O,
							_,
							O,
							o,
						],
					],
				},
			};

			const tableProps: Omit<TableProps, 'width'> = {
				style: {
					rowGaps: 10,
					bgColor:
						bgColor ?? bgColor === null ? undefined : DEFAULT_BG,
				},
				defaultCellStyle: {
					borderWidths: 0,
					allowOverflow: true,
				},
				height: 300,
				className,
				rows: [[{ content: SVG }], [{ content: TABLE }]],
			};

			return tableProps;
		}, []);
		return <SVGTable {...tableProps} width={width} />;
	}
);
