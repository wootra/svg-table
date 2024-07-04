import { BasicDemo } from './BasicDemo';
import { BasicWithElement } from './BasicWithElement';
import { BasicWithProps } from './BasicWithProps';
import { BasicWithPropsAllowingOverflow } from './BasicWithPropsAllowingOverflow';
import { BasicWithPropsAllowingOverflowOnlyOneCell } from './BasicWithPropsAllowingOverflowOnlyOneCell';
import { NoBorderTableDemo } from './NoBorderTableDemo';
import { EmbeddedTable } from './EmbeddedTable';
import { TextStyleOverride } from './TextStyleOverride';
import { OnlyTableBolder } from './OnlyTableBolder';
import { TableBolderWithMargin } from './TableBolderWithMargin';
import { TableBorderStyles } from './TableBorderStyles';
import { BgColorAndTextColor } from './BgColorAndTextColor';
import { Gaps } from './Gaps';
import { OutboundLabels } from './OutboundLabels';
import { TableStyles } from './TableStyles';
import { Margins } from './Margins';
import { EmbeddedTableAsProps } from './EmbeddedTableAsProps';
import { TextPositionAdjustment } from './TextPositionAdjustment';
import { TableHeight } from './TableHeight';
import { TableHeightOverrideHeight } from './TableHeightOverrideHeight';
import './all-demo.css';
import { BasicSimpleArray } from './BasicSimpleArray';
export const AllDemo = ({ width }: { width: number }) => {
	return (
		<>
			<style>
				{`
.demo-code-link {
  font-size: 0.8em;
  margin-left: 10px;
  text-decoration: none;
  color: #4A90E2;
  border: 1px solid #4A90E2;
  padding: 2px 6px;
  border-radius: 4px;
}

.demo-code-link:hover {
  background-color: #4A90E2;
  color: white;
}
				`}
			</style>
			<h2>
				basic demo
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/BasicDemo.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<BasicDemo width={width} />
			<h2>
				basic with simple array
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/BasicSimpleArray.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<BasicSimpleArray width={width} />

			<h2>
				basic with element
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/BasicWithElement.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<BasicWithElement width={width} />

			<h2>
				basic with props
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/BasicWithProps.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<BasicWithProps width={width} />

			<h2>
				allowing overflow by default
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/BasicWithPropsAllowingOverflow.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<BasicWithPropsAllowingOverflow width={width} />

			<h2>
				allowing only one cell overflow
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/BasicWithPropsAllowingOverflowOnlyOneCell.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<BasicWithPropsAllowingOverflowOnlyOneCell width={width} />

			<h2>
				text position adjustment
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/TextPositionAdjustment.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<TextPositionAdjustment width={width} />

			<h2>
				no border table demo
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/NoBorderTableDemo.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<NoBorderTableDemo width={width} />

			<h2>
				Margins
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/Margins.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<Margins width={width} />

			<h2>
				Table with Height
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/TableHeight.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<TableHeight />

			<h2>
				Table with Height with override height
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/TableHeightOverrideHeight.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<TableHeightOverrideHeight />

			<h2>
				embedded table
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/EmbeddedTable.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<EmbeddedTable />

			<h2>
				embedded table as props
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/EmbeddedTableAsProps.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<EmbeddedTableAsProps width={width} />

			<h2>
				text style override
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/TextStyleOverride.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<TextStyleOverride width={width} />

			<h2>
				only table border
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/OnlyTableBolder.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<OnlyTableBolder width={width} />

			<h2>
				table border with margin
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/TableBolderWithMargin.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<TableBolderWithMargin width={width} />

			<h2>
				table border styles
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/TableBorderStyles.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<TableBorderStyles width={width} />

			<h2>
				background color and text color
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/BgColorAndTextColor.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<BgColorAndTextColor width={width} />

			<h2>
				gaps
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/Gaps.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<Gaps width={width} />

			<h2>
				out bound labels example
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/OutboundLabels.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<OutboundLabels />

			<h2>
				table styles
				<a
					className='demo-code-link'
					href='https://github.com/wootra/svg-table/blob/main/packages/demo-components/src/TableStyles.tsx'
					target='_blank'
					rel='noopener noreferrer'
				>
					code
				</a>
			</h2>
			<TableStyles width={width} />
		</>
	);
};
