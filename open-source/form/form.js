const OpenSourceForm = ({ style, className, children }) => {
	return (
		<form style={style} className={className}>
			{children}
		</form>
	);
};

export default OpenSourceForm;

// const OpenSourceStyledForm = styled.form``;
