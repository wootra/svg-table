import {
	BasicDemo,
	BasicDemoWithRadius,
	BasicWithElement,
	BasicWithProps,
	BasicWithPropsAllowingOverflow,
	BasicWithPropsAllowingOverflowOnlyOneCell,
	NoBorderTableDemo,
	EmbeddedTable,
	TextStyleOverride,
	OnlyTableBolder,
	TableBolderWithMargin,
	TableBorderStyles,
	BgColorAndTextColor,
	Gaps,
	OutboundLabels,
	TableStyles,
	Margins,
	EmbeddedTableAsProps,
	TextPositionAdjustment,
	TableHeight,
	TableHeightOverrideHeight,
	BasicSimpleArray,
	EmbeddedTableAsPropsWithHeight,
	Paddings,
	LogoDemo,
	Standalone,
	AutoColSpan,
	Rotate,
} from '.';

const style = `
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
`;

export const AllDemo = ({ width, useclass = false }: { width: number; useclass?: boolean }) => {
	return `<div>
			<style>
				${style}
			</style>
			<section>
				<h2>
					Welcome To SVG Table Example!
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/LogoDemo.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${LogoDemo({ width, bgColor: null, className: useclass ? 'logo-demo' : undefined })}
			</section>
			<section>
				<h2>
					Standalone
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BasicDemo.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${Standalone({ width })}
			</section>

			<section>
				<h2>
					basic demo
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BasicDemo.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${BasicDemo({ width })}
			</section>
			<section>
				<h2>
					basic with simple array
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BasicSimpleArray.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${BasicSimpleArray({ width })}
			</section>
			<section>
				<h2>
					basic rounded table
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BasicDemoWithRadius.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${BasicDemoWithRadius({ width })}
			</section>
			<section>
				<h2>
					automatic colSpan
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/AutoColSpan.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${AutoColSpan({ width })}
			</section>

			<section>
				<h2>
					basic with element
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BasicWithElement.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${BasicWithElement({ width })}
			</section>

			<section>
				<h2>
					basic with props
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BasicWithProps.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${BasicWithProps({ width })}
			</section>

			<section>
				<h2>
					Rotate Text
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/Rotate.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${Rotate({ width })}
			</section>

			<section>
				<h2>
					allowing overflow by default
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BasicWithPropsAllowingOverflow.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${BasicWithPropsAllowingOverflow({ width })}
			</section>

			<section>
				<h2>
					allowing only one cell overflow
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BasicWithPropsAllowingOverflowOnlyOneCell.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${BasicWithPropsAllowingOverflowOnlyOneCell({ width })}
			</section>

			<section>
				<h2>
					text position adjustment
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/TextPositionAdjustment.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${TextPositionAdjustment({ width })}
			</section>

			<section>
				<h2>
					no border table demo
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/NoBorderTableDemo.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${NoBorderTableDemo({ width })}
			</section>

			<section>
				<h2>
					Margins
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/Margins.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${Margins({ width })}
			</section>
			<section>
				<h2>
					Paddings
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/Paddings.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				<div>
					<p>in the first row, paddings for the text only works for left and top paddings.</p>
					<p>but paddings are still used when you add nested table to calculate valid area.</p>
					<div>
						${Paddings({ width })}
					</div>
				</div>
			</section>

			<section>
				<h2>
					Table with Height
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/TableHeight.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>

				<div>
					<p>below green box is (600px x 400px) in size.</p>
					<p>And pink box is (500px x 300px) in size.</p>
					<p>
						SVG Table is width: 500, height: 400, borderWidths: 1, borderColors: 'red', margins: 20, colGaps: 10,
						rowGaps: 10
					</p>
					<p>All rows are automatically adjusted</p>
					<div
						style="height:400px; width:600px; outline:5px solid rgba(0, 255, 0, 0.5);
					>
						<div
							style="height:300px; width:500px; outline:5px solid rgba(173, 76, 97, 0.5);
						>
							${TableHeight()}
						</div>
					</div>
				</div>


				
			</section>

			<section>
				<h2>
					Table with Height with override height
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/TableHeightOverrideHeight.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>


				<div>
					<p>below green box is (600px x 400px) in size.</p>
					<p>And pink box is (500px x 300px) in size.</p>
					<p>SVG Table is width: 500, height: 300, borderWidths: 1, rowHeights: [1,1,1], borderColors: 'red'</p>
					<p>
						All rows are automatically adjusted(100 = 300/3) based on rowHeights as ratio, but first row has
						height:200 in style.
					</p>
					<p>since more specific style wins, the table height become 400</p>
					<div
						style="height:400px; width: 600px; outline: 5px solid rgba(0, 255, 0, 0.5)"
					>
						<div
							style="height: 300px; outline: 5px solid rgba(173, 76, 97, 0.5); width: 500px;"
						>
							${TableHeightOverrideHeight()}
						</div>
					</div>
				</div>


				
			</section>

			<section>
				<h2>
					embedded table
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/EmbeddedTable.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${EmbeddedTable({ standalone: true })}
			</section>

			<section>
				<h2>
					embedded table as props
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/EmbeddedTableAsProps.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${EmbeddedTableAsProps({ standalone: true, width })}
			</section>

			<section>
				<h2>
					embedded table with height as well
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/EmbeddedTableAsPropsWithHeight.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${EmbeddedTableAsPropsWithHeight({ standalone: true, width })}
			</section>

			<section>
				<h2>
					text style override
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/TextStyleOverride.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${TextStyleOverride({ width })}
			</section>

			<section>
				<h2>
					only table border
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/OnlyTableBolder.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${OnlyTableBolder({ width })}
			</section>

			<section>
				<h2>
					table border with margin
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/TableBolderWithMargin.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${TableBolderWithMargin({ width })}
			</section>

			<section>
				<h2>
					table border styles
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/TableBorderStyles.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${TableBorderStyles({ width })}
			</section>

			<section>
				<h2>
					background color and text color
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/BgColorAndTextColor.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${BgColorAndTextColor({ width })}
			</section>

			<section>
				<h2>
					gaps
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/Gaps.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${Gaps({ width })}
			</section>

			<section>
				<h2>
					out bound labels example
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/OutboundLabels.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${OutboundLabels({ width })}
			</section>

			<section>
				<h2>
					table styles
					<a
						class='demo-code-link'
						href='https://github.com/wootra/svg-table/blob/main/packages/demo-components-vanilla/src/TableStyles.ts'
						target='_blank'
						rel='noopener noreferrer'
					>
						code
					</a>
				</h2>
				${TableStyles({ width })}
			</section>
		</div>`;
};
