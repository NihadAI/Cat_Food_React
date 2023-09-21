import DefaultScreen from '../defaultScreen/DefaultScreen';
import ProductCard from '../productsCard/ProductsCard';
import styles from './ProductsList.module.css';

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

export default ProductsList;
