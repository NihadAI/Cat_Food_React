import Button from '../button';
import ActionsStyled from './Actions.styled';
import PropTypes from 'prop-types';

function Actions({ callbackFunction, handleToggleModal }) {
	const handleConfirm = () => {
		callbackFunction();
		handleToggleModal();
	};

	return (
		<ActionsStyled>
			<Button
				handleBtnClick={handleConfirm}
				text='Ok'
			/>
			<Button
				handleBtnClick={handleToggleModal}
				text='Cancel'
			/>
		</ActionsStyled>
	);
}

Actions.propTypes = {
	callbackFunction: PropTypes.func,
	handleToggleModal: PropTypes.func,
};

Actions.defaultProps = {
	callbackFunction: () => {},
	handleToggleModal: () => {},
};

export default Actions;
