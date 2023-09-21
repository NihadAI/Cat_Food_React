import styled from 'styled-components';

const DefaultButton = styled.button`
	border: none;
	background-color: transparent;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: inherit;
	cursor: pointer;

	svg {
		fill: inherit;
		width: ${(props) => props.size};
		height: ${(props) => props.size};
	}
`;

const ButtonStyled = styled(DefaultButton)`
	padding: 10px 15px;
	background-color: ${(props) => props.bgColor};
	border: 1px solid ${(props) => props.borderColor};
	border-radius: 4px;
	/* text-transform: capitalize; */

	&:hover,
	&:focus {
		background-color: #bbb;
	}
`;

export { DefaultButton, ButtonStyled };
