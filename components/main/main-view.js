import styles from '../../styles/main.module.css';

const MainView = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};

export default MainView;
