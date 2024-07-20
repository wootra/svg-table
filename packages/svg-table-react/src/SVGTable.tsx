import { CellPropsAsObj, RowPropsAsObj, TableProps } from './types';
import { SVGTableBase } from '@shjeon0730/svg-table-core';
import { FC, ReactElement, Children, cloneElement, ReactNode } from 'react';
import { reactConverter } from './reactConverter';
type TablePrivateProps = { idx: number; cellsMap?: Record<number, CellPropsAsObj> };
type InnerSVGRowType = ReactElement<RowPropsAsObj & TablePrivateProps>;

// assign cellsMap to cells and assign it in rowProps
const convertCells = (rowProps: RowPropsWithChildren) => {
	const {
		children,
		cellsMap = {} as Record<number, CellPropsAsObj>,
		cells: cellsFromProps,
		...rowPropsWithoutChildren
	} = rowProps as RowPropsWithChildren & { cells: CellPropsAsObj[] };
	const cells =
		cellsFromProps ??
		new Array(Children.count(children)).fill(null).map((_, idx) => {
			const cell = (cellsMap?.[idx] ?? {}) as CellPropsAsObj;
			return cell;
		});
	return {
		...rowPropsWithoutChildren,
		cells,
	} as RowPropsAsObj;
};

// convert rowsMap to rows and assign it in tableProps
const convertRows = (tablePropsWidthChildren: TableWithChildren) => {
	const { children, rowsMap, ...tableProps } = tablePropsWidthChildren;
	const rows = new Array(Children.count(children)).fill(null).map((_, idx) => {
		const row = rowsMap?.[idx] ?? {};
		return convertCells(row as RowPropsWithChildren);
	});
	const tablePropsWithRows = { ...tableProps, rows } as TableProps;
	return tablePropsWithRows;
};

const SVGTableRender: FC<TableWithChildren> = (tablePropsWidthChildren: TableWithChildren) => {
	const tableProps = convertRows(tablePropsWidthChildren);
	const element = SVGTableBase<ReactElement>(tableProps);
	return reactConverter(element);
};

type TableWithoutRows = Omit<TableProps, 'rows'>;
type SVGRowType = ReactElement<RowPropsAsObj>;
export type TableWithChildren = TableWithoutRows & {
	rowsMap?: Record<number, RowPropsWithChildren>;
	children: SVGRowType[] | SVGRowType;
};
export type TableJsxProps = TableProps | TableWithChildren;

export const SVGTable: FC<TableJsxProps> = tablePropsWithChildren => {
	const { children, cellsMap, idx, ...tableProps } = tablePropsWithChildren as TableWithChildren & TablePrivateProps;

	if ((tablePropsWithChildren as TableWithChildren).children) {
		if (Children.count(children) > 0) {
			if (!tableProps.rowsMap) {
				tableProps.rowsMap = {} as Record<number, RowPropsWithChildren>;
			}
			const newChildren = Children.map(children as InnerSVGRowType[], (child, i) => {
				return cloneElement(child, {
					rowsMap: tableProps.rowsMap as Record<number, RowPropsWithChildren>,
					idx: i,
				} as RowPrivateProps);
			});
			if (cellsMap) {
				cellsMap[idx] = {
					content: {
						table: convertRows(tablePropsWithChildren as TableWithChildren),
					},
				};
			}

			return (
				<>
					{newChildren}
					{!cellsMap && <SVGTableRender {...tableProps} children={children} />}
				</>
			);
		}
	} else if (!cellsMap) {
		const element = SVGTableBase<ReactElement>(tableProps as TableProps);
		const ret = reactConverter(element);
		return ret;
	} else {
		if (cellsMap) {
			cellsMap[idx] = {
				content: {
					table: convertRows(tablePropsWithChildren as TableWithChildren),
				},
			};
		}
		return null;
	}
};

type SVGTableType = typeof SVGTable;
type RowPrivateProps = { rowsMap: Record<number, RowPropsWithChildren>; idx: number };
type InnerSVGCellType = ReactElement<CellPropsAsObj & RowPrivateProps>;
type RowPropsWithoutCells = Omit<RowPropsAsObj, 'cells'>;
type SVGCellType = ReactElement<CellPropsAsObj>;
type RowPropsWithChildren = RowPropsWithoutCells & {
	cellsMap: Record<number, CellPropsAsObj>;
	idx: number;
	children: SVGCellType[] | SVGCellType;
};
type RowJsxProps = RowPropsAsObj | RowPropsWithChildren;

export const SVGTableRow: FC<RowJsxProps> = rowPropsWithChildren => {
	const {
		children,
		rowsMap = {} as Record<number, RowPropsWithChildren>,
		idx,
		...rowProps
	} = rowPropsWithChildren as RowPropsWithChildren & RowPrivateProps;

	rowsMap[idx] = { ...rowProps, children } as RowPropsWithChildren;
	if (children) {
		if (Children.count(children) > 0) {
			rowsMap[idx].cellsMap = rowsMap[idx].cellsMap ?? ({} as Record<number, CellPropsAsObj>);

			const newChildren = Children.map(children as InnerSVGCellType[], (child, i) => {
				return cloneElement(child, {
					idx: i,
					cellsMap: rowsMap[idx]?.cellsMap,
				} as CellPrivateProps);
			});
			return <>{newChildren}</>;
		}
	} else {
		return null;
	}
};

type CellPrivateProps = { cellsMap: Record<number, CellPropsAsObj>; idx: number };
type CellWithoutContent = Omit<CellPropsAsObj, 'content'>;
type CellWithChildren = CellWithoutContent & { children: ReactNode | SVGTableType } & CellPrivateProps;
type CellJsxProps = CellPropsAsObj | CellWithChildren;
export const SVGTableCell: FC<CellJsxProps> = cellPropsWithChildren => {
	const {
		children,
		cellsMap = {} as Record<number, CellPropsAsObj>,
		idx,
		...cellProps
	} = cellPropsWithChildren as CellWithChildren & CellPrivateProps;

	cellsMap[idx] = { ...cellProps } as CellPropsAsObj;
	if (children) {
		const count = Children.count(children);
		if (count > 0) {
			const newChildren = Children.map(children as InnerSVGCellType[], (child, i) => {
				if (typeof child === 'object') {
					// expecting react element
					return cloneElement(child, {
						idx: i,
						cellsMap, // just passing as it is
					} as TablePrivateProps);
				} else {
					return child; // expecting string
				}
			});
			if (count > 1) {
				// multiple
				cellsMap[idx].content = <>{newChildren}</>; //wrap array with Fragment
			} else {
				cellsMap[idx].content = newChildren[0]; // unwrap array
			}
		}
	}
	return null;
};
