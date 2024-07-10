import SVGTable, {
	TableProps,
	ContentProps,
	SVGRenderElement,
	createVanillaElement,
} from '@shjeon0730/svg-table-vanilla';

const rect = (props: ContentProps) => {
	return createVanillaElement(
		'g',
		{},
		createVanillaElement('rect', { x: props.width - 50, y: 0, width: 50, height: props.height, fill: '#4773bb' }),
		createVanillaElement('rect', { x: 0, y: 0, width: 50, height: props.height, fill: '#a75252' }),
		createVanillaElement('rect', { x: props.x - 25, y: 0, width: 50, height: props.height, fill: '#4a7e2e' }),
		createVanillaElement(
			'text',
			{ x: props.x, y: props.y, dominantBaseline: 'middle', textAnchor: 'middle' },
			'This is Added Element'
		)
	) as SVGRenderElement;
};
const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['Header 1', 'Header 2', 'Header3'],
		[{ content: rect }, { content: 'Row Span', rowSpan: 2 }, 'Row 1, Cell 3'],
		['Row 2, Cell 1', 'Row 2, Cell 3'],
	],
};

import { useEffect } from 'react';

export const BasicWithElement = ({ width = 500 }: { width?: number }) => {
	useEffect(() => {
		const el = document.getElementById('basic-with-element-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width });
		}
	}, [width]);

	return <div id='basic-with-element-demo' />;
};
