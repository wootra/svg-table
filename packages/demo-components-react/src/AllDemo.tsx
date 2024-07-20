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
import { EmbeddedTableAsPropsWithHeight } from './EmbeddedTableAsPropsWithHeight';
import { Paddings } from './Paddings';
import { LogoDemo } from './LogoDemo';
import { Standalone } from './Standalone';
import { AutoColSpan } from './AutoColSpan';
import { Rotate } from './Rotate';
import { BasicDemoJSX } from './BasicDemoJSX';

export const AllDemo = ({ width, useClassName = false }: { width: number; useClassName?: boolean }) => {
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
			<section>
				<h2>
					Welcome To SVG Table Example!
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/LogoDemo.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<LogoDemo width={width} bgColor={null} className={useClassName ? 'logo-demo' : undefined} />
			</section>
			<section>
				<h2>
					Standalone
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BasicDemo.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<Standalone width={width} />
			</section>

			<section>
				<h2>
					basic demo
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BasicDemo.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<BasicDemo width={width} />
			</section>
			<section>
				<h2>
					basic demo(HTML table strucutre)
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BasicDemoJSX.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<div>
					<p>This example demonstrates HTML table structure</p>
					<BasicDemoJSX width={width} />
				</div>
			</section>

			<section>
				<h2>
					basic with simple array
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BasicSimpleArray.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<BasicSimpleArray width={width} />
			</section>

			<section>
				<h2>
					automatic colSpan
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/AutoColSpan.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<AutoColSpan width={width} />
			</section>

			<section>
				<h2>
					basic with element
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BasicWithElement.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<BasicWithElement width={width} />
			</section>

			<section>
				<h2>
					basic with props
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BasicWithProps.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<BasicWithProps width={width} />
			</section>

			<section>
				<h2>
					Rotate Text
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/Rotate.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<Rotate width={width} />
			</section>

			<section>
				<h2>
					allowing overflow by default
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BasicWithPropsAllowingOverflow.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<BasicWithPropsAllowingOverflow width={width} />
			</section>

			<section>
				<h2>
					allowing only one cell overflow
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BasicWithPropsAllowingOverflowOnlyOneCell.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<BasicWithPropsAllowingOverflowOnlyOneCell width={width} />
			</section>

			<section>
				<h2>
					text position adjustment
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/TextPositionAdjustment.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<TextPositionAdjustment width={width} />
			</section>

			<section>
				<h2>
					no border table demo
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/NoBorderTableDemo.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<NoBorderTableDemo width={width} />
			</section>

			<section>
				<h2>
					Margins
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/Margins.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<Margins width={width} />
			</section>
			<section>
				<h2>
					Paddings
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/Paddings.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<Paddings width={width} />
			</section>

			<section>
				<h2>
					Table with Height
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/TableHeight.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<TableHeight />
			</section>

			<section>
				<h2>
					Table with Height with override height
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/TableHeightOverrideHeight.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<TableHeightOverrideHeight />
			</section>

			<section>
				<h2>
					embedded table
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/EmbeddedTable.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<EmbeddedTable standalone />
			</section>

			<section>
				<h2>
					embedded table as props
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/EmbeddedTableAsProps.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<EmbeddedTableAsProps width={width} standalone />
			</section>

			<section>
				<h2>
					embedded table with height as well
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/EmbeddedTableAsPropsWithHeight.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<EmbeddedTableAsPropsWithHeight width={width} standalone />
			</section>

			<section>
				<h2>
					text style override
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/TextStyleOverride.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<TextStyleOverride width={width} />
			</section>

			<section>
				<h2>
					only table border
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/OnlyTableBolder.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<OnlyTableBolder width={width} />
			</section>

			<section>
				<h2>
					table border with margin
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/TableBolderWithMargin.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<TableBolderWithMargin width={width} />
			</section>

			<section>
				<h2>
					table border styles
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/TableBorderStyles.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<TableBorderStyles width={width} />
			</section>

			<section>
				<h2>
					background color and text color
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/BgColorAndTextColor.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<BgColorAndTextColor width={width} />
			</section>

			<section>
				<h2>
					gaps
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/Gaps.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<Gaps width={width} />
			</section>

			<section>
				<h2>
					out bound labels example
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/OutboundLabels.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<OutboundLabels />
			</section>

			<section>
				<h2>
					table styles
					<a
						className='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-react/src/TableStyles.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<TableStyles width={width} />
			</section>
		</>
	);
};
