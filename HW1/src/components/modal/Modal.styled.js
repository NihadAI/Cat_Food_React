import styled, { createGlobalStyle } from 'styled-components';

const StopScroll = createGlobalStyle`
body {
	overflow: hidden;
}
`;

const ModalShadow = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #000000a0;
`;

const ModalWrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	padding: 0 0 20px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 515px;
	border-radius: 4px;
	background-color: #fff;
`;

const ModalHeader = styled.div`
	padding: 0 25px;
	display: flex;
	justify-content: ${(props) =>
		props.hasCloseButton ? 'space-between' : 'center'};
	align-items: center;
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
	background-color: #000;
	color: white;
	fill: white;
`;

const ModalBody = styled.div`
	padding: 0 30px;
	text-align: center;
`;

const ModalTitle = styled.h2`
	font-size: 1.4em;
	line-height: 1;
`;

const ModalText = styled.p`
	margin: 0;
`;

export {
	ModalShadow,
	ModalWrapper,
	ModalHeader,
	ModalBody,
	ModalTitle,
	ModalText,
	StopScroll,
};
