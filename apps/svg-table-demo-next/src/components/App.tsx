'use client';

import { Suspense, useState } from 'react';
import './main.css';
import ServerComponents from './ServerComponents';

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
			<Suspense fallback={<div>Loading...</div>}>
				<ServerComponents />
			</Suspense>
		</div>
	);
};

export default App;
