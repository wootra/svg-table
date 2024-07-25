import { AllDemo, LogoDemo } from '@repo/demo-components-solid';

function App() {
	const width = 500;
	return (
		<div class='main'>
			<h1>DEMO Solid</h1>
			<LogoDemo width={width} bgColor={null} className={'logo-demo'} />

			<AllDemo width={width} />
		</div>
	);
}

export default App;
