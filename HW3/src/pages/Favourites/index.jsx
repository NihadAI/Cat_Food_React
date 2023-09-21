import styles from './Fav.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from '../../components/productsList';
import { CLEAR_FAV_MODAL_ACTION } from '../../constants';
import { BsBookmarkXFill } from 'react-icons/bs';

const FavPage = ({
	inFavProducts,
	setInFavProducts,
	handleToggleModal,
	setCurrentProduct,
	setModalAction,
}) => {
	const defaultText =
		'There are no favourited items right now. You can start by adding them on the home page! 🐈‍⬛';

	const handleClearFav = () => {
		setModalAction(CLEAR_FAV_MODAL_ACTION);
		handleToggleModal();
	};

	return (
		<>
			{!!inFavProducts.length && (
				<button
					className={styles.button}
					onClick={handleClearFav}>
					Clear favourites <BsBookmarkXFill size={40} />
				</button>
			)}
			<ProductsList
				products={inFavProducts}
				handleToggleModal={handleToggleModal}
				setCurrentProduct={setCurrentProduct}
				setInFavProducts={setInFavProducts}
				inFavProducts={inFavProducts}
				defaultText={defaultText}
				setModalAction={setModalAction}
			/>
		</>
	);
};

FavPage.propTypes = {
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	setInFavProducts: PropTypes.func,
	inFavProducts: PropTypes.array,
	setModalAction: PropTypes.func,
};
FavPage.defaultProps = {
	handleToggleModal: () => {},
	setCurrentProduct: () => {},
	setInFavProducts: () => {},
	inFavProducts: [],
	setModalAction: () => {},
};

export default FavPage;
