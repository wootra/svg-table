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
			<BasicDemo width={width} />
			<NoBorderTableDemo width={width} />
			<OnlyTableBolder width={width} />
			<TableBolderWithMargin width={width} />
			<TableBorderStyles width={width} />
			<BgColorAndTextColor width={width} />
			<Gaps width={width} />
			<EmbeddedTable />
			<TextStyleOverride width={width} />
			<TableStyles width={width} />
		</div>
	);
};

export default App;
