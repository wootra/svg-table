import { SVGTable } from './SVGTable';
export * from './types';
export { simpleValue } from './utils';
export const INTERNAL_CSS_VARS = Object.freeze({
	borderLineColor: '--line-default-stroke',
	textColor: '--text-default-color',
});
export default SVGTable;
