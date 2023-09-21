import { createSlice } from '@reduxjs/toolkit';
import { MODAL_TITLE } from '../../constants/modalConstants';

export const initialState = {
	isModalOpen: false,
	modalAction: {
		button: <></>,
		title: '',
		content: null,
	},
	isShadowDisabled: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModal(state) {
			state.isModalOpen = !state.isModalOpen;
			document.body.style.overflow = state.isModalOpen ? 'hidden' : '';
			state.isShadowDisabled = state.isModalOpen && state.isShadowDisabled;
		},
		disableShadow(state) {
			state.isShadowDisabled = true;
		},
		setModalAction(state, action) {
			state.modalAction.content = action.payload.content;
			state.modalAction.button = action.payload.button;
			state.modalAction.title = action.payload.title
				? action.payload.title
				: MODAL_TITLE;
		},
	},
});

export const { setModal, setModalAction, disableShadow } = modalSlice.actions;
export default modalSlice.reducer;
