import SVGTable, {
	ContentAsFunc,
	createVanillaElement,
	SVGRenderElement,
	TableProps,
} from '@shjeon0730/svg-table-vanilla';

// this props will have an extensive amount of attributes that you can use for customization
const adjustedText: ContentAsFunc = props => {
	return createVanillaElement(
		'g',
		{},
		createVanillaElement('rect', { x: 30, y: 0, width: props.width - 60, height: 5, fill: '#4773bb' }),
		createVanillaElement(
			'text',
			{ x: props.x, y: props.y + 5, 'text-anchor': 'middle', 'dominant-baseline': 'middle' },
			'This is Added Element'
		)
	) as SVGRenderElement;
};

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		['Header 1', 'Header 2'],
		[{ content: adjustedText }, 'Cell'],
	],
};

import { useEffect } from 'react';

export const BasicWithProps = ({ width = 500 }: { width?: number }) => {
	useEffect(() => {
		const el = document.getElementById('basic-with-props-demo');
		if (el) {
			el.innerHTML = SVGTable({ ...tableProps, width });
		}
	}, [width]);

	return <div id='basic-with-props-demo' />;
};
