import { AllDemo, LogoDemo } from '@repo/demo-components-vanilla';
import { ChangeEvent, useState } from 'react';

const App = () => {
	const [width, setWidth] = useState(500);
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setWidth(parseInt(e.target.value));
	};
	return (
		<div className='main'>
			<div
				style={{
					position: 'sticky',
					top: 0,
					left: 0,
					height: '40px',
					background: 'white',
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'start',
				}}
			>
				<h1 style={{ margin: 0 }}>DEMO Vanilla</h1> width: {width}
				<input type='range' min='300' max='900' value={width} id='myRange' onChange={onChange} />
			</div>
			<LogoDemo width={width} bgColor={null} className={'logo-demo'} />

			<AllDemo width={width} />
		</div>
	);
};

export default App;
