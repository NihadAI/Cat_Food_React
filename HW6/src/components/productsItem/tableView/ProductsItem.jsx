import styles from './ProductsItem.module.css';
import {
	BsBookmarkStar,
	BsBookmarkStarFill,
	BsCartPlusFill,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ADD_CART_BTN_NAME } from '../../../constants';

import ItemTemplate from '../../itemTemplate';

function ProductsItem({ item, sharedData }) {
	const { name, src, vendor, color, blob } = item;
	const {
		handleAddMore,
		handleFavBtnClick,
		priceValue,
		vendorValue,
		isItemFavourited,
	} = sharedData;

	return (
		<article
			className={styles.article}
			style={{ '--svg-fill-color': `#${color}` }}>
			<div className={styles['image-wrapper']}>
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
			</div>
			<NavLink
				to={`/products/${vendor}`}
				className={styles.name}>
				{name}
			</NavLink>
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
			<div className={styles.buttons}>
				<button
					className={`${styles.fav} ${styles.icon}`}
					title='Add to favourites'
					onClick={handleFavBtnClick}
					data-testid='modal-fav-button'>
					{isItemFavourited ? (
						<BsBookmarkStarFill size={40} />
					) : (
						<BsBookmarkStar size={40} />
					)}
				</button>
				<button
					className={`${styles.cart} ${styles.icon}`}
					title={ADD_CART_BTN_NAME}
					onClick={handleAddMore}
					data-testid='modal-cart-button'>
					<BsCartPlusFill size={40} />
				</button>
			</div>
		</article>
	);
}

ProductsItem.propTypes = {
	item: PropTypes.object,
	sharedData: PropTypes.object.isRequired,
};
ProductsItem.defaultProps = {
	item: {},
};

export default ItemTemplate(ProductsItem);
