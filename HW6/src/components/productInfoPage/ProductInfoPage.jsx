import React from 'react';
import styles from './ProductInfoPage.module.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setModal, setModalAction } from '../../redux/slices/modalSlice';
import { addCartItem } from '../../redux/slices/cartSlice';
import { ADD_TO_CART_CONTENT_TEMPLATE } from '../../constants/modalConstants';
import {
	ADD_CART_BTN_NAME,
	CONFIRM_MODAL_BTN_NAME,
	PRICE_TEMPLATE,
} from '../../constants';

function ProductInfoPage() {
	const dispatch = useDispatch();
	const { targetId } = useParams();

	const items = useSelector((state) => state.items.items, shallowEqual);
	const item = items.find((el) => el.vendor === parseInt(targetId));

	const priceValue = PRICE_TEMPLATE(item?.price);

	const handleOrderBtn = () => {
		dispatch(
			setModalAction({
				button: (
					<button
						onClick={() => {
							dispatch(addCartItem(item));
							dispatch(setModal());
						}}>
						{CONFIRM_MODAL_BTN_NAME}
					</button>
				),
				content: ADD_TO_CART_CONTENT_TEMPLATE(item.name),
			})
		);
		dispatch(setModal());
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
				<p className={styles.text}>{priceValue}</p>
			</div>
			<button
				className={styles.button}
				onClick={handleOrderBtn}>
				{ADD_CART_BTN_NAME}
			</button>
		</article>
	);
}

export default ProductInfoPage;
