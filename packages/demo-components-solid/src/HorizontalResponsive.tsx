import { createSignal, createUniqueId, onMount, onCleanup } from 'solid-js';
import { EmbeddedTableAsProps } from './EmbeddedTableAsProps';
export const HorizontalResponsive = () => {
	const uniqId = createUniqueId();
	const [width, setWidth] = createSignal(900);
	const onResize = () => {
		const ref = document.getElementById(uniqId);
		if (ref) {
			setWidth(ref.clientWidth - 30);
		}
	};
	onMount(() => {
		window.addEventListener('resize', onResize);
		onResize();
	});
	onCleanup(() => {
		window.removeEventListener('resize', onResize);
	});

	return (
		<div id={uniqId} class='example-container'>
			<EmbeddedTableAsProps width={width()} />
		</div>
	);
};
