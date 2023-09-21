import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	defaultScreenText: '',
};

const currentsSlice = createSlice({
	name: 'currents',
	initialState,
	reducers: {
		setDefaultScreenText(state, action) {
			state.defaultScreenText = action.payload;
		},
	},
});

export const { setDefaultScreenText } = currentsSlice.actions;
export default currentsSlice.reducer;
