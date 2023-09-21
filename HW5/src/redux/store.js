import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import currentsReducer from './slices/currentsSlice';
import modalReducer from './slices/modalSlice';
import itemsReducer from './slices/itemsSlice';
import favouritesReducer from './slices/favouritesSlice';

const store = configureStore({
	reducer: {
		items: itemsReducer,
		modal: modalReducer,
		cart: cartReducer,
		favourites: favouritesReducer,
		currents: currentsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
