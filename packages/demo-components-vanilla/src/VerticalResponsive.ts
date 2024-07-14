import { EmbeddedTableAsPropsWithHeight } from './EmbeddedTableAsPropsWithHeight';

const safeEhHolder = { saved: false, savedEh: () => null, mounted: false };

const onResize = (uniqId: string) => () => {
	if (typeof window === 'object') {
		const ref = document.getElementById(uniqId);
		if (ref) {
			const tableAsString = EmbeddedTableAsPropsWithHeight({
				width: Math.max(ref.clientWidth - 32, 300),
				height: Math.max(ref.clientHeight - 32, 200),
			});

			ref.innerHTML = tableAsString;
		}
	}
	return null;
};

export const onUmountVerticalResponsive = () => {
	if (safeEhHolder.saved && typeof window === 'object') {
		window.removeEventListener('resize', safeEhHolder.savedEh);
		safeEhHolder.saved = false;
		safeEhHolder.mounted = false;
	}
};

export const VerticalResponsive = (uniqId = 'u_121jkl1232') => {
	if (!safeEhHolder.saved && typeof window === 'object') {
		const savedEh = onResize(uniqId);
		window.addEventListener('resize', savedEh);
		safeEhHolder.saved = true;
		safeEhHolder.savedEh = savedEh;

		setTimeout(() => {
			savedEh(); // to avoid hydration error.
		}, 0);
	} else {
		setTimeout(() => {
			safeEhHolder.savedEh(); // to avoid hydration error.
		}, 0);
	}
	return `<div id="${uniqId}" style="height:calc(100vh - 300px);">loading...</div>`;
};
