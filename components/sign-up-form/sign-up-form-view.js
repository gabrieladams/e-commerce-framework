import OpenSourceForm from '../../open-source/form/form';
import OpenSourceFormTitle from '../../open-source/form-title/form-title';
import OpenSourceFormField from '../../open-source/form-field/form-field';
import OpenSourceInput from '../../open-source/input/input';
import OpenSourceFormButton from '../../open-source/form-button/form-button';
import OpenSourceInputLabel from '../../open-source/input-label/input-label';
// login form css module
import styles from '../../styles/form.module.css';

const SignUpFormView = () => {
	const formFields = ['email', 'password', 'confirm password'];

	return (
		<OpenSourceForm className={styles.form}>
			<OpenSourceFormTitle className={styles.formTitle}>
				Sign Up
			</OpenSourceFormTitle>
			{formFields.map((formField) => {
				if (formField === 'confirm password') {
					return (
						<OpenSourceFormField
							className={formField === 'confirm password' && 'mb-16'}
						>
							<OpenSourceInputLabel
								htmlFor={formField}
								className={styles.inputLabel}
							>
								{formField}
							</OpenSourceInputLabel>
							<OpenSourceInput
								type='password'
								name='confirmPassword'
								id={formField}
								className={styles.input}
							/>
						</OpenSourceFormField>
					);
				} else {
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
				}

				return;
			})}
			<OpenSourceFormButton className={styles.formButton}>
				Sign Up
			</OpenSourceFormButton>
		</OpenSourceForm>
	);
};

export default SignUpFormView;
