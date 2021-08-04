import styles from '../../../styles/sidebar.module.css';

const SideBarSearchBarView = () => {
	return (
		<div className={styles.inputWrapper}>
			<input type='text' placeholder='search' className={styles.input} />
		</div>
	);
};

export default SideBarSearchBarView;
