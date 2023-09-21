import DefaultScreen from '../defaultScreen/DefaultScreen';
import ProductCard from '../productsCard/ProductsCard';
import styles from './ProductsList.module.css';
import { PropTypes } from 'prop-types';

function ProductsList({ products }) {
	if (!products.length) {
		return <DefaultScreen />;
	}

	return (
		<ul className={styles.list}>
			{products.map((item) => (
				<li key={item.vendor}>
					<ProductCard item={item} />
				</li>
			))}
		</ul>
	);
}

ProductsList.propTypes = {
	products: PropTypes.array,
};
ProductsList.defaultProps = {
	products: [],
};

export default ProductsList;
