import SVGTable, { TableProps } from '../../svg-table-react-repo/src';

const tableProps: Omit<TableProps, 'width'> = {
	style: {
		colGaps: 4,
		rowGaps: 10,
	},
	rows: [
		[
			'Cell 1',
			{
				content: 'Cell 2',
				rowSpan: 2,
				style: {
					rotateCenterProps: {
						style: {
							rotate: '90deg',
						},
					},
				},
			},
			'Cell 3',
		],
		['Cell1', 'Cell 3'],
	],
};
export const Rotate = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
