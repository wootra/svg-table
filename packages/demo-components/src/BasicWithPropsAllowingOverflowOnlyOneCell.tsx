import SVGTable, { CellProps, TableProps } from '@shjeon0730/svg-table';

const LONG_TEXT = 'This should overflow Because it is so long!!';

const overflowedCell: CellProps = {
	style: {
		allowOverflow: true,
	},
	content: LONG_TEXT,
};

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		[overflowedCell, 'Cell', 'Cell'],
		['Cell', LONG_TEXT, 'Cell'],
		['Cell', 'Cell', LONG_TEXT],
	],
};

export const BasicWithPropsAllowingOverflowOnlyOneCell = ({
	width = 500,
}: {
	width?: number;
}) => {
	return <SVGTable {...tableProps} width={width} />;
};
