import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import FavPage from './pages/Favourites';
import ProductInfoPage from './components/productInfoPage';
import DefaultPage from './pages/Default';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<HomePage />}
			/>
			<Route
				path='/cart'
				element={<CartPage />}
			/>
			<Route
				path='/favourites'
				element={<FavPage />}
			/>
			<Route
				path='/products/:targetId'
				element={<ProductInfoPage />}
			/>
			<Route
				path='*'
				element={<DefaultPage />}
			/>
		</Routes>
	);
};

export default AppRoutes;
