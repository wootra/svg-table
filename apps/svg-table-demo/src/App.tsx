import BasicDemo from './BasicDemo';
import EmbeddedTable from './EmbeddedTable';
import TextStyleOverride from './TextStyleOverride';
import NoBorderTableDemo from './NoBorderTableDemo';
import OnlyTableBolder from './OnlyTableBolder';
import TableBolderWithMargin from './TableBolderWithMargin';
import TableBorderStyles from './TableBorderStyles';
import BgColorAndTextColor from './BgColorAndTextColor';
import Gaps from './Gaps';
import TableStyles from './TableStyles';
import { useState } from 'react';
import BasicWithProps from './BasicWithProps';
import BasicWithElement from './BasicWithElement';
import BasicWithPropsAllowingOverflow from './BasicWithPropsAllowingOverflow';
import BasicWithPropsAllowingOverflowOnlyOneCell from './BasicWithPropsAllowingOverflowOnlyOneCell';
import OutboundLabels from './OutboundLabels';
const App = () => {
	const [width, setWidth] = useState(500);
	const onChange = (e: any) => {
		setWidth(e.target.value);
	};
	return (
		<div className='main'>
			<div
				style={{
					position: 'sticky',
					top: 0,
					height: '40px',
					background: 'white',
				}}
			>
				{width}
				<input
					type='range'
					min='300'
					max='900'
					value={width}
					id='myRange'
					onChange={onChange}
				/>
			</div>

			<h2>basic demo</h2>
			<BasicDemo width={width} />
			<h2>basic with element</h2>
			<BasicWithElement width={width} />
			<h2>basic with props</h2>
			<BasicWithProps width={width} />
			<h2>allowing overflow by default</h2>
			<BasicWithPropsAllowingOverflow width={width} />
			<h2>allwing only once cell overflow</h2>
			<BasicWithPropsAllowingOverflowOnlyOneCell width={width} />
			<h2>no border table demo</h2>
			<NoBorderTableDemo width={width} />
			<h2>embedded table</h2>
			<EmbeddedTable />
			<h2>text style override</h2>
			<TextStyleOverride width={width} />
			<h2>only table border</h2>
			<OnlyTableBolder width={width} />
			<h2>table border with margin</h2>
			<TableBolderWithMargin width={width} />
			<h2>table border styles</h2>
			<TableBorderStyles width={width} />
			<h2>background color and text color</h2>
			<BgColorAndTextColor width={width} />
			<h2>gaps</h2>
			<Gaps width={width} />
			<h2>out bound labels example</h2>
			<OutboundLabels />
			<h2>table styles</h2>
			<TableStyles width={width} />
		</div>
	);
};

export default App;
