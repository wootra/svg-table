import type { ReactNode } from 'react';
import { createElement, Fragment } from 'react';
import { SVGTableElement, SVGTableElementAsObj } from '@shjeon0730/svg-table-core/dist/types/private-types';

import { SVGElementName } from '@shjeon0730/svg-table-core';

export const reactConverter = (element: SVGTableElement): ReactNode => {
	if (element === null || element === undefined) return element as ReactNode;
	if (Array.isArray(element)) {
		return <>{element.map((c, idx) => <Fragment key={idx}>{reactConverter(c)}</Fragment>) as ReactNode}</>;
	}

	if (typeof (element as Iterable<ReactNode>)[Symbol.iterator] === 'function') {
		const arr = Array.from(element as Iterable<ReactNode>);
		return (
			<>
				{arr.map((c, idx) => (
					<Fragment key={idx}>{c}</Fragment>
				))}
			</>
		);
	}
	if (typeof element !== 'object') return element as ReactNode;

	const el: SVGTableElementAsObj = element as SVGTableElementAsObj;
	if (el.type && el.attrs) {
		const children: ReactNode = el.children
			? el.children.map((c, idx) => <Fragment key={idx}>{reactConverter(c as SVGTableElement)}</Fragment>)
			: null;
		const obj: Record<string, any> = el.attrs;
		const camelCaseProps = Object.keys(obj).reduce(
			(curr, key: string) => {
				if (key.includes('-') && !key.startsWith('aria-') && !key.startsWith('data-')) {
					const newKey = key
						.split('-')
						.map((el, idx) => (idx === 0 ? el : el.charAt(0).toUpperCase() + el.slice(1)))
						.join('');

					return { ...curr, [newKey]: obj[key] };
				}
				return { ...curr, [key]: obj[key] };
			},
			{} as Record<string, any>
		);

		return createElement(el.type as SVGElementName, camelCaseProps, children) as ReactNode;
	}
	return element as ReactNode;
};
