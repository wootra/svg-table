import SVGTable, { TableProps } from '@shjeon0730/svg-table';
const Gradients = () => {
	return (
		<>
			<linearGradient id='red-to-blue' x1='0' x2='0' y1='0' y2='1'>
				<stop offset='0%' stopColor='red' />
				<stop offset='100%' stopColor='blue' />
			</linearGradient>
			<linearGradient id='cyan-to-white' x1='0' x2='0' y1='0' y2='1'>
				<stop offset='0%' stopColor='cyan' />
				<stop offset='100%' stopColor='white' />
			</linearGradient>
		</>
	);
};
const tableProps: Omit<TableProps, 'width'> = {
	defs: <Gradients />,
	rows: [
		{
			cells: [
				{
					content: 'Header 1',

					style: {
						textColor: 'blue',
					},
				},
				{
					content: 'Header 2',
					colSpan: 2,
					style: {
						bgColor: 'orange',
						textColor: 'white',
					},
				},
			],
		},
		{
			cells: [
				{ content: 'test' },
				{
					content: 'Row 1, Cell 2',
					rowSpan: 2,
					style: {
						bgColor: 'url(#red-to-blue)',
						textColor: 'white',
					},
				},
				{
					content: 'Row 1, Cell 3',
					style: {
						bgColor: 'url(#cyan-to-white)',
					},
				},
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};
export const BgColorAndTextColor = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};