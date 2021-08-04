const OpenSourceInput = ({ type, name, value, id, className, onChange }) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			id={id}
			className={className}
			onChange={onChange}
		/>
	);
};

export default OpenSourceInput;
