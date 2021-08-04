import SideBarNavTitle from './title/title-view';
import SideBarNavLink from './link/link-view';

import styles from '../../../styles/sidebar.module.css';

const SideBarNavView = ({ title, components }) => {
	return (
		<nav className='flex flex-col w-full'>
			<SideBarNavTitle title={title} />
			{components.map((component) => {
				return <SideBarNavLink component={component} key={component.page} />;
			})}
		</nav>
	);
};

export default SideBarNavView;
