import styles from './CartList.module.css';
import PropTypes from 'prop-types';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';

function CartList({
	handleToggleModal,
	setCurrentProduct,
	inCartProducts,
	setModalAction,
}) {
	const defaultText =
		'There are no items in cart right now. You can start by adding them on the home page! 🐈‍⬛';

	if (inCartProducts.length)
		return (
			<ul className={styles.list}>
				{inCartProducts?.map((item) => (
					<li
						key={item.vendor}
						className={styles.item}>
						<CartItem
							handleToggleModal={handleToggleModal}
							item={item}
							setCurrentProduct={setCurrentProduct}
							setModalAction={setModalAction}
						/>
					</li>
				))}
			</ul>
		);
	else
		return (
			<>
				<p>{defaultText}</p>
				<Link to='/'>Return to Home page</Link>
			</>
		);
}

CartList.propTypes = {
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	inCartProducts: PropTypes.array,
	setModalAction: PropTypes.func,
};
CartList.defaultProps = {
	setInCartProducts: () => {},
	setCurrentProduct: () => {},
	inCartProducts: [],
	setModalAction: () => {},
};

export default CartList;
