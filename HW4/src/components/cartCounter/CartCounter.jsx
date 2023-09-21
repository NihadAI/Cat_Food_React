import { useSelector } from 'react-redux';
import styles from './CartCounter.module.css';

function CartCounter() {
	const cartCounter = useSelector((state) => state.cart.count);

	return (
		<div className={styles.cart}>
			Cart <span className={styles.counter}>{cartCounter}</span>
		</div>
	);
}
export default CartCounter;
