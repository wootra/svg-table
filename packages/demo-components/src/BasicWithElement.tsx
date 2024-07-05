import SVGTable, { TableProps } from '@shjeon0730/svg-table';

const Rect = () => {
	return (
		<g>
			<rect x={10} y={5} width={100} height={15} fill='cyan' />
			<text x={10} y={15}>
				hi
			</text>
		</g>
	);
};
const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['Header 1', 'Header 2', 'Header3'],
		[
			{ content: <Rect /> },
			{ content: 'Row Span', rowSpan: 2 },
			'Row 1, Cell 3',
		],
		['Row 2, Cell 1', 'Row 2, Cell 3'],
	],
};

export const BasicWithElement = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
