import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import FavPage from './pages/Favourites';
import ProductPage from './pages/Product';
import PropTypes from 'prop-types';

const AppRoutes = ({
	handleToggleModal,
	setCurrentProduct,
	setInFavProducts,
	inFavProducts,
	inCartProducts,
	setModalAction,
	fullPrice,
}) => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<HomePage
						handleToggleModal={handleToggleModal}
						setCurrentProduct={setCurrentProduct}
						setInFavProducts={setInFavProducts}
						inFavProducts={inFavProducts}
						setModalAction={setModalAction}
					/>
				}
			/>
			<Route
				path='/cart'
				element={
					<CartPage
						handleToggleModal={handleToggleModal}
						setCurrentProduct={setCurrentProduct}
						inCartProducts={inCartProducts}
						setModalAction={setModalAction}
						fullPrice={fullPrice}
					/>
				}
			/>
			<Route
				path='/favourites'
				element={
					<FavPage
						inFavProducts={inFavProducts}
						setInFavProducts={setInFavProducts}
						handleToggleModal={handleToggleModal}
						setCurrentProduct={setCurrentProduct}
						setModalAction={setModalAction}
					/>
				}
			/>
			<Route
				path='/products/:targetId'
				element={
					<ProductPage
						handleToggleModal={handleToggleModal}
						setCurrentProduct={setCurrentProduct}
						setModalAction={setModalAction}
					/>
				}
			/>
		</Routes>
	);
};

AppRoutes.propTypes = {
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	setInFavProducts: PropTypes.func,
	inFavProducts: PropTypes.array,
	inCartProducts: PropTypes.array,
	setModalAction: PropTypes.func,
	fullPrice: PropTypes.number,
};
AppRoutes.defaultProps = {
	handleToggleModal: () => {},
	setCurrentProduct: () => {},
	setInFavProducts: () => {},
	inFavProducts: [],
	inCartProducts: [],
	setModalAction: () => {},
	fullPrice: 0,
};

export default AppRoutes;
