import React from 'react';
const versions = ['3.0.0']; // Add or modify versions as needed

const VersionNav = () => {
	const selected = versions.find(v => window?.location?.pathname.includes(v)) ?? versions[versions.length - 1];

	const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedVersion = event.target.value;
		if (selectedVersion && window?.location) {
			window.location.href = `/api-ref/svg-table-react/${selectedVersion}`;
		}
	};

	return (
		<nav className='version-nav'>
			<div>
				<select onChange={handleVersionChange} className='version-select'>
					<option value=''>selected version: {selected}</option>
					{versions.map(version => (
						<option key={version} value={version} selected={version === selected}>
							{version}
						</option>
					))}
				</select>
			</div>
		</nav>
	);
};

export default VersionNav;
