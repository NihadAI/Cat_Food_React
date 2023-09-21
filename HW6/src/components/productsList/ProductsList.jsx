import { useContext } from 'react';
import DefaultScreen from '../defaultScreen/DefaultScreen';
import CardViewProductsItem from '../productsItem/cardView';
import TableViewProductsItem from '../productsItem/tableView/ProductsItem';
import styles from './ProductsList.module.css';
import { PropTypes } from 'prop-types';
import ProductsViewContext from '../../context/ProductsView';

function ProductsList({ products }) {
	const { view } = useContext(ProductsViewContext);

	if (!products.length) {
		return <DefaultScreen />;
	}

	return (
		<ul
			className={
				view === 'table'
					? styles['list__table-view']
					: styles['list__card-view']
			}>
			{view === 'table' && (
				<li className={styles['item__table-view']}>
					<div className={styles['column-names']}>
						<span>image</span>
						<span>name</span>
						<span>price</span>
						<span>vendor</span>
						<span>actions</span>
					</div>
				</li>
			)}
			{products.map((item) => (
				<li
					key={item.vendor}
					className={view === 'table' ? styles['item__table-view'] : ''}>
					{view === 'table' ? (
						<TableViewProductsItem item={item} />
					) : (
						<CardViewProductsItem item={item} />
					)}
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
