import { AllDemo, LogoDemo, SimpleRowsTable, SimpleRowsTableObj } from '@repo/demo-components-react';
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
					background: 'var(--color-background)',
				}}
			>
				DEMO REACT: width :{width}
				<input type='range' min='300' max='900' value={width} id='myRange' onChange={onChange} />
			</div>
			{/* <LogoDemo width={width} bgColor={null} className={'logo-demo'} />

			<AllDemo width={width} /> */}
			<SimpleRowsTable width={width} />
			<SimpleRowsTableObj width={width} />
		</div>
	);
};

export default App;
