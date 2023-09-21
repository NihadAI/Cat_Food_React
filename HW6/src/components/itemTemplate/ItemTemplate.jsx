import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
	addFavouriteItem,
	removeFavouriteItem,
} from '../../redux/slices/favouritesSlice';
import { setModal, setModalAction } from '../../redux/slices/modalSlice';
import PropTypes from 'prop-types';
import {
	ADD_TO_CART_CONTENT_TEMPLATE,
	REMOVE_FROM_CART_CONTENT_TEMPLATE,
} from '../../constants/modalConstants';
import { addCartItem, removeCartItem } from '../../redux/slices/cartSlice';
import { CONFIRM_MODAL_BTN_NAME, PRICE_TEMPLATE } from '../../constants';

const ItemTemplate = (WrappedComponent) => {
	return function ItemTemplate(props) {
		// const { name, price, src, vendor, color, blob } = item;
		const { name, price, vendor } = props.item;

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

		const handleAddMore = () => {
			dispatch(
				setModalAction({
					button: (
						<button
							onClick={() => {
								dispatch(addCartItem(props.item));
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

		const handleRemoveItem = () => {
			dispatch(
				setModalAction({
					button: (
						<button
							onClick={() => {
								dispatch(removeCartItem(vendor));
								dispatch(setModal());
							}}>
							{CONFIRM_MODAL_BTN_NAME}
						</button>
					),
					content: REMOVE_FROM_CART_CONTENT_TEMPLATE(name),
				})
			);
			dispatch(setModal());
		};

		const handleFavBtnClick = () => {
			if (isItemFavourited) {
				dispatch(removeFavouriteItem(vendor));
			} else {
				dispatch(addFavouriteItem(props.item));
			}
		};

		const sharedData = {
			vendorValue,
			priceValue,
			handleAddMore,
			handleRemoveItem,
			handleFavBtnClick,
			isItemFavourited,
		};

		return (
			<WrappedComponent
				sharedData={sharedData}
				{...props}
			/>
		);
	};
};

ItemTemplate.propTypes = {
	item: PropTypes.object,
};
ItemTemplate.defaultProps = {
	item: {},
};

export default ItemTemplate;
