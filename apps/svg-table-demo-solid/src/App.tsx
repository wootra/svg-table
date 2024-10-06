import { createComponent, createEffect, JSX, JSXElement, on } from 'solid-js';
import { render } from 'solid-js/web';

import { AllDemo, LogoDemo, EmbeddedTableAsPropsWithHeightJSX, SimpleRowsTable, SimpleRowsTableObj } from './demo';
import { createSignal } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import styles from './App.module.css';

function App() {
	const [width, setWidth] = createSignal(500);
	const onChange: JSX.CustomEventHandlersCamelCase<HTMLInputElement>['onChange'] = e => {
		setWidth(parseInt(e.target.value ?? '500'));
	};

	return (
		<div class={styles.App}>
			<h1>DEMO Solid width :{width()}</h1>
			<input type='range' min='300' max='900' value={width()} id='myRange' onChange={onChange} />
			<div>
				{/* {EmbeddedTableAsPropsWithHeightJSX({ width: width() })} */}
				{/* {renderTable()() as JSXElement} */}
				{/* {renderTable() as JSXElement} */}
				{/* <LogoDemo width={width} bgColor={null} className={'logo-demo'} /> */}
				{/* <AllDemo width={width()} /> */}
				{AllDemo({ width: width() })}
				{/* <AllDemo width={width} /> */}
				{/* {embeddedTable} */}
				{/* <Dynamic component={EmbeddedTableAsPropsWithHeightJSX} width={width()} /> */}
				{/* {el()} */}
				{/* {SimpleRowsTable({ width: width() })}
				{SimpleRowsTableObj({ width: width() })} */}
			</div>
		</div>
	);
}

export default App;
