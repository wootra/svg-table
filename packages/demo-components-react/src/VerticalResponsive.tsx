import { EmbeddedTableAsPropsWithHeight } from './EmbeddedTableAsPropsWithHeight';
import { useEffect, useRef, useState } from 'react';
export const VerticalResponsive = () => {
	const [width, setWidth] = useState(900);
	const [height, setHeight] = useState(500);
	const onResize = () => {
		if (ref.current) {
			setWidth(ref.current.clientWidth - 32);
			setHeight(ref.current.clientHeight - 32);
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
			className='demo-container'
			ref={ref}
			onResize={onResize}
			style={{
				height: 'calc(100vh - 300px)',
			}}
		>
			<EmbeddedTableAsPropsWithHeight width={width} height={height} />
		</div>
	);
};
