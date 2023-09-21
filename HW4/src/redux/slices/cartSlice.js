import { createSlice } from '@reduxjs/toolkit';
import {
	clearLocalStorage,
	getStateFromLocalStorage,
	saveStateToLocalStorage,
} from '../../utils';
import { CART_LS_KEY } from '../../constants';

const initialState = {
	items: [],
	count: 0,
	fullPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,

	reducers: {
		setCartItems: (state, action) => {
			state.items = action.payload;
			for (let i = 0; i < state.items.length; i++) {
				state.count += state.items[i].count;
				state.fullPrice += state.items[i].count * state.items[i].price;
			}
		},

		addCartItem(state, action) {
			const index = state.items.findIndex(
				(el) => el.vendor === action.payload.vendor
			);

			if (index !== -1) {
				state.items[index].count++;
			} else {
				state.items.push({ count: 1, ...action.payload });
			}

			state.count++;
			state.fullPrice += action.payload.price;
			saveStateToLocalStorage(CART_LS_KEY, state.items);
		},

		removeCartItem(state, action) {
			const index = state.items.findIndex((el) => el.vendor === action.payload);
			state.fullPrice -= state.items[index].price;

			state.items[index].count--;
			state.count--;

			if (!state.items[index].count) {
				state.items.splice(index, 1);
			}

			state.items.length
				? saveStateToLocalStorage(CART_LS_KEY, state.items)
				: clearLocalStorage(CART_LS_KEY);
		},

		clearCartItems(state) {
			clearLocalStorage(CART_LS_KEY);
			state.items = [];
			state.count = 0;
			state.fullPrice = 0;
		},
	},
});

export const { setCartItems, addCartItem, removeCartItem, clearCartItems } =
	cartSlice.actions;

export const fetchCartItems = () => async (dispatch) => {
	try {
		const cartFromLs = await getStateFromLocalStorage(CART_LS_KEY);

		if (cartFromLs) {
			dispatch(setCartItems(cartFromLs));
		}
	} catch (error) {
		console.log(error);
	}
};

export default cartSlice.reducer;
