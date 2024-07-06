import SVGTable, {
	CellProps,
	TableProps,
	TableInCellProps,
	RowProps,
	CellStyle,
	ContentAsFunc,
} from '@shjeon0730/svg-table';
import { FaSmile } from 'react-icons/fa';
const noBorderTable = (rows: RowProps[]): TableInCellProps => {
	return {
		table: {
			style: { rowGaps: 1, colGaps: 1 },
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
	style: { bgColor: '#ffae00' },
	content: Smile,
};
const EmptyCell: CellProps = { content: '' };
const TopFill: CellProps = {
	content: noBorderTable([[FilledCell], [EmptyCell]]),
};
const BottomFill: CellProps = {
	content: noBorderTable([[EmptyCell], [FilledCell1]]),
};
const MiddleFill: CellProps = {
	content: noBorderTable([[EmptyCell], [FilledCell], [EmptyCell]]),
};
const leftTopEmpty: CellProps = {
	content: noBorderTable([
		[EmptyCell, FilledCell2],
		[FilledCell1, FilledCell],
	]),
};
const leftBottomEmpty: CellProps = {
	content: noBorderTable([
		[FilledCell, FilledCell1],
		[EmptyCell, FilledCell2],
	]),
};
const rightTopEmpty: CellProps = {
	content: noBorderTable([
		[FilledCell, EmptyCell],
		[FilledCell2, FilledCell],
	]),
};
const rightBottomEmpty: CellProps = {
	content: noBorderTable([
		[FilledCell, FilledCell2],
		[FilledCell1, EmptyCell],
	]),
};
const middleEmpty: CellProps = {
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
	},
	defaultCellStyle: {
		borderWidths: 0,
	},
	height: 300,
	rows: [[{ content: SVG }], [{ content: TABLE }]],
};

export const LogoDemo = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
