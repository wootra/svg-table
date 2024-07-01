import BasicDemo from './BasicDemo.tsx';
import EmbeddedTable from './EmbeddedTable.tsx';
import TextStyleOverride from './TextStyleOverride.tsx';
import NoBorderTableDemo from './NoBorderTableDemo.tsx';
import OnlyTableBolder from './OnlyTableBolder.tsx';
import TableBolderWithMargin from './TableBolderWithMargin.tsx';
import TableBorderStyles from './TableBorderStyles.tsx';
import BgColorAndTextColor from './BgColorAndTextColor.tsx';
import Gaps from './Gaps.tsx';
import TableStyles from './TableStyles.tsx';
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
