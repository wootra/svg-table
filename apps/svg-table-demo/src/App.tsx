import { AllDemo, LogoDemo } from '@repo/demo-components';
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
			<LogoDemo width={width} bgColor={null} className={'logo-demo'} />

			<AllDemo width={width} />
		</div>
	);
};

export default App;
