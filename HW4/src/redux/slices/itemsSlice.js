import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	isLoading: true,
};

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
	},
});

export const fetchItems = () => async (dispatch) => {
	try {
		const response = await fetch('../data/products.json');
		const data = await response.json();

		dispatch(setItems(data));
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setIsLoading(false));
	}
};

export const { setItems, setIsLoading } = itemsSlice.actions;
export default itemsSlice.reducer;
