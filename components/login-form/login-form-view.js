import OpenSourceForm from '../../open-source/form/form';
import OpenSourceFormTitle from '../../open-source/form-title/form-title';
import OpenSourceFormField from '../../open-source/form-field/form-field';
import OpenSourceInput from '../../open-source/input/input';
import OpenSourceFormButton from '../../open-source/form-button/form-button';
import OpenSourceInputLabel from '../../open-source/input-label/input-label';
// login form css module
import styles from '../../styles/form.module.css';

const LoginFormView = ({ isButtonClicked }) => {
	let formStyles = {
		transform: 'translate(-50%, -1000px)',
	};

	if (isButtonClicked) {
		formStyles = {
			transform: 'translate(-50%, -50%)',
		};
	}

	const formFields = ['email', 'password'];

	return (
		<OpenSourceForm style={formStyles} className={styles.form}>
			<OpenSourceFormTitle className={styles.formTitle}>
				Login
			</OpenSourceFormTitle>
			{formFields.map((formField) => {
				return (
					<OpenSourceFormField
						className={formField === 'email' ? 'mb-12' : 'mb-16'}
					>
						<OpenSourceInputLabel
							htmlFor={formField}
							className={styles.inputLabel}
						>
							{formField}
						</OpenSourceInputLabel>
						<OpenSourceInput
							type={formField}
							name={formField}
							id={formField}
							className={styles.input}
						/>
					</OpenSourceFormField>
				);
			})}
			<OpenSourceFormButton className={styles.formButton}>
				Login
			</OpenSourceFormButton>
		</OpenSourceForm>
	);
};

export default LoginFormView;
