import { createSlice } from '@reduxjs/toolkit';
import {
	clearLocalStorage,
	getStateFromLocalStorage,
	saveStateToLocalStorage,
} from '../../utils';
import { FAV_LS_KEY } from '../../constants';

const initialState = {
	items: [],
	count: 0,
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		setFavouriteItems(state, action) {
			state.items = action.payload;
			state.count = action.payload.length;
		},
		addFavouriteItem(state, action) {
			state.items.push(action.payload);
			state.count++;
			saveStateToLocalStorage(FAV_LS_KEY, state.items);
		},
		removeFavouriteItem(state, action) {
			const index = state.items.findIndex((el) => el.vendor === action.payload);
			state.items.splice(index, 1);
			state.count--;
			state.items.length
				? saveStateToLocalStorage(FAV_LS_KEY, state.items)
				: clearLocalStorage(FAV_LS_KEY);
		},
		clearFavouriteItems(state) {
			clearLocalStorage(FAV_LS_KEY);
			state.items = [];
			state.count = 0;
		},
	},
});

export const fetchFavouriteItems = () => async (dispatch) => {
	try {
		const favFromLs = await getStateFromLocalStorage(FAV_LS_KEY);

		if (favFromLs) {
			dispatch(setFavouriteItems(favFromLs));
		}
	} catch (error) {
		console.log(error);
	}
};

export const {
	setFavouriteItems,
	addFavouriteItem,
	removeFavouriteItem,
	clearFavouriteItems,
} = favouritesSlice.actions;
export default favouritesSlice.reducer;
