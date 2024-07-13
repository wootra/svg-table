import SVGTable, { CellProps, createVanillaElement, TableProps } from '@shjeon0730/svg-table-vanilla';
const gradients = [
	createVanillaElement(
		'linearGradient',
		{
			id: 'red-to-blue',
			x1: '0',
			x2: '0',
			y1: '0',
			y2: '1',
		},
		createVanillaElement('stop', {
			offset: '0%',
			'stop-color': '#622424',
		}),
		createVanillaElement('stop', {
			offset: '100%',
			'stop-color': '#181850',
		})
	),
	createVanillaElement(
		'linearGradient',
		{
			id: 'cyan-to-white',
			x1: '0',
			x2: '0',
			y1: '0',
			y2: '1',
		},
		createVanillaElement('stop', {
			offset: '0%',
			'stop-color': '#1f7676',
		}),
		createVanillaElement('stop', {
			offset: '100%',
			'stop-color': 'white',
		})
	),
] as SVGElement[];

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
	defs: gradients,
	height: 100,
	rows: [
		[blueTextCell, OrangeBackWhiteTextCell],
		[GradientBackCell, GradientBackCell2],
	],
};

export const BgColorAndTextColor = ({ width = 500 }: { width?: number }) => {
	return SVGTable({ ...tableProps, width });
};
