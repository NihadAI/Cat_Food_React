import { createSlice } from '@reduxjs/toolkit';
import { MODAL_TITLE } from '../../constants/modalConstants';

const initialState = {
	isModalOpen: false,
	modalAction: {
		button: <></>,
		title: MODAL_TITLE,
		content: '',
	},
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModal(state) {
			state.isModalOpen = !state.isModalOpen;
			document.body.style.overflow = state.isModalOpen ? 'hidden' : '';
		},
		setModalAction(state, action) {
			state.modalAction.content = action.payload.content;
			state.modalAction.button = action.payload.button;
		},
	},
});

export const { setModal, setModalAction } = modalSlice.actions;
export default modalSlice.reducer;
