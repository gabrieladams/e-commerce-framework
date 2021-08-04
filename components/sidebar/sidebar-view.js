import SideBarLogoView from './logo/logo-view';
import SideBarNavView from './nav/nav-view';
import SideBarSearchBarView from './serach-bar/search-bar-view';
import styles from '../../styles/sidebar.module.css';

const SideBarView = () => {
	const components = [
		{
			name: 'Navbar',
			page: 'navbar',
		},
		{
			name: 'Product cards',
			page: 'product-cards',
		},
		{
			name: 'Product details',
			page: 'product-details',
		},
		{
			name: 'Buttons',
			page: 'buttons',
		},
		{
			name: 'Footer',
			page: 'footer',
		},
	];

	return (
		<aside className={styles.sidebar}>
			<SideBarLogoView />
			<SideBarSearchBarView />
			<SideBarNavView title='Components' components={components} />
		</aside>
	);
};

export default SideBarView;
