import styles from './ProductsCard.module.css';
import {
	BsBookmarkStar,
	BsBookmarkStarFill,
	BsCartPlusFill,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
	addFavouriteItem,
	removeFavouriteItem,
} from '../../redux/slices/favouritesSlice';
import { setModal, setModalAction } from '../../redux/slices/modalSlice';
import PropTypes from 'prop-types';
import { ADD_TO_CART_CONTENT_TEMPLATE } from '../../constants/modalConstants';
import { addCartItem } from '../../redux/slices/cartSlice';
import {
	ADD_CART_BTN_NAME,
	CONFIRM_MODAL_BTN_NAME,
	PRICE_TEMPLATE,
} from '../../constants';

function ProductCard({ item }) {
	const { name, price, src, vendor, color, blob } = item;

	const vendorValue = String(vendor).padStart(3, '0');
	const priceValue = PRICE_TEMPLATE(price);

	const dispatch = useDispatch();
	const favouriteItems = useSelector(
		(state) => state.favourites.items,
		shallowEqual
	);

	const isItemFavourited = !!favouriteItems.find(
		(product) => product.vendor === vendor
	);

	const handleCartBtnClick = () => {
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
				content: ADD_TO_CART_CONTENT_TEMPLATE(name),
			})
		);
		dispatch(setModal());
	};

	const handleFavBtnClick = () => {
		if (isItemFavourited) {
			dispatch(removeFavouriteItem(vendor));
		} else {
			dispatch(addFavouriteItem(item));
		}
	};

	return (
		<article
			className={styles.article}
			style={{ '--svg-fill-color': `#${color}` }}>
			<div className={styles.header}>
				<NavLink
					to={`/products/${vendor}`}
					className={styles.name}>
					{name}
				</NavLink>
				<button
					className={`${styles.fav} ${styles.icon}`}
					title='Add to favourites'
					onClick={handleFavBtnClick}>
					{isItemFavourited ? (
						<BsBookmarkStarFill size={30} />
					) : (
						<BsBookmarkStar size={30} />
					)}
				</button>
			</div>
			<img
				className={styles.blob}
				src={blob}
				alt={name}
			/>
			<img
				className={styles.img}
				src={src}
				alt={name}
			/>
			<div className={styles.hover}>
				<button
					className={`${styles.cart} ${styles.icon}`}
					title={ADD_CART_BTN_NAME}
					onClick={handleCartBtnClick}>
					<BsCartPlusFill size={50} />
				</button>
			</div>
			<div className={styles.info}>
				<span
					className={styles.price}
					title='Product price'>
					{priceValue}
				</span>
				<span
					className={styles.vendor}
					title='Product vendor code'>
					{vendorValue}
				</span>
			</div>
		</article>
	);
}

ProductCard.propTypes = {
	item: PropTypes.object,
};
ProductCard.defaultProps = {
	item: {},
};

export default ProductCard;
