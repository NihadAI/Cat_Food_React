import styles from './ProductsCard.module.css';
import {
	BsBookmarkStar,
	BsBookmarkStarFill,
	BsCartPlusFill,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import { ADD_MODAL_ACTION, FAV_LS_KEY } from '../../constants';
import { saveStateToLocalStorage } from '../../utils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({
	item,
	handleToggleModal,
	setCurrentProduct,
	setInFavProducts,
	inFavProducts,
	setModalAction,
}) {
	const { name, price, src, vendor, color, blob } = item;
	const vendorValue = String(vendor).padStart(3, '0');

	const [isInFav, setIsInFav] = useState(false);

	const handleCartBtnClick = () => {
		setCurrentProduct(item);
		setModalAction(ADD_MODAL_ACTION);
		handleToggleModal();
	};

	useEffect(() => {
		const isItemFavourited = inFavProducts.find(
			(product) => product.vendor === vendor
		);
		setIsInFav(!!isItemFavourited);
	}, [inFavProducts, vendor]);

	const handleFavBtnClick = () => {
		setInFavProducts((prev) => {
			const copyState = [...prev];
			const index = copyState.findIndex((el) => el.vendor === vendor);

			if (index !== -1) {
				copyState.splice(index, 1);
				saveStateToLocalStorage(FAV_LS_KEY, copyState);
				return copyState;
			} else {
				const newState = [item, ...prev];
				saveStateToLocalStorage(FAV_LS_KEY, newState);
				return newState;
			}
		});
	};

	return (
		<article
			className={styles.article}
			style={{ '--svg-fill-color': `#${color}` }}>
			<div className={styles.header}>
				<Link
					to={`/products/${vendor}`}
					className={styles.name}>
					{name}
				</Link>
				<button
					className={`${styles.fav} ${styles.icon}`}
					title='Add to favourites'
					onClick={handleFavBtnClick}>
					{!isInFav ? (
						<BsBookmarkStar size={30} />
					) : (
						<BsBookmarkStarFill size={30} />
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
					title='Add to cart'
					onClick={handleCartBtnClick}>
					<BsCartPlusFill size={50} />
				</button>
			</div>
			<div className={styles.info}>
				<span
					className={styles.price}
					title='price'>
					{price} $
				</span>
				<span
					className={styles.vendor}
					title='vendor'>
					{vendorValue}
				</span>
			</div>
		</article>
	);
}

ProductCard.propTypes = {
	item: PropTypes.object,
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	setInFavProducts: PropTypes.func,
	inFavProducts: PropTypes.array,
	setModalAction: PropTypes.func,
};

ProductCard.defaultProps = {
	item: {},
	handleToggleModal: () => {},
	setCurrentProduct: () => {},
	setInFavProducts: () => {},
	inFavProducts: [],
	setModalAction: () => {},
};

export default ProductCard;
