import React, { useEffect, useState } from 'react';
import ProductsList from '../../components/productsList';
import PropTypes from 'prop-types';

const HomePage = ({
	handleToggleModal,
	setCurrentProduct,
	setInFavProducts,
	inFavProducts,
	setModalAction,
}) => {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('data/products.json');
				const data = await response.json();
				setAllProducts(data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	return (
		<ProductsList
			products={allProducts}
			handleToggleModal={handleToggleModal}
			setCurrentProduct={setCurrentProduct}
			setInFavProducts={setInFavProducts}
			inFavProducts={inFavProducts}
			setModalAction={setModalAction}
		/>
	);
};

HomePage.propTypes = {
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	setInFavProducts: PropTypes.func,
	inFavProducts: PropTypes.array,
	setModalAction: PropTypes.func,
};
HomePage.defaultProps = {
	handleToggleModal: () => {},
	setCurrentProduct: () => {},
	setInFavProducts: () => {},
	setModalAction: () => {},
	inFavProducts: [],
};

export default HomePage;
