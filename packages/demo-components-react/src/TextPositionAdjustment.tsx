import SVGTable, { TableProps } from '../../svg-table-react-repo/src';

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		{
			cells: [
				{
					content: 'cx: -10, cy: -3',
					style: {
						cx: -10,
						cy: -3,
					},
				},
				{
					content: 'without cx,cy',
				},

				{
					content: 'cx: 10, cy: 3',
					style: {
						cx: 10,
						cy: 3,
					},
				},
			],
		},
	],
};

export const TextPositionAdjustment = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
