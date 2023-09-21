import PropTypes from 'prop-types';
import styles from './Cart.module.css';
import { clearLocalStorage } from '../../utils';
import { CART_LS_KEY } from '../../constants';

function Cart({ counter, setInCartProducts }) {
	const handleClearLs = () => {
		clearLocalStorage(CART_LS_KEY);
		setInCartProducts([]);
	};

	return (
		<div
			className={styles.cart}
			onClick={handleClearLs}
			title='click to clear cart items'>
			Cart <span className={styles.counter}>{counter}</span>
		</div>
	);
}

Cart.propTypes = {
	counter: PropTypes.number,
	setInCartProducts: PropTypes.func,
};

Cart.defaultTypes = {
	counter: 0,
	setInCartProducts: () => {},
};

export default Cart;
