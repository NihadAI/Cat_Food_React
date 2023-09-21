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
import PropTypes from 'prop-types';

function Modal({ handleToggleModal, actions, title, text }) {
	const handleShadowClick = (e) => {
		if (e.target === e.currentTarget) handleToggleModal();
	};

	return (
		<ModalShadow onClick={handleShadowClick}>
			<StopScroll />
			<ModalWrapper>
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
					<Button
						handleBtnClick={handleToggleModal}
						text={<MdClose />}
						type='default'
					/>
				</ModalHeader>
				<ModalBody>
					<ModalText>{text}</ModalText>
				</ModalBody>
				{actions}
			</ModalWrapper>
		</ModalShadow>
	);
}

Modal.propTypes = {
	handleToggleModal: PropTypes.func,
	actions: PropTypes.node,
	title: PropTypes.string,
	text: PropTypes.string,
};

Modal.defaultProps = {
	handleToggleModal: () => {},
	actions: <></>,
	title: 'Modal title',
	text: 'Modal main text',
};

export default Modal;
