import { ButtonStyled, DefaultButton } from './Button.styled';
import PropTypes from 'prop-types';

function Button({ handleBtnClick, text, type, size }) {
	return type ? (
		<DefaultButton
			size={size}
			onClick={handleBtnClick}>
			{text}
		</DefaultButton>
	) : (
		<ButtonStyled onClick={handleBtnClick}>{text}</ButtonStyled>
	);
}

Button.propTypes = {
	size: PropTypes.string,
	type: PropTypes.string,
	handleBtnClick: PropTypes.func,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Button.defaultProps = {
	size: '30px',
	type: '',
	text: '',
	handleBtnClick: () => {},
};

export default Button;
