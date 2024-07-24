import { TableProps, TableWithChildren } from './types';
import { SVGTableJSX } from './SVGTableJSX';
import { SVGTableRaw } from './SVGTableRaw';
import { FC } from 'react';

export const SVGTable: FC<TableProps | TableWithChildren> = tablePropsOrg => {
	if ((tablePropsOrg as TableWithChildren).children) {
		const { children, ...tableProps } = tablePropsOrg as TableWithChildren;
		return <SVGTableJSX {...tableProps}>{children}</SVGTableJSX>;
	}
	return <SVGTableRaw {...(tablePropsOrg as TableProps)} />;
};
