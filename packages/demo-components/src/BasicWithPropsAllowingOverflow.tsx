import SVGTable, { TableProps } from '@shjeon0730/svg-table';

// this props will have an extensive amount of attributes that you can use for customization

const overflowedCell = 'This should overflow Because it is so long!!';

const tableProps: Omit<TableProps, 'width'> = {
	defaultCellStyle: {
		allowOverflow: true,
	},
	rows: [
		[overflowedCell, 'Cell', 'Cell'],
		['Cell', overflowedCell, 'Cell'],
		['Cell', 'Cell', overflowedCell],
	],
};

export const BasicWithPropsAllowingOverflow = ({
	width = 500,
}: {
	width?: number;
}) => {
	return <SVGTable {...tableProps} width={width} />;
};
