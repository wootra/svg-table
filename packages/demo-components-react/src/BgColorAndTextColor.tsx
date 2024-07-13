import SVGTable, { CellProps, TableProps } from '../../svg-table-react-repo/src';
const Gradients = () => {
	return (
		<>
			<linearGradient id='red-to-blue' x1='0' x2='0' y1='0' y2='1'>
				<stop offset='0%' stopColor='#622424' />
				<stop offset='100%' stopColor='#181850' />
			</linearGradient>
			<linearGradient id='cyan-to-white' x1='0' x2='0' y1='0' y2='1'>
				<stop offset='0%' stopColor='#1f7676' />
				<stop offset='100%' stopColor='white' />
			</linearGradient>
		</>
	);
};
const blueTextCell: CellProps = {
	content: 'Blue Text',
	style: {
		textColor: 'blue',
	},
};
const OrangeBackWhiteTextCell: CellProps = {
	content: 'OrangeBack,\nWhiteText',
	style: {
		bgColor: 'orange',
		textColor: 'white',
	},
};

const GradientBackCell: CellProps = {
	content: 'Gradient Back',
	style: {
		bgColor: 'url(#red-to-blue)',
		textColor: 'white',
	},
};

const GradientBackCell2: CellProps = {
	content: 'Gradient Back2',
	style: {
		bgColor: 'url(#cyan-to-white)',
		textColor: 'black',
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
