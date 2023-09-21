import { useState } from 'react';
import { StringConstants } from './static/StringConstants';
import Button from './components/button';
import Modal from './components/modal';
import Actions from './components/actions';
import './App.css';

function App() {
	const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const handleSaveModalClose = () => {
		setIsSaveModalOpen(!isSaveModalOpen);
	};
	const handleDeleteModalClose = () => {
		setIsDeleteModalOpen(!isDeleteModalOpen);
	};

	return (
		<>
			<div className='buttons'>
				<Button
					text={StringConstants.btnName(StringConstants.MODAL_FIRST_TYPE)}
					handleBtnClick={handleSaveModalClose}
					bgColor='lightblue'
				/>
				<Button
					text={StringConstants.btnName(StringConstants.MODAL_SECOND_TYPE)}
					handleBtnClick={handleDeleteModalClose}
					bgColor='lightgreen'
				/>
			</div>
			{isSaveModalOpen && (
				<Modal
					header={StringConstants.modalTitle(StringConstants.MODAL_FIRST_TYPE)}
					closeButton={true}
					text={StringConstants.MODAL_SAVE_TEXT}
					actions={
						<Actions
							handleModalClose={handleSaveModalClose}
							mainActionText={StringConstants.SAVE_BTN_ACTION}
							confirmText={StringConstants.SAVE_BTN_NAME}
							cancelText={StringConstants.CANCEL_BTN_NAME}
						/>
					}
					handleModalClose={handleSaveModalClose}
				/>
			)}
			{isDeleteModalOpen && (
				<Modal
					header={StringConstants.modalTitle(StringConstants.MODAL_SECOND_TYPE)}
					closeButton={false}
					text={StringConstants.MODAL_DELETE_TEXT}
					actions={
						<Actions
							handleModalClose={handleDeleteModalClose}
							mainActionText={StringConstants.DELETE_BTN_MAIN_ACTION}
							secondaryActionText={StringConstants.DELETE_BTN_SECONDARY_ACTION}
							confirmText={StringConstants.DELETE_BTN_MAIN_NAME}
							cancelText={StringConstants.CANCEL_BTN_NAME}
							secondaryOptionText={StringConstants.DELETE_BTN_SECONDARY_NAME}
						/>
					}
					handleModalClose={handleDeleteModalClose}
				/>
			)}
		</>
	);
}

export default App;
