import { TableProps } from './types';
import { SVGTableBase } from '@shjeon0730/svg-table-core';
import { FC, ReactElement } from 'react';
import { reactConverter } from './reactConverter';

export const SVGTable: FC<TableProps> = tableProps => {
	const element = SVGTableBase<ReactElement, SVGTextElement, SVGGElement, SVGSVGElement>(tableProps);
	return reactConverter(element);
};
