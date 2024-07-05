import SVGTable, { ContentAsFunc, TableProps } from '@shjeon0730/svg-table';

// this props will have an extensive amount of attributes that you can use for customization
const adjustedText: ContentAsFunc = props => {
	return (
		<text x={props.x + 10} y={props.y + 10}>
			Adjusted Text
		</text>
	);
};

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['Header 1', 'Header 2'],
		[{ content: adjustedText }, 'Cell'],
	],
};

export const BasicWithProps = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
