import ProductCard from '../productsCard/ProductsCard';
import styles from './ProductsList.module.css';
import PropTypes from 'prop-types';

function ProductsList({
	products,
	handleToggleModal,
	setCurrentProduct,
	setInFavProducts,
	inFavProducts,
}) {
	return (
		<ul className={styles.list}>
			{products.map((item) => (
				<li
					key={item.vendor}
					className={styles.item}>
					<ProductCard
						item={item}
						handleToggleModal={handleToggleModal}
						setCurrentProduct={setCurrentProduct}
						setInFavProducts={setInFavProducts}
						inFavProducts={inFavProducts}
					/>
				</li>
			))}
		</ul>
	);
}

ProductsList.propTypes = {
	products: PropTypes.array,
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	setInFavProducts: PropTypes.func,
	inFavProducts: PropTypes.array,
};
ProductsList.defaultProps = {
	products: [],
	handleToggleModal: () => {},
	setCurrentProduct: () => {},
	setInFavProducts: () => {},
	inFavProducts: [],
};

export default ProductsList;
