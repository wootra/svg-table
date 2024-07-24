import { CellPropsWithChildren, TableWithChildren, RowPropsWithChildren, TableProps } from './types';
import { setProperty, hasProperty, deleteProperty } from 'dot-prop';
import React, { FC, Children, cloneElement } from 'react';
import { SVGTableRaw } from './SVGTableRaw';
import { SVGTable } from './SVGTable';

const tableMap: Record<string, TableProps> = {}; // cache

let idx = 0;

const hasNullInProps = (props: any) => {
	if (props === null) {
		return true;
	}

	if (typeof props === 'object') {
		if (Array.isArray(props)) {
			return props.some(hasNullInProps);
		}
		if (props.rows === null || props.cells === null || props.content === null || props.table === null) {
			return true;
		}
		if (props.rows) {
			return hasNullInProps(props.rows);
		} else if (props.cells) {
			return hasNullInProps(props.cells);
		} else if (props.content) {
			return hasNullInProps(props.content);
		} else if (props.table) {
			return hasNullInProps(props.table);
		}
	}
	return false;
};

const isTableReadyToRender = (tableId: string) => {
	const isMainTable = !tableId.includes('.');
	if (!tableMap[tableId]) return false;
	return isMainTable && !hasNullInProps(tableMap[tableId]);
};
export const SVGTableJSX: FC<TableWithChildren> = tablePropsWithChildren => {
	const { children, tableId = `table${idx++}`, ...tableProps } = tablePropsWithChildren;
	const isMainTable = !tableId.includes('.');
	let allKeys = Object.keys(tableMap);
	if (isMainTable && allKeys.length > 3) {
		while (allKeys.length > 3) {
			const first = allKeys.shift() as string;
			deleteProperty(tableMap, first);
		}
	}
	if (!hasProperty(tableMap, tableId)) {
		setProperty(tableMap, tableId, { ...tableProps, rows: new Array(Children.count(children)).fill(null) });
	}
	const newChildren = Children.map(children, (child, i) => {
		return cloneElement(child, {
			rowId: `${tableId}.rows[${i}]`,
		});
	});
	return (
		<>
			{newChildren}
			<RenderTable tableId={tableId} />
		</>
	);
};

const RenderTable = ({ tableId }: { tableId: string }) => {
	if (!isTableReadyToRender(tableId)) return null;
	return <SVGTableRaw className={tableId} {...(tableMap[tableId] as TableProps)} />;
};

export const SVGTableRow: FC<RowPropsWithChildren> = rowPropsWithChildren => {
	const { children, rowId, ...rowProps } = rowPropsWithChildren;
	if (!rowId) return null; // prevent rendering before passed from table
	if (!hasProperty(tableMap, rowId)) {
		setProperty(tableMap, rowId, { ...rowProps, cells: new Array(Children.count(children)).fill(null) });
	}
	const newChildren = Children.map(children, (child, i) => {
		return cloneElement(child, {
			cellId: `${rowId}.cells[${i}]`,
		});
	});
	return newChildren;
};

export const SVGTableCell: FC<CellPropsWithChildren> = cellPropsWithChildren => {
	const { children, cellId, ...cellProps } = cellPropsWithChildren;
	if (!cellId) return null;
	const childArray = Children.toArray(children);
	let hasTable = false;
	for (const child of childArray) {
		if (React.isValidElement(child) && child.type === SVGTable) {
			hasTable = true;
			if (childArray.length > 1) {
				console.error('nested table cannot be more than one in a cell. only nested table will be shown');
			}
		}
	}

	if (!hasProperty(tableMap, cellId)) {
		let content: any = null;
		if (!children) content = '';
		else if (React.isValidElement(children) && !hasTable) content = children;
		else if (React.isValidElement(children) && hasTable)
			content = null; // will be filled in the nested table.
		else if (typeof children !== 'object') content = children;
		setProperty(tableMap, cellId, { ...cellProps, content });
	}

	if (hasTable) {
		const newChildren = Children.map(children, (child, i) => {
			if (child && React.isValidElement(child) && child.type === SVGTable) {
				return cloneElement(child, {
					tableId: `${cellId}.content.table`,
				} as { tableId: string });
			}
			return null;
		});
		return newChildren;
	}
	return null;
};
