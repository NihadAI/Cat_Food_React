import React from 'react';
import { ButtonStyled, DefaultButton } from './Button.styled';

function Button({ size, bgColor, borderColor, text, type, handleBtnClick }) {
	return type ? (
		<DefaultButton
			size={size}
			bgColor={bgColor}
			onClick={handleBtnClick}>
			{text}
		</DefaultButton>
	) : (
		<ButtonStyled
			bgColor={bgColor}
			borderColor={borderColor}
			onClick={handleBtnClick}>
			{text}
		</ButtonStyled>
	);
}

export default Button;
