import { createSignal, createUniqueId, onCleanup, onMount } from 'solid-js';
import { EmbeddedTableAsPropsWithHeight } from './EmbeddedTableAsPropsWithHeight';
export const VerticalResponsive = () => {
	const uniqId = createUniqueId();
	const [width, setWidth] = createSignal(900);
	const [height, setHeight] = createSignal(500);
	const onResize = () => {
		const ref = document.getElementById(uniqId);

		if (ref) {
			setWidth(ref.clientWidth - 32);
			setHeight(ref.clientHeight - 32);
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
		<div id={uniqId} class='example-container' style='height: calc(100vh - 300px)'>
			{EmbeddedTableAsPropsWithHeight({
				width: width(),
				height: height(),
			})}
		</div>
	);
};
