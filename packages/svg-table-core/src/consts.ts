export const INTERNAL_CSS_VARS = Object.freeze({
	borderLineColor: '--line-default-stroke',
	textColor: '--text-default-color',
});

export const DEFAULT_COLORS = Object.freeze({
	border: '#000',
});

export const DEFAULT_WITH_CSSVARS = Object.freeze({
	border: `var(${INTERNAL_CSS_VARS.borderLineColor}, ${DEFAULT_COLORS.border})`,
});
