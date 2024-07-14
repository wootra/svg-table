import { FaReact } from 'react-icons/fa';
import { TbBrandSolidjs } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';

const Sites = {
	All: ['solid', 'react', 'vanila'],
} as const;
type Frameworks = (typeof Sites)[keyof typeof Sites];
const urlMain = 'https://github.com/wootra/svg-table/blob/main/packages';
const reactUrl = `${urlMain}/demo-components-react/src`;
const solidUrl = `${urlMain}/demo-components-solid/src`;
const vanillatUrl = `${urlMain}/demo-components-vanilla/src`;

const GitHubLink = ({ demoName, sites }: { demoName: string; sites?: Frameworks }) => {
	let sitesArr: string[] = Array.from(Sites.All);
	if (sites) sitesArr = Array.from(Sites.All);
	const isReact = sitesArr.includes('react');
	const isSolid = sitesArr.includes('react');
	const isVanilla = sitesArr.includes('react');
	return (
		<div>
			{isReact && (
				<a
					className='code-link'
					href={`${reactUrl}/${demoName}.tsx`}
					target='_blank'
					rel='noopener noreferrer'
					aria-label='react code'
				>
					<FaReact />
				</a>
			)}
			{isSolid && (
				<a
					className='code-link'
					href={`${solidUrl}/${demoName}.tsx`}
					target='_blank'
					rel='noopener noreferrer'
					aria-label='solid code'
				>
					<TbBrandSolidjs />
				</a>
			)}
			{isVanilla && (
				<a
					className='code-link'
					href={`${vanillatUrl}/${demoName}.ts`}
					target='_blank'
					rel='noopener noreferrer'
					aria-label='vanilla code'
				>
					<RiJavascriptFill />
				</a>
			)}
		</div>
	);
};

export default GitHubLink;
