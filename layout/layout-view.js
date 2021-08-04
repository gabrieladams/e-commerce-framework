import SideBarView from '../components/sidebar/sidebar-view';
import MainView from '../components/main/main-view';
import HeaderView from '../components/header/header-view';
import PageContentView from '../components/page-content/page-content-view';
import FooterView from '../components/footer/footer-view';
import FormContainer from '../components/form/form-container';
import PageOverlayView from '../components/page-overlay/page-overlay-view';

const LayoutView = ({
	handleClick,
	isLoginButtonClicked,
	isSignUpButtonClicked,
	showPageOverlay,
	children,
}) => {
	return (
		<>
			<SideBarView />
			<MainView>
				<HeaderView handleClick={handleClick} />
				<PageContentView>{children}</PageContentView>
				<FooterView />
			</MainView>
			<FormContainer
				isLoginButtonClicked={isLoginButtonClicked}
				isSignUpButtonClicked={isSignUpButtonClicked}
			/>
			<PageOverlayView showPageOverlay={showPageOverlay} />
		</>
	);
};

export default LayoutView;
