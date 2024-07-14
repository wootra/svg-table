import { TableProps } from './types';
import { SVGTableBase } from '@shjeon0730/svg-table-core';
import { solidConverter } from './solidConverter';

export const SVGTable = (tableProps: TableProps) => {
	const element = SVGTableBase<Node, 'text', 'g', 'svg'>(tableProps);
	return solidConverter(element);
};
