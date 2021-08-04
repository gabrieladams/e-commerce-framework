import OpenSourceFormField from '../../../open-source/form-field/form-field';
import OpenSourceInputLabel from '../../../open-source/input-label/input-label';
import OpenSourceInput from '../../../open-source/input/input';
// form css module
import styles from '../../../styles/form.module.css';

function getLoginFormFieldElements(formFields, inputs, handleInputChange) {
	const { email, password } = inputs;

	return formFields.map((formField) => {
		if (formField === 'email' || formField === 'password') {
			return (
				<OpenSourceFormField
					key={formField}
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
						value={formField === 'email' ? email : password}
						id={formField}
						className={styles.input}
						onChange={handleInputChange}
					/>
				</OpenSourceFormField>
			);
		}
	});
}

export default getLoginFormFieldElements;
