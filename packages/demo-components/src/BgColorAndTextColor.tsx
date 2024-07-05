import SVGTable, { TableProps } from '@shjeon0730/svg-table';
const Gradients = () => {
	return (
		<>
			<linearGradient id='red-to-blue' x1='0' x2='0' y1='0' y2='1'>
				<stop offset='0%' stopColor='red' />
				<stop offset='100%' stopColor='blue' />
			</linearGradient>
			<linearGradient id='cyan-to-white' x1='0' x2='0' y1='0' y2='1'>
				<stop offset='0%' stopColor='cyan' />
				<stop offset='100%' stopColor='white' />
			</linearGradient>
		</>
	);
};
const blueTextCell = {
	content: 'Blue Text',
	style: {
		textColor: 'blue',
	},
};
const OrangeBackWhiteTextCell = {
	content: 'OrangeBack,WhiteText',
	style: {
		bgColor: 'orange',
		textColor: 'white',
	},
};

const GradientBackCell = {
	content: 'Gradient Back',
	style: {
		bgColor: 'url(#red-to-blue)',
		textColor: 'white',
	},
};

const GradientBackCell2 = {
	content: 'Gradient Back2',
	style: {
		bgColor: 'url(#cyan-to-white)',
	},
};

const tableProps: Omit<TableProps, 'width'> = {
	defs: <Gradients />,
	height: 100,
	rows: [
		[blueTextCell, OrangeBackWhiteTextCell],
		[GradientBackCell, GradientBackCell2],
	],
};
export const BgColorAndTextColor = ({ width = 500 }: { width?: number }) => {
	return <SVGTable {...tableProps} width={width} />;
};
