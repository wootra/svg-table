import { TableProps } from './types';
import { SVGTableBase } from '@shjeon0730/svg-table-core/SVGTableBase';
import { solidConverter } from './solidConverter';

export const SVGTable = (tableProps: TableProps) => {
	const element = SVGTableBase<Node, 'text', 'g', 'svg'>(tableProps);
	// return children(() => solidConverter(element));
	return solidConverter(element);
};
