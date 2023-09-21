import Button from '../button';
import ActionsStyled from './Actions.styled';

function Actions({
	handleModalClose,
	confirmText,
	cancelText,
	secondaryOptionText,
	mainActionText,
	secondaryActionText,
}) {
	const handleModalAction = (e) => {
		const actionText = mainActionText;
		console.log(actionText);
		handleModalClose();
	};
	const handleSecondaryModalAction = (e) => {
		const actionText = secondaryActionText;
		console.log(actionText);
		handleModalClose();
	};

	return (
		<ActionsStyled>
			{confirmText && (
				<Button
					borderColor='#000'
					text={confirmText}
					handleBtnClick={handleModalAction}
				/>
			)}
			{secondaryOptionText && (
				<Button
					borderColor='#000'
					text={secondaryOptionText}
					handleBtnClick={handleSecondaryModalAction}
				/>
			)}
			{cancelText && (
				<Button
					borderColor='#000'
					text={cancelText}
					handleBtnClick={handleModalClose}
				/>
			)}
		</ActionsStyled>
	);
}

export default Actions;
