import BasicDemo from './BasicDemo';
import EmbeddedTable from './EmbeddedTable';
import TextStyleOverride from './TextStyleOverride';
import NoBorderTableDemo from './NoBorderTableDemo';
import OnlyTableBolder from './OnlyTableBolder';
import TableBolderWithMargin from './TableBolderWithMargin';
import TableBorderStyles from './TableBorderStyles';
import BgColorAndTextColor from './BgColorAndTextColor';
import Gaps from './Gaps';
import TableStyles from './TableStyles';
import { useState } from 'react';
import './main.css';

const ServerComponents = async () => {
	const width = 500;
	return (
		<>
			<BasicDemo width={width} />
			<NoBorderTableDemo width={width} />
			<OnlyTableBolder width={width} />
			<TableBolderWithMargin width={width} />
			<TableBorderStyles width={width} />
			<BgColorAndTextColor width={width} />
			<Gaps width={width} />
			<EmbeddedTable />
			<TextStyleOverride width={width} />
			<TableStyles width={width} />
		</>
	);
};

export default ServerComponents;
