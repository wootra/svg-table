import { CellPropsAsObj, RowPropsAsObj, TableProps } from './types';
import { SVGTableBase } from '@shjeon0730/svg-table-core';
import { FC, ReactElement, Children, cloneElement, ReactNode } from 'react';
import { reactConverter } from './reactConverter';
type SVGRowType = ReactElement<RowPropsAsObj>;
type InnerSVGRowType = ReactElement<RowPropsAsObj & { __private_cellList: CellPropsAsObj[] }>;

export const SVGTable: FC<TableProps & { children?: SVGRowType[] | SVGRowType }> = tablePropsWithChildren => {
	const { children, __private_cellList, ...tableProps } = tablePropsWithChildren as typeof tablePropsWithChildren & {
		__private_cellList?: CellPropsAsObj[];
	};
	if (children) {
		if (Children.count(children) > 0) {
			tableProps.rows = [] as RowPropsAsObj[];
			const newChildren = Children.map(children as InnerSVGRowType[], child => {
				return cloneElement(child, {
					__private_rowList: tableProps.rows as RowPropsAsObj[],
				} as any);
			});
			if (__private_cellList) {
				__private_cellList.push({
					content: {
						table: tableProps,
					},
				});
			}
			return (
				<>
					{newChildren}
					{!__private_cellList && reactConverter(SVGTableBase<ReactElement>(tableProps))}
				</>
			);
		}
	} else if (!__private_cellList) {
		const element = SVGTableBase<ReactElement>(tableProps);
		return reactConverter(element);
	} else {
		if (__private_cellList) {
			__private_cellList.push({
				content: {
					table: tableProps,
				},
			});
		}
		return null;
	}
};

type SVGTableType = typeof SVGTable;

type SVGCellType = ReactElement<RowPropsAsObj>;
type InnerSVGCellType = ReactElement<RowPropsAsObj & { __private_cellList: CellPropsAsObj[] }>;

export const SVGTableRow: FC<RowPropsAsObj & { children: SVGCellType[] | SVGCellType }> = rowPropsWithChildren => {
	const { children, __private_rowList, ...rowProps } = rowPropsWithChildren as typeof rowPropsWithChildren & {
		__private_rowList: RowPropsAsObj[];
	};
	__private_rowList.push(rowProps as RowPropsAsObj);

	if (children) {
		if (Children.count(children) > 0) {
			rowProps.cells = [] as CellPropsAsObj[];
			const newChildren = Children.map(children as InnerSVGCellType[], child => {
				return cloneElement(child, {
					__private_cellList: rowProps.cells as CellPropsAsObj[],
				});
			});
			return <>{newChildren}</>;
		}
	} else {
		return null;
	}
};

export const SVGTableCell: FC<CellPropsAsObj & { children: ReactNode | SVGTableType }> = cellPropsWithChildren => {
	const { children, __private_cellList, ...cellProps } = cellPropsWithChildren as typeof cellPropsWithChildren & {
		__private_cellList: CellPropsAsObj[];
	};

	__private_cellList.push(cellProps as CellPropsAsObj);

	if (children) {
		const count = Children.count(children);
		if (count > 0) {
			const newChildren = Children.map(children as InnerSVGCellType[], child => {
				if (typeof child === 'object') {
					// expecting react element
					return cloneElement(child, {
						__private_cellList, // just passing as it is
					});
				} else {
					return child; // expecting string
				}
			});
			if (count > 1) {
				// multiple
				cellProps.content = <>{newChildren}</>; //wrap array with Fragment
			} else {
				cellProps.content = newChildren[0]; // unwrap array
			}
		}
	}
	return null;
};
