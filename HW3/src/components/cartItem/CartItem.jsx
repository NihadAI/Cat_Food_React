import styles from './CartItem.module.css';
import PropTypes from 'prop-types';
import { ADD_MODAL_ACTION, REMOVE_MODAL_ACTION } from '../../constants';
import { Link } from 'react-router-dom';
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs';

function CartItem({
	handleToggleModal,
	setCurrentProduct,
	item,
	setModalAction,
}) {
	const handleRemoveItem = () => {
		setModalAction(REMOVE_MODAL_ACTION);
		setCurrentProduct(item);
		handleToggleModal();
	};

	const handleAddMore = () => {
		setModalAction(ADD_MODAL_ACTION);
		setCurrentProduct(item);
		handleToggleModal();
	};

	const totalItemPrice = item?.count * item?.price;
	const addBtnText = <BsFillCartPlusFill size={80} />;
	const removeBtnText = <BsFillCartDashFill size={80} />;

	return (
		<>
			<article className={styles.article}>
				<img
					src={item?.src}
					alt={item?.name}
					className={styles.image}
				/>
				<div className={styles.info}>
					<Link
						className={styles.name}
						to={`/products/${item?.vendor}`}>
						{item?.name}
					</Link>

					<p className={styles.text}>
						<span className={styles.title}>Description:</span> {item?.desc}
					</p>
					<p className={styles.text}>
						<span className={styles.title}>Amount:</span> {item?.count}
					</p>
					<p className={styles.text}>
						<span className={styles.title}>Total price:</span> {totalItemPrice}{' '}
						$
					</p>
				</div>
				<div className={styles.actions}>
					<button
						className={styles.button}
						onClick={handleAddMore}>
						{addBtnText}
					</button>
					<button
						className={styles.button}
						onClick={handleRemoveItem}>
						{removeBtnText}
					</button>
				</div>
			</article>
		</>
	);
}

CartItem.propTypes = {
	item: PropTypes.object,
	setCurrentProduct: PropTypes.func,
	handleToggleModal: PropTypes.func,
	setModalAction: PropTypes.func,
};
CartItem.defaultProps = {
	item: {},
	setCurrentProduct: () => {},
	handleToggleModal: () => {},
	setModalAction: () => {},
};

export default CartItem;
