import styles from './CartItem.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs';
import { setModal, setModalAction } from '../../redux/slices/modalSlice';
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../../redux/slices/cartSlice';
import {
	ADD_TO_CART_CONTENT_TEMPLATE,
	REMOVE_FROM_CART_CONTENT_TEMPLATE,
} from '../../constants/modalConstants';
import { CONFIRM_MODAL_BTN_NAME, PRICE_TEMPLATE } from '../../constants';

function CartItem({ item }) {
	const dispatch = useDispatch();

	const handleRemoveItem = () => {
		dispatch(
			setModalAction({
				button: (
					<button
						onClick={() => {
							dispatch(removeCartItem(item.vendor));
							dispatch(setModal());
						}}>
						{CONFIRM_MODAL_BTN_NAME}
					</button>
				),
				content: REMOVE_FROM_CART_CONTENT_TEMPLATE(item.name),
			})
		);
		dispatch(setModal());
	};
	const handleAddMore = () => {
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

	const totalItemPrice = PRICE_TEMPLATE(item?.count * item?.price);

	return (
		<>
			<article className={styles.article}>
				<img
					src={item?.src}
					alt={item?.name}
					className={styles.image}
				/>
				<div className={styles.info}>
					<NavLink
						className={styles.name}
						to={`/products/${item?.vendor}`}>
						{item?.name}
					</NavLink>

					<p className={styles.text}>
						<span className={styles.title}>Description:</span> {item?.desc}
					</p>
					<p className={styles.text}>
						<span className={styles.title}>Amount:</span> {item?.count}
					</p>
					<p className={styles.text}>
						<span className={styles.title}>Total price:</span> {totalItemPrice}
					</p>
				</div>
				<div className={styles.actions}>
					<button
						className={styles.button}
						onClick={handleAddMore}>
						<BsFillCartPlusFill size={80} />
					</button>
					<button
						className={styles.button}
						onClick={handleRemoveItem}>
						<BsFillCartDashFill size={80} />
					</button>
				</div>
			</article>
		</>
	);
}

CartItem.propTypes = {
	item: PropTypes.object,
};
CartItem.defaultProps = {
	item: {},
};

export default CartItem;
