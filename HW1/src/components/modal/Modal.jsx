import Button from '../button';
import { MdClose } from 'react-icons/md';
import {
	ModalShadow,
	ModalWrapper,
	ModalHeader,
	ModalBody,
	ModalTitle,
	ModalText,
	StopScroll,
} from './Modal.styled';

function Modal({ handleModalClose, closeButton, header, text, actions }) {
	const closeButtonSize = '30px';

	const handleShadowClick = (e) => {
		if (e.target === e.currentTarget) handleModalClose();
	};

	return (
		<ModalShadow onClick={handleShadowClick}>
			<StopScroll />
			<ModalWrapper>
				<ModalHeader hasCloseButton={closeButton}>
					<ModalTitle>{header}</ModalTitle>
					{closeButton && (
						<Button
							handleBtnClick={handleModalClose}
							size={closeButtonSize}
							text={<MdClose />}
							type='default'
						/>
					)}
				</ModalHeader>
				<ModalBody>
					<ModalText>{text}</ModalText>
				</ModalBody>
				{actions}
			</ModalWrapper>
		</ModalShadow>
	);
}

export default Modal;
