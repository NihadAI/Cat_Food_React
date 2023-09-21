import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import currentsReducer from '../redux/slices/currentsSlice';
import cartReducer from '../redux/slices/cartSlice';
import favouritesReducer from '../redux/slices/favouritesSlice';
import modalReducer from '../redux/slices/modalSlice';
import itemsReducer from '../redux/slices/itemsSlice';

function render(ui, options = {}) {
	const initialState = {
		currents: { defaultScreenText: 'Test Screen Text' },
		modal: {
			isModalOpen: false,
			modalAction: {
				title: 'Test Title',
				content: 'Test Content',
				button: <button>Test button</button>,
			},
			isShadowDisabled: false,
		},
		cart: { items: [], count: 0, fullPrice: 0 },
		favourites: { items: [], count: 0 },
		items: { items: [], isLoading: true },
	};

	screen.debug();

	const testStore = configureStore({
		reducer: {
			currents: currentsReducer,
			cart: cartReducer,
			favourites: favouritesReducer,
			modal: modalReducer,
			items: itemsReducer,
		},
		preloadedState: initialState,
	});

	const Wrapper = ({ children }) => (
		<MemoryRouter initialEntries={['/test-route']}>
			<Provider store={testStore}>{children}</Provider>
		</MemoryRouter>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export { render, screen };
