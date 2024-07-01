import React from 'react';
import ReactDOM from 'react-dom/client';
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
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='main'>
			<BasicDemo />
			<NoBorderTableDemo />
			<OnlyTableBolder />
			<TableBolderWithMargin />
			<TableBorderStyles />
			<BgColorAndTextColor />
			<Gaps />
			<EmbeddedTable />
			<TextStyleOverride />
			<TableStyles />
		</div>
	</React.StrictMode>
);
