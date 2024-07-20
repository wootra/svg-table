import SVGTable from '@shjeon0730/svg-table-react';
import { SVGTableCell, SVGTableRow } from '../../svg-table-react/src/SVGTable';

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
