import SVGTable, { TableProps } from '@shjeon0730/svg-table-react';
import { SVGTableCell, SVGTableRow } from '../../svg-table-react/src/SVGTable';

const tableProps: Omit<TableProps, 'width'> = {
	rows: [
		{
			cells: [
				{
					content: 'Header 1',
				},
				{
					content: 'Col Span',
					colSpan: 2,
				},
			],
		},
		{
			cells: [
				{ content: 'Row 1, Cell 1' },
				{ content: 'Row Span\nmultiline\nsupport', rowSpan: 2 },
				{ content: 'Row 1, Cell 3' },
			],
		},
		{
			cells: [{ content: 'Row 2, Cell 1' }, { content: 'Row 2, Cell 3' }],
		},
	],
};

export const BasicDemoJSX = ({ width = 500 }: { width?: number }) => {
	return (
		<SVGTable width={width}>
			<SVGTableRow>
				<SVGTableCell>Header 1</SVGTableCell>
				<SVGTableCell colSpan={2}>Col Span</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell>Row 1, Cell 1</SVGTableCell>
				<SVGTableCell rowSpan={2}>{'Row Span\nmultiline\nsupport'}</SVGTableCell>
				<SVGTableCell>Row 1, Cell 3</SVGTableCell>
			</SVGTableRow>
			<SVGTableRow>
				<SVGTableCell>Header 1</SVGTableCell>
				<SVGTableCell colSpan={2}>Col Span</SVGTableCell>
			</SVGTableRow>
		</SVGTable>
	);
};
