import { TableProps } from './types';
import { SVGTableBase } from '@shjeon0730/svg-table-core';
import { svgConverter } from './svgConverter';

export const SVGTable = (tableProps: TableProps) => {
	const element = SVGTableBase<SVGElement | HTMLElement>(tableProps);
	return svgConverter(element);
};
