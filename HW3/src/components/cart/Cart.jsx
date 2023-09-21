import PropTypes from 'prop-types';
import styles from './Cart.module.css';

function Cart({ counter }) {
	return (
		<div className={styles.cart}>
			Cart <span className={styles.counter}>{counter}</span>
		</div>
	);
}

Cart.propTypes = {
	counter: PropTypes.number,
};

Cart.defaultTypes = {
	counter: 0,
};

export default Cart;
