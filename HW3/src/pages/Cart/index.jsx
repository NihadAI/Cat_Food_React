import styles from './Cart.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import CartList from '../../components/cartList';
import { CLEAR_CART_MODAL_ACTION } from '../../constants';
import { BsFillCartXFill, BsFillCartCheckFill } from 'react-icons/bs';

const CartPage = ({
	handleToggleModal,
	setCurrentProduct,
	inCartProducts,
	setModalAction,
	fullPrice,
}) => {
	const handleClearCart = () => {
		setModalAction(CLEAR_CART_MODAL_ACTION);
		handleToggleModal();
	};

	return (
		<>
			{!!inCartProducts.length && (
				<div className={styles.header}>
					<p className={styles['full-price']}>Full price: {fullPrice} $</p>

					<button
						className={styles.button}
						onClick={handleClearCart}>
						Clear all items
						<BsFillCartXFill size={40} />
					</button>

					<button
						className={styles.button}
						style={{ cursor: 'not-allowed' }}>
						Order <BsFillCartCheckFill size={40} />
					</button>
				</div>
			)}
			<CartList
				handleToggleModal={handleToggleModal}
				setCurrentProduct={setCurrentProduct}
				inCartProducts={inCartProducts}
				setModalAction={setModalAction}
			/>
		</>
	);
};

CartPage.propTypes = {
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	inCartProducts: PropTypes.array,
	setModalAction: PropTypes.func,
	fullPrice: PropTypes.number,
};
CartPage.defaultProps = {
	setInCartProducts: () => {},
	handleToggleModal: () => {},
	inCartProducts: [],
	setModalAction: () => {},
	fullPrice: 0,
};

export default CartPage;
