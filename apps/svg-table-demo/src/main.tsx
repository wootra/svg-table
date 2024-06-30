import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicDemo from './BasicDemo.tsx';
import EmbeddedTable from './EmbeddedTable.tsx';
import './main.css';
import TextStyleOverride from './TextStyleOverride.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='main'>
			<BasicDemo />
			<EmbeddedTable />
			<TextStyleOverride />
		</div>
	</React.StrictMode>
);
