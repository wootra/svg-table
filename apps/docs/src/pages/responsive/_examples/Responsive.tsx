import { EmbeddedTableAsProps } from '@repo/demo-components-react';
import { useEffect, useRef, useState } from 'react';
const Responsive = () => {
	const [width, setWidth] = useState(900);
	const onResize = () => {
		if (ref.current) {
			setWidth(ref.current.clientWidth - 30);
		}
	};
	useEffect(() => {
		window.addEventListener('resize', onResize);
		onResize();
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);
	const ref = useRef<HTMLDivElement>(null);
	return (
		<div ref={ref} className='example-container' onResize={onResize} style={{ width: 'calc(100vw - 20rem)' }}>
			<p>try to resize the window in height and width! In this example, your table will only react with width.</p>
			<EmbeddedTableAsProps width={width} />
		</div>
	);
};

export default Responsive;
