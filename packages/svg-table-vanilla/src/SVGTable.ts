import { TableProps } from './types';
import { SVGTableBase } from '../../svg-table-core/src/SVGTableBase';
import { svgConverter } from './svgConverter';

export const SVGTable = (tableProps: TableProps) => {
	const element = SVGTableBase<SVGElement | HTMLElement, 'text', 'g', 'svg'>(tableProps);
	return svgConverter(element);
};
