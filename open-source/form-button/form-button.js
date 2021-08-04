const OpenSourceFormButton = ({ className, onSubmit, children }) => {
	console.log(onSubmit);

	return (
		<button type='submit' className={className} onSubmit={onSubmit}>
			{children}
		</button>
	);
};

export default OpenSourceFormButton;
