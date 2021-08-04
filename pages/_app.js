import LayoutContainer from '../layout/layout-container';
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/utils.css';

function MyApp({ Component, pageProps }) {
	return (
		<LayoutContainer>
			<Component {...pageProps} />
		</LayoutContainer>
	);
}

export default MyApp;
