import styles from './Cart.module.css';
import React from 'react';
import { BsFillCartXFill, BsFillCartCheckFill } from 'react-icons/bs';
import {
	disableShadow,
	setModal,
	setModalAction,
} from '../../redux/slices/modalSlice';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearCartItems } from '../../redux/slices/cartSlice';
import { CLEAR_CART_CONTENT } from '../../constants/modalConstants';
import { NO_CART_ITEMS_TEXT } from '../../constants/defaultTextConstants';
import { setDefaultScreenText } from '../../redux/slices/currentsSlice';
import { useEffect } from 'react';
import CartList from '../../components/cartList/CartList';
import { CONFIRM_MODAL_BTN_NAME, PRICE_TEMPLATE } from '../../constants';
import OrderForm from '../../components/orderForm/OrderForm';

const CartPage = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items, shallowEqual);
	const fullPrice = useSelector((state) => state.cart.fullPrice);

	const fullPriceText = `Full price: ${PRICE_TEMPLATE(fullPrice)}`;

	useEffect(() => {
		dispatch(setDefaultScreenText(NO_CART_ITEMS_TEXT));
	}, [dispatch]);

	const handleCompleteOrder = () => {
		dispatch(
			setModalAction({
				content: <OrderForm />,
				title: 'Order completion',
			})
		);
		dispatch(disableShadow());
		dispatch(setModal());
	};

	const handleClearCart = () => {
		dispatch(
			setModalAction({
				button: (
					<button
						onClick={() => {
							dispatch(clearCartItems());
							dispatch(setModal());
						}}>
						{CONFIRM_MODAL_BTN_NAME}
					</button>
				),
				content: CLEAR_CART_CONTENT,
			})
		);
		dispatch(setModal());
	};

	return (
		<>
			{!!cartItems.length && (
				<div className={styles.header}>
					<p className={styles['full-price']}>{fullPriceText}</p>

					<button
						className={styles.button}
						onClick={handleClearCart}>
						Clear all items
						<BsFillCartXFill size={40} />
					</button>

					<button
						className={styles.button}
						onClick={handleCompleteOrder}>
						Checkout
						<BsFillCartCheckFill size={40} />
					</button>
				</div>
			)}
			<CartList cartItems={cartItems} />
		</>
	);
};

export default CartPage;
