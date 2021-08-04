import OpenSourceForm from '../../open-source/form/form';
import OpenSourceFormTitle from '../../open-source/form-title/form-title';
import OpenSourceFormButton from '../../open-source/form-button/form-button';
// utility functions
import getLoginFormFieldElements from './utils/get-login-form-field-elements';
import getSignUpFormFieldElements from './utils/get-sign-up-form-field-elements';
// form css module
import styles from '../../styles/form.module.css';

const FormView = ({
	inputs,
	handleInputChange,
	submitForm,
	isLoginButtonClicked,
	isSignUpButtonClicked,
}) => {
	console.log(submitForm);

	const formFields = ['email', 'password', 'confirm password'];

	let formTitleText = isLoginButtonClicked
		? 'Login'
		: isSignUpButtonClicked
		? 'Sign Up'
		: '';

	let formFieldElements = isLoginButtonClicked
		? getLoginFormFieldElements(formFields, inputs, handleInputChange)
		: isSignUpButtonClicked
		? getSignUpFormFieldElements(formFields, inputs, handleInputChange)
		: [];

	let formButtonText = isLoginButtonClicked
		? 'Login'
		: isSignUpButtonClicked
		? 'Sign Up'
		: '';

	let initFormAnimation = isLoginButtonClicked
		? true
		: isSignUpButtonClicked
		? true
		: false;

	return (
		<OpenSourceForm
			style={
				initFormAnimation
					? {
							display: 'block',
							animationName: 'slideInFromTop',
							animationDuration: '1.2s',
					  }
					: { display: 'none' }
			}
			className={styles.form}
		>
			<OpenSourceFormTitle className={styles.formTitle}>
				{formTitleText}
			</OpenSourceFormTitle>
			{formFieldElements}
			<OpenSourceFormButton className={styles.formButton} onSubmit={submitForm}>
				{formButtonText}
			</OpenSourceFormButton>
		</OpenSourceForm>
	);
};

export default FormView;
