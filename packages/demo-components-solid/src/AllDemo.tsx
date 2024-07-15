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

export const AllDemo = ({ width, useclass = false }: { width: number; useclass?: boolean }) => {
	return (
		<div>
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/LogoDemo.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<LogoDemo width={width} bgColor={null} className={useclass ? 'logo-demo' : undefined} />
			</section>
			<section>
				<h2>
					Standalone
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/BasicDemo.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/BasicDemo.tsx'
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
					basic with simple array
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/BasicSimpleArray.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/AutoColSpan.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/BasicWithElement.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/BasicWithProps.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/Rotate.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/BasicWithPropsAllowingOverflow.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/BasicWithPropsAllowingOverflowOnlyOneCell.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/TextPositionAdjustment.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/NoBorderTableDemo.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/Margins.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/Paddings.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/TableHeight.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/TableHeightOverrideHeight.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/EmbeddedTable.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/EmbeddedTableAsProps.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/EmbeddedTableAsPropsWithHeight.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/TextStyleOverride.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/OnlyTableBolder.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/TableBolderWithMargin.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/TableBorderStyles.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/BgColorAndTextColor.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/Gaps.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/OutboundLabels.tsx'
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
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-solid/src/TableStyles.tsx'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<TableStyles width={width} />
			</section>
		</div>
	);
};
