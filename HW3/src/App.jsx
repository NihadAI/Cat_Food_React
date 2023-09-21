import { useEffect, useState } from 'react';
import Modal from './components/modal';
import Actions from './components/actions';
import Header from './components/header';
import styles from './App.module.css';
import { getStateFromLocalStorage } from './utils';
import {
	ADD_MODAL_ACTION,
	CART_LS_KEY,
	CLEAR_CART_MODAL_ACTION,
	CLEAR_FAV_MODAL_ACTION,
	FAV_LS_KEY,
	REMOVE_MODAL_ACTION,
} from './constants';
import AppRoutes from './AppRoutes';
import { saveStateToLocalStorage, clearLocalStorage } from './utils';

function App() {
	const [inCartProducts, setInCartProducts] = useState([]);
	const [inFavProducts, setInFavProducts] = useState([]);
	const [currentProduct, setCurrentProduct] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalAction, setModalAction] = useState(null);

	useEffect(() => {
		const cartFromLs = getStateFromLocalStorage(CART_LS_KEY);
		const favFromLs = getStateFromLocalStorage(FAV_LS_KEY);

		if (cartFromLs) {
			setInCartProducts(cartFromLs);
		}
		if (favFromLs) {
			setInFavProducts(favFromLs);
		}
	}, []);

	const handleToggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleAddToCart = () => {
		const { vendor } = currentProduct;

		setInCartProducts((prev) => {
			const copyState = [...prev];
			const item = copyState.find((item) => item.vendor === vendor);
			if (item) {
				item.count++;
				saveStateToLocalStorage(CART_LS_KEY, copyState);
				return copyState;
			} else {
				const currentItem = { count: 1, ...currentProduct };
				const newState = [currentItem, ...prev];
				saveStateToLocalStorage(CART_LS_KEY, newState);
				return newState;
			}
		});

		setCurrentProduct({});
	};

	const handleRemoveFromCart = () => {
		const { vendor } = currentProduct;

		setInCartProducts((prev) => {
			const copyState = [...prev];
			const index = copyState.findIndex((el) => el.vendor === vendor);
			if (copyState[index].count > 1) {
				copyState[index].count--;
			} else {
				copyState.splice(index, 1);
			}
			copyState.length
				? saveStateToLocalStorage(CART_LS_KEY, copyState)
				: clearLocalStorage(CART_LS_KEY);
			return copyState;
		});

		setCurrentProduct({});
	};

	const handleClearCart = () => {
		setInCartProducts([]);
		clearLocalStorage(CART_LS_KEY);
	};

	const handleClearFav = () => {
		setInFavProducts([]);
		clearLocalStorage(FAV_LS_KEY);
	};

	const modalTitle = 'Confirm operation';
	let callbackFunction;
	let modalContent;

	switch (modalAction) {
		case ADD_MODAL_ACTION:
			callbackFunction = handleAddToCart;
			modalContent = `Are you sure you want to add '${currentProduct.name}' to the cart?`;
			break;
		case REMOVE_MODAL_ACTION:
			callbackFunction = handleRemoveFromCart;
			modalContent = `Are you sure you want to remove '${currentProduct.name}' to the cart?`;
			break;
		case CLEAR_CART_MODAL_ACTION:
			callbackFunction = handleClearCart;
			modalContent = `Are you sure you want to clear your cart?`;
			break;
		case CLEAR_FAV_MODAL_ACTION:
			callbackFunction = handleClearFav;
			modalContent = `Are you sure you want to clear all favourites?`;
			break;
		default:
			callbackFunction = () => {};
			modalContent = '';
			break;
	}

	let cartCounter = 0;
	let fullPrice = 0;
	for (let i = 0; i < inCartProducts.length; i++) {
		cartCounter += inCartProducts[i].count;
		fullPrice += inCartProducts[i].count * inCartProducts[i].price;
	}

	return (
		<>
			<Header
				cartCounter={cartCounter}
				favCounter={inFavProducts.length}
			/>

			<main className={styles.main}>
				<AppRoutes
					handleToggleModal={handleToggleModal}
					setCurrentProduct={setCurrentProduct}
					setInFavProducts={setInFavProducts}
					inFavProducts={inFavProducts}
					inCartProducts={inCartProducts}
					setModalAction={setModalAction}
					fullPrice={fullPrice}
				/>
			</main>
			{isModalOpen && (
				<Modal
					handleToggleModal={handleToggleModal}
					title={modalTitle}
					text={modalContent}
					actions={
						<Actions
							handleToggleModal={handleToggleModal}
							callbackFunction={callbackFunction}
						/>
					}
				/>
			)}
		</>
	);
}

export default App;
