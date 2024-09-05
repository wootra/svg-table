import React from 'react';

const ToggleBtn = () => {
	const onToggle = () => {
		const toggle = document.querySelector('.side-nav-toggle');
		const nav = document.querySelector('.side-nav');
		if (toggle && nav) {
			toggle.innerHTML = toggle.innerHTML === '⬇️' ? '⬆️' : '⬇️';
			nav.classList.toggle('open');
		}
	};
	return (
		<button className='side-nav-toggle' onClick={onToggle}>
			⬇️
		</button>
	);
};

export { ToggleBtn };
