import SVGTable, {
	TableProps,
	ContentAsFunc,
	SVGRenderElement,
	createVanillaElement,
} from '@shjeon0730/svg-table-vanilla';

const rect: ContentAsFunc = props => {
	return createVanillaElement(
		'g',
		{},
		createVanillaElement('rect', { x: props.width - 50, y: 0, width: 50, height: props.height, fill: '#4773bb' }),
		createVanillaElement('rect', { x: 0, y: 0, width: 50, height: props.height, fill: '#a75252' }),
		createVanillaElement('rect', { x: props.x - 25, y: 0, width: 50, height: props.height, fill: '#4a7e2e' }),
		createVanillaElement('text', { ...props.textStyle, x: props.x, y: props.y }, 'This is Added Element')
	) as SVGRenderElement;
};
const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['Header 1', 'Header 2', 'Header3'],
		[{ content: rect }, { content: 'Row Span', rowSpan: 2 }, 'Row 1, Cell 3'],
		['Row 2, Cell 1', 'Row 2, Cell 3'],
	],
};

export const BasicWithElement = ({ width = 500 }: { width?: number }) => {
	return SVGTable({ ...tableProps, width });
};
