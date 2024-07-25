import { type JSX } from 'solid-js';
import { TableProps } from './types';
import { SVGTableJSX } from './SVGTableJSX';
import { SVGTableRaw } from './SVGTableRaw';
type PropsWithChildren = Omit<TableProps, 'rows'> & { children: JSX.Element[] };

export const SVGTable = (tableProps: TableProps | PropsWithChildren): JSX.Element => {
	if ((tableProps as PropsWithChildren).children) {
		return <SVGTableJSX {...(tableProps as PropsWithChildren)} />;
	} else {
		return SVGTableRaw(tableProps as TableProps);
	}
};
