import SVGTable, { TableProps } from 'svg-table';

const OnlyTableBolder = ({ width = 500 }: { width?: number }) => {
	const tableProps: TableProps = {
		width: width,
		defaultCellStyle: {
			borderWidths: 0,
		},
		style: {
			borderWidths: 1,
		},
		rows: [
			{
				cells: [
					{
						content: 'Header 1',
					},
					{
						content: 'Header 2',
						colSpan: 2,
					},
				],
			},
			{
				cells: [
					{ content: 'test' },
					{ content: 'Row 1, Cell 2', rowSpan: 2 },
					{ content: 'Row 1, Cell 3' },
				],
			},
			{
				cells: [
					{ content: 'Row 2, Cell 1' },
					{ content: 'Row 2, Cell 3' },
				],
			},
		],
	};

	return <SVGTable {...tableProps} />;
};

export default OnlyTableBolder;
