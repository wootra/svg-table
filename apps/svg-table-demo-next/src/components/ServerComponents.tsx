import { AllDemo } from '@repo/demo-components-react';

const ServerComponents = async ({ width = 500 }: { width: number }) => {
	return <AllDemo width={width} />;
};

export default ServerComponents;
