import { ElementType, TableProps } from './types';
import { SVGTableBase } from '@shjeon0730/svg-table-core';
import { solidConverter } from './solidConverter';

export const SVGTableRaw = (tableProps: TableProps) => {
	const element = SVGTableBase<ElementType>(tableProps);
	return solidConverter(element);
};
