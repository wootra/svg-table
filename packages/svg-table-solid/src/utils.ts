export const kebabize = (str: string) =>
	str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($: string, ofs: string) => (ofs ? '-' : '') + $.toLowerCase());

const convertVal = (val: string | number | boolean | Record<string, string | number | null> | null): string => {
	if (typeof val !== 'number' && !val) return '';
	if (typeof val === 'object') {
		if (Array.isArray(val)) {
			throw new Error('something is wrong.. value type cannot be array');
		}
		return Object.entries(val)
			.map(([k, v]) => {
				return `${kebabize(k)}:${v}`;
			})
			.join(';');
	}
	return `${val}`;
};

const convertAttrToHtmlStyle = (attrName: string) => {
	if (attrName === 'className') return 'class';
	switch (attrName) {
		case 'viewBox':
			return attrName;
	}
	if (attrName.match(/[A-Z]+/)) {
		const newKey = kebabize(attrName);

		return newKey;
	}
	return attrName;
};

export const convertToKebabCaseProps = (attrs: Record<string, any>) => {
	const kebabCaseProps = Object.keys(attrs).reduce(
		(curr, key: string) => {
			const convertedKey = convertAttrToHtmlStyle(key);
			const converted = `${convertVal(attrs[key])}`;
			if (!converted) return curr;
			return { ...curr, [convertedKey]: converted };
		},
		{} as Record<string, any>
	);
	return kebabCaseProps;
};

export const __private__ = {
	convertVal,
	convertAttrToHtmlStyle,
};
