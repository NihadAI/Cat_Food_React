import ProductCard from '../productsCard/ProductsCard';
import styles from './ProductsList.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductsList({
	products,
	handleToggleModal,
	setCurrentProduct,
	setInFavProducts,
	inFavProducts,
	defaultText,
	setModalAction,
}) {
	if (products.length) {
		return (
			<ul className={styles.list}>
				{products?.map((item) => (
					<li
						key={item.vendor}
						className={styles.item}>
						<ProductCard
							item={item}
							handleToggleModal={handleToggleModal}
							setCurrentProduct={setCurrentProduct}
							setInFavProducts={setInFavProducts}
							inFavProducts={inFavProducts}
							setModalAction={setModalAction}
						/>
					</li>
				))}
			</ul>
		);
	} else {
		return (
			<>
				<p>{defaultText}</p>
				<Link to='/'>Return to Home page</Link>
			</>
		);
	}
}

ProductsList.propTypes = {
	products: PropTypes.array,
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	setInFavProducts: PropTypes.func,
	inFavProducts: PropTypes.array,
	defaultText: PropTypes.string,
	setModalAction: PropTypes.func,
};
ProductsList.defaultProps = {
	products: [],
	handleToggleModal: () => {},
	setCurrentProduct: () => {},
	setInFavProducts: () => {},
	inFavProducts: [],
	defaultText:
		'There are no products available right now. Please, check out later 🐈‍⬛',
	setModalAction: () => {},
};

export default ProductsList;
