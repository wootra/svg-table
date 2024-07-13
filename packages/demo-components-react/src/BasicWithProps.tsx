import SVGTable, { ContentAsFunc, TableProps } from '../../svg-table-react-repo/src';

// this props will have an extensive amount of attributes that you can use for customization
const adjustedText: ContentAsFunc = props => {
	return (
		<g>
			<rect x={30} y={0} width={props.width - 60} height={5} fill='#4773bb' />

			<text {...props.textStyle} x={props.x} y={props.y + 5}>
				This is Added Element
			</text>
		</g>
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
