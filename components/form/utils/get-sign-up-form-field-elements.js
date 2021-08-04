import OpenSourceFormField from '../../../open-source/form-field/form-field';
import OpenSourceInputLabel from '../../../open-source/input-label/input-label';
import OpenSourceInput from '../../../open-source/input/input';
// form css module
import styles from '../../../styles/form.module.css';

function getSignUpFormFieldElements(formFields, inputs, handleInputChange) {
	const { email, password, confirmPassword } = inputs;

	return formFields.map((formField) => {
		if (formField === 'email' || formField === 'password') {
			return (
				<OpenSourceFormField key={formField} className='mb-12'>
					<OpenSourceInputLabel
						htmlFor={formField}
						className={styles.inputLabel}
					>
						{formField}
					</OpenSourceInputLabel>
					<OpenSourceInput
						type={formField}
						name={formField}
						value={formField === 'email' ? email : password}
						id={formField}
						className={styles.input}
						onChange={handleInputChange}
					/>
				</OpenSourceFormField>
			);
		} else {
			return (
				<OpenSourceFormField key={formField} className='mb-16'>
					<OpenSourceInputLabel
						htmlFor='confirm-password'
						className={styles.inputLabel}
					>
						{formField}
					</OpenSourceInputLabel>
					<OpenSourceInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						id='confirm-password'
						className={styles.input}
						onChange={handleInputChange}
					/>
				</OpenSourceFormField>
			);
		}
	});
}

export default getSignUpFormFieldElements;
