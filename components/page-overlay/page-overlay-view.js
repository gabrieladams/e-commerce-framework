import styles from '../../styles/page-overlay.module.css';

const PageOverlayView = ({ showPageOverlay }) => {
	return (
		<div
			style={
				showPageOverlay === 'yes'
					? {
							display: 'block',
							animationName: 'fadeIn',
							animationDuration: '1s',
					  }
					: { display: 'none' }
			}
			className={styles.pageOverlay}
		></div>
	);
};

// const StyledPageOverlay = styled.div`
// 	display: ${(showPageOverlay) => (showPageOverlay === 'yes' ? block : none)};
// 	animation-name: ${(showPageOverlay) => showPageOverlay === 'yes' && fadeIn};
// 	animation-duration: ${(showPageOverlay) =>
// 		showPageOverlay === 'yes' && 1s};
// `;

export default PageOverlayView;
