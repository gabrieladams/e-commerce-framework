const OpenSourceInputLabel = ({ htmlFor, className, children }) => {
	return (
		<label htmlFor={htmlFor} className={className}>
			{children}
		</label>
	);
};

export default OpenSourceInputLabel;
