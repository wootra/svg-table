import { EmbeddedTableAsProps } from './EmbeddedTableAsProps';

const safeEhHolder = { saved: false, savedEh: () => null };
const onResize = (uniqId: string) => () => {
	if (typeof window === 'object') {
		const ref = document.getElementById(uniqId);
		if (ref) {
			const tableAsString = EmbeddedTableAsProps({
				width: ref.clientWidth - 32,
			});
			ref.innerHTML = tableAsString;
		}
	}
	return null;
};

export const onUmountHorizontalResponsive = () => {
	if (safeEhHolder.saved && typeof window === 'object') {
		window.removeEventListener('resize', safeEhHolder.savedEh);
		safeEhHolder.saved = false;
	}
};

export const HorizontalResponsive = (uniqId = `u_123456789`) => {
	if (!safeEhHolder.saved && typeof window === 'object') {
		const savedEh = onResize(uniqId);
		window.addEventListener('resize', savedEh);
		safeEhHolder.saved = true;
		safeEhHolder.savedEh = savedEh;
		setTimeout(() => {
			savedEh(); // to avoid hydration error.
		}, 0);
	}
	return `<div id="${uniqId}">loading...</div>`;
};
