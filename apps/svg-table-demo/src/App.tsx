import {
	AllDemo,
	LogoDemo,
	SimpleRowsTable,
	SimpleRowsTableObj,
	EmbeddedTableAsPropsWithHeightJSX,
} from '@repo/demo-components-react';
import { ChangeEvent, useState } from 'react';
import styles from './App.module.css';

const App = () => {
	const [width, setWidth] = useState(500);
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setWidth(parseInt(e.target.value));
	};
	return (
		<div className={styles.main}>
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
			<LogoDemo width={width} bgColor={null} className={'logo-demo'} />

			<AllDemo width={width} />
			<SimpleRowsTable width={width} />
			<SimpleRowsTableObj width={width} />
			<EmbeddedTableAsPropsWithHeightJSX width={width} />
		</div>
	);
};

export default App;
