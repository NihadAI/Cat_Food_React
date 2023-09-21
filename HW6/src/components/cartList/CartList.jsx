import styles from './CartList.module.css';
import PropTypes from 'prop-types';
import CartItem from '../cartItem/CartItem';
import { NO_CART_ITEMS_TEXT } from '../../constants/defaultTextConstants';
import DefaultScreen from '../defaultScreen/DefaultScreen';

function CartList({ cartItems }) {
	if (!cartItems.length) {
		return <DefaultScreen defaultText={NO_CART_ITEMS_TEXT} />;
	}

	return (
		<ul className={styles.list}>
			{cartItems?.map((item) => (
				<li
					key={item.vendor}
					className={styles.item}>
					<CartItem item={item} />
				</li>
			))}
		</ul>
	);
}

CartList.propTypes = {
	cartItems: PropTypes.array,
};
CartList.defaultProps = {
	cartItems: [],
};

export default CartList;
