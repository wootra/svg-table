import SVGTable, { TableProps } from '@shjeon0730/svg-table-vanilla';

const tableProps: TableProps = {
	width: 500,
	height: 300,
	rowHeights: [1, 1, 1],
	defaultCellStyle: {
		borderWidths: 1,
		borderColors: 'red',
	},
	rows: [
		{
			style: {
				height: 200,
			},
			cells: ['header1', 'header2', 'header3'],
		},
		['cell1', 'cell2', 'cell3'],
		['cell1', 'cell2', 'cell3'],
	],
};

export const TableHeightOverrideHeight = () => {
	return (
		<div>
			<p>below green box is (600px x 400px) in size.</p>
			<p>And pink box is (500px x 300px) in size.</p>
			<p>SVG Table is width: 500, height: 300, borderWidths: 1, rowHeights: [1,1,1], borderColors: 'red'</p>
			<p>
				All rows are automatically adjusted(100 = 300/3) based on rowHeights as ratio, but first row has
				height:200 in style.{' '}
			</p>
			<p>since more specific style wins, the table height become 400</p>
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
					<div
						dangerouslySetInnerHTML={{
							__html: SVGTable({ ...tableProps }),
						}}
					/>
				</div>
			</div>
		</div>
	);
};
