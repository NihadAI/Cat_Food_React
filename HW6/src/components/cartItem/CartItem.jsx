import styles from './CartItem.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { PRICE_TEMPLATE } from '../../constants';
import ItemTemplate from '../itemTemplate';

function CartItem({ item, sharedData }) {
	const fullPrice = useSelector((state) => state.cart.fullPrice);
	const totalItemPrice = PRICE_TEMPLATE(fullPrice);

	const { handleAddMore, handleRemoveItem } = sharedData;

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
	sharedData: PropTypes.object.isRequired,
};
CartItem.defaultProps = {
	item: {},
};

export default ItemTemplate(CartItem);
