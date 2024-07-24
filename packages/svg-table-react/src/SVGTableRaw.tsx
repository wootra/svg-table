import { TableProps } from './types';
import { SVGTableBase } from '@shjeon0730/svg-table-core';
import { FC, ReactElement } from 'react';
import { reactConverter } from './reactConverter';

export const SVGTableRaw: FC<TableProps> = tableProps => {
	const element = SVGTableBase<ReactElement>(tableProps);
	return reactConverter(element);
};
