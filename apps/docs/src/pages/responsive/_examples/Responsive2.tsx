import { EmbeddedTableAsPropsWithHeight } from '@repo/demo-components';
import { useEffect, useRef, useState } from 'react';
const Responsive2 = () => {
	const [width, setWidth] = useState(900);
	const [height, setHeight] = useState(500);
	const onResize = () => {
		if (ref.current) {
			setWidth(ref.current.clientWidth - 30);
			setHeight(ref.current.clientHeight - 120);
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
		<div
			ref={ref}
			className='example-container'
			onResize={onResize}
			style={{
				width: 'calc(100vw - 20rem)',
				height: 'calc(100vh - 150px)',
			}}
		>
			<p>
				try to resize the window in height and width! you see the table
				is "Responsive"!
			</p>
			<p>Optimization is up to you, though...</p>
			<EmbeddedTableAsPropsWithHeight width={width} height={height} />
		</div>
	);
};

export default Responsive2;
