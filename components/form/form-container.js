import { Component } from 'react';
import FormView from './form-view';

class FormContainer extends Component {
	state = {
		inputs: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	};

	handleInputChange = (e) => {
		const updatedInputs = {};

		// loop through the keys in this.state.inputs objects
		for (let key in this.state.inputs) {
			// check for a key that matches the targeted input's name then insert a property with the same key and the targeted input's value
			if (key === e.target.name) {
				updatedInputs[key] = e.target.value;
			} else {
				updatedInputs[key] = this.state.inputs[key];
			}
		}

		this.setState({ inputs: updatedInputs });
	};

	submitForm = (e) => {
		// prevent default behaviour
		e.preventDefault();

		console.log(this.state.inputs);
	};

	render() {
		const { isLoginButtonClicked, isSignUpButtonClicked } = this.props;

		return (
			<FormView
				inputs={this.state.inputs}
				handleInputChange={this.handleInputChange}
				submitForm={this.submitForm}
				isLoginButtonClicked={isLoginButtonClicked}
				isSignUpButtonClicked={isSignUpButtonClicked}
			/>
		);
	}
}

export default FormContainer;
