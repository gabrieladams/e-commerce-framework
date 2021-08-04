import HeaderButtonView from './button/button-view';

const Headerview = ({ handleClick }) => {
	const buttonTexts = ['login', 'sign up'];

	return (
		<header className='flex justify-end px-24 py-8 shadow-md'>
			{buttonTexts.map((buttonText) => {
				return (
					<HeaderButtonView buttonText={buttonText} handleClick={handleClick} />
				);
			})}
		</header>
	);
};

export default Headerview;
