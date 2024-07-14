import { VerticalResponsive } from '@repo/demo-components-vanilla';
// this file is added since this docs app cannot import full demo library and it is pointless.
// this readt wrapper allows to use the vanilla js version showing the concept of the code.
const VerticalResponsiveHolder = () => {
	return <div className='example-container' dangerouslySetInnerHTML={{ __html: VerticalResponsive() }}></div>;
};

export default VerticalResponsiveHolder;
