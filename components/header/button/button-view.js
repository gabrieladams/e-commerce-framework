const HeaderButtonView = ({ buttonText, handleClick }) => {
	return (
		<button
			className={`${buttonText === 'login' && 'mr-12'} capitalize`}
			onClick={() => handleClick(buttonText)}
		>
			{buttonText}
		</button>
	);
};

export default HeaderButtonView;
