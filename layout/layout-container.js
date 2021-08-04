import { Component } from 'react';
import LayoutView from './layout-view';

// LayoutContainer deals with any logic required to render the app's layout
class LayoutContainer extends Component {
	state = {
		isLoginButtonClicked: false,
		isSignUpButtonClicked: false,
	};

	handleClick = (buttonClicked) => {
		if (buttonClicked === 'login') {
			this.setState({
				isLoginButtonClicked: true,
			});
		} else {
			this.setState({
				isSignUpButtonClicked: true,
			});
		}
	};

	render() {
		return (
			<LayoutView
				handleClick={this.handleClick}
				isLoginButtonClicked={this.state.isLoginButtonClicked}
				isSignUpButtonClicked={this.state.isSignUpButtonClicked}
				showPageOverlay={
					this.state.isLoginButtonClicked
						? 'yes'
						: this.state.isSignUpButtonClicked
						? 'yes'
						: 'no'
				}
			>
				{this.props.children}
			</LayoutView>
		);
	}
}

export default LayoutContainer;
