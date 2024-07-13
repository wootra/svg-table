import SVGTable, { TableProps } from '@shjeon0730/svg-table-react';

const tableProps: TableProps = {
	width: 500,
	height: 400,
	style: {
		borderWidths: 1,
		borderColors: 'red',
		margins: 20,
		colGaps: 10,
		rowGaps: 10,
	},
	defaultCellStyle: {
		borderWidths: 1,
		borderColors: 'red',
	},
	rows: [
		['header1', 'header2', 'header3'],
		['cell1', 'cell2', 'cell3'],
		['cell1', 'cell2', 'cell3'],
	],
};

export const TableHeight = () => {
	return (
		<div>
			<p>below green box is (600px x 400px) in size.</p>
			<p>And pink box is (500px x 300px) in size.</p>
			<p>
				SVG Table is width: 500, height: 400, borderWidths: 1, borderColors: 'red', margins: 20, colGaps: 10,
				rowGaps: 10
			</p>
			<p>All rows are automatically adjusted</p>
			<div
				style={{
					height: '400px',
					width: '600px',
					outline: '5px solid rgba(0, 255, 0, 0.5)',
				}}
			>
				<div
					style={{
						height: '300px',
						outline: '5px solid rgba(173, 76, 97, 0.5)',
						width: '500px',
					}}
				>
					<SVGTable {...tableProps} />
				</div>
			</div>
		</div>
	);
};
