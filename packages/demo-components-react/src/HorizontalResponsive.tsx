import { EmbeddedTableAsProps } from './EmbeddedTableAsProps';
import { useEffect, useRef, useState } from 'react';
export const HorizontalResponsive = () => {
	const [width, setWidth] = useState(900);
	const onResize = () => {
		if (ref.current) {
			setWidth(ref.current.clientWidth - 32);
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
		<div className='demo-container' ref={ref} onResize={onResize}>
			<EmbeddedTableAsProps width={width} />
		</div>
	);
};
