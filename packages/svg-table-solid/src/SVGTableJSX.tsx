import { JSX } from 'solid-js';
import { children as Children, useContext, createSignal, createEffect } from 'solid-js';
import { SVGTableRaw } from './SVGTableRaw';
import {
	CellPropsAsObj,
	CellPropsWithChildren,
	RowPropsAsObj,
	RowPropsWithChildren,
	TablePropsWithChildren,
} from './types';

export const SVGTableJSX = (tablePropsWithChildren: TablePropsWithChildren) => {
	const { children, ...tableProps } = tablePropsWithChildren;
	const rows = Children(() => children).toArray();
	const tableData = { ...tableProps, rows: rows as unknown as RowPropsAsObj[] };
	return <SVGTableRaw {...tableData} />;
};

export const NestedSVGTable = (tablePropsWithChildren: TablePropsWithChildren): JSX.Element => {
	const { children, ...tableProps } = tablePropsWithChildren;
	const rows = Children(() => children).toArray();
	const tableData = { ...tableProps, rows: rows as unknown as RowPropsAsObj[] };
	return { table: tableData } as unknown as JSX.Element;
};

export const SVGTableRow = (rowPropsWithChildren: RowPropsWithChildren): JSX.Element => {
	const { children, ...rowProps } = rowPropsWithChildren;
	const cells = Children(() => children).toArray();
	const rowData = { ...rowProps, cells: cells as unknown as CellPropsAsObj[] } as RowPropsAsObj;
	return rowData as unknown as JSX.Element;
};

export const SVGTableCell = (cellPropsWithChildren: CellPropsWithChildren): JSX.Element => {
	const { children, ...cellProps } = cellPropsWithChildren;
	const contentArr = Children(() => children).toArray();
	if (contentArr.length > 1) {
		console.error(
			'SVGTableCell cannot have multiple children Node. use only one node. possibly SVGTable component for nested table. rest of the item will be ignored.',
			contentArr
		);
	}
	const content = contentArr[0] ?? '';

	const cellData = { ...cellProps, content: content as unknown as JSX.Element } as CellPropsAsObj;
	return cellData as unknown as JSX.Element;
};
