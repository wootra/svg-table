import { AllDemo, LogoDemo } from '@repo/demo-components-vanilla';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

const App = () => {
	const [width, setWidth] = useState(500);
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setWidth(parseInt(e.target.value));
	};
	const ref1 = useRef<HTMLDivElement>(null);
	const ref2 = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (ref1.current && ref2.current) {
			ref1.current.innerHTML = LogoDemo({ width, bgColor: null, className: 'logo-demo' });
			ref2.current.innerHTML = AllDemo({ width });
		}
	}, [width]);
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
			<div ref={ref1} />
			<div ref={ref2} />
		</div>
	);
};

export default App;
