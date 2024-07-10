import SVGTable, { ContentAsFunc, SVGRenderElement, TableProps } from '@shjeon0730/svg-table-solid';

// this props will have an extensive amount of attributes that you can use for customization
const adjustedText: ContentAsFunc = props => {
	return (
		<g>
			<rect x={30} y={0} width={props.width - 60} height={5} fill='#4773bb' />

			<text x={props.x} y={props.y + 5} text-anchor='middle' dominant-baseline='middle'>
				This is Added Element
			</text>
		</g>
	) as SVGRenderElement;
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
