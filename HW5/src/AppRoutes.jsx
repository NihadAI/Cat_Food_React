import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import FavPage from './pages/Favourites';
import ProductsItem from './components/productsItem/ProductsItem';
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
				element={<ProductsItem />}
			/>
			<Route
				path='*'
				element={<DefaultPage />}
			/>
		</Routes>
	);
};

export default AppRoutes;
