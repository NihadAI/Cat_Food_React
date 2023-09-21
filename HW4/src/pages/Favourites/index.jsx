import styles from './Fav.module.css';
import React from 'react';
import ProductsList from '../../components/productsList';
import { BsBookmarkXFill } from 'react-icons/bs';
import { setModal, setModalAction } from '../../redux/slices/modalSlice';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearFavouriteItems } from '../../redux/slices/favouritesSlice';
import { CLEAR_FAVOURITES_CONTENT } from '../../constants/modalConstants';
import { NO_FAV_ITEMS_TEXT } from '../../constants/defaultTextConstants';
import { useEffect } from 'react';
import { setDefaultScreenText } from '../../redux/slices/currentsSlice';
import { CONFIRM_MODAL_BTN_NAME } from '../../constants';

const FavPage = () => {
	const dispatch = useDispatch();
	const favouriteItems = useSelector(
		(state) => state.favourites.items,
		shallowEqual
	);

	useEffect(() => {
		dispatch(setDefaultScreenText(NO_FAV_ITEMS_TEXT));
	}, [dispatch]);

	const handleClearFav = () => {
		dispatch(
			setModalAction({
				button: (
					<button
						onClick={() => {
							dispatch(clearFavouriteItems());
							dispatch(setModal());
						}}>
						{CONFIRM_MODAL_BTN_NAME}
					</button>
				),
				content: CLEAR_FAVOURITES_CONTENT,
			})
		);
		dispatch(setModal());
	};

	return (
		<>
			{!!favouriteItems.length && (
				<button
					className={styles.button}
					onClick={handleClearFav}>
					Clear favourites
					<BsBookmarkXFill size={40} />
				</button>
			)}
			<ProductsList products={favouriteItems} />
		</>
	);
};

export default FavPage;
