import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsItem.module.css';
import { ADD_MODAL_ACTION } from '../../constants';

function ProductsItem({
	handleToggleModal,
	setCurrentProduct,
	targetId,
	setModalAction,
}) {
	const [item, setItem] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('../data/products.json');
				const data = await response.json();

				const targetItem = data.find(
					(item) => item.vendor === parseInt(targetId)
				);

				if (targetItem) setItem(targetItem);
				else throw new Error('Item not found');
			} catch (err) {
				console.log(err);
			}
		})();
	}, [targetId]);

	const handleOrderBtn = () => {
		setCurrentProduct(item);
		setModalAction(ADD_MODAL_ACTION);
		handleToggleModal();
	};

	return (
		<article className={styles.article}>
			<img
				className={styles.image}
				src={`../${item?.src}`}
				alt={item?.name}
			/>
			<div>
				<h1 className={styles.title}>{item?.name}</h1>

				<h2 className={styles.title}>Desctiption</h2>
				<p className={styles.text}>{item?.desc}</p>

				<h3 className={styles.title}>Price:</h3>
				<p className={styles.text}>{item?.price} ₴</p>
			</div>
			<button
				className={styles.button}
				onClick={handleOrderBtn}>
				Add to cart
			</button>
		</article>
	);
}

ProductsItem.propTypes = {
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	targetId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	setModalAction: PropTypes.func,
};
ProductsItem.defaultProps = {
	handleToggleModal: () => {},
	setCurrentProduct: () => {},
	targetId: 1,
	setModalAction: () => {},
};

export default ProductsItem;
