import { CellPropsWithChildren, TableWithChildren, RowPropsWithChildren, TableProps } from './types';
import { FC, Children, ReactElement } from 'react';
import { SVGTableRaw } from './SVGTableRaw';

const DataTransfer = (props: { data: any }) => {
	if (!props.data) {
		throw new Error('Data Transfoer need data props');
	}
	return null;
};

export const SVGTableJSX: FC<TableWithChildren> = tablePropsWithChildren => {
	const {
		children,
		nested = false,
		...tableProps
	} = tablePropsWithChildren as TableWithChildren & { nested?: boolean };
	const newTableProps: TableProps = {
		...tableProps,
		rows: Children.map(children, row => {
			const { ...rowProps } = (row as ReactElement).props;
			const rendered = row;
			const { type: rowFunc } = rendered;
			if (typeof rowFunc !== 'function' || rowFunc.name !== 'SVGTableRow') {
				throw new Error('SVGTable: child should be SVGTableRow');
			}

			const rowData = (rowFunc as Function)(rowProps);
			return {
				...rowProps,
				...rowData.props.data,
			};
		}),
	};

	return nested ? (
		<DataTransfer data={newTableProps} />
	) : (
		<>
			<SVGTableRaw {...newTableProps} />
		</>
	);
};

export const SVGTableRow: FC<RowPropsWithChildren> = rowPropsWithChildren => {
	const { children, ...rowProps } = rowPropsWithChildren;
	const newRows = {
		...rowProps,
		cells: Children.map(children, child => {
			const typeFunc = child.type;
			if (typeof typeFunc !== 'function' || typeFunc.name !== 'SVGTableCell') {
				throw new Error('SVGTableRow: child should be SVGTableCell');
			}
			const cellRet = (typeFunc as Function)(child.props);
			const { data } = cellRet.props;
			return {
				...data,
			};
		}),
	};
	return <DataTransfer data={newRows} />;
};

export const SVGTableCell = (cellPropsWithChildren: CellPropsWithChildren) => {
	const { children, ...cellProps } = cellPropsWithChildren as any;
	const contentArr = Children.map(children, child => {
		if (typeof child.type !== 'function' && child.type?.name !== 'SVGTable') {
			return {
				...cellProps,
				content: child,
			};
		}
		const renderedChild = child.type(child.props);
		const typeFunc = renderedChild.type;
		if (typeof typeFunc !== 'function' || typeFunc.name !== 'SVGTableJSX') {
			return {
				...cellProps,
				content: child,
			};
		}
		const renderedSvgTable = typeFunc({ ...renderedChild.props, nested: true });
		return {
			...cellProps,
			content: {
				table: {
					...renderedSvgTable.props.data,
				},
			},
		};
	});
	return <DataTransfer data={contentArr[0]} />;
};
