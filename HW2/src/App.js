import { useEffect, useState } from 'react';
import Modal from './components/modal';
import Actions from './components/actions';
import Header from './components/header';
import ProductsList from './components/productsList';
import styles from './App.module.css';
import { getStateFromLocalStorage } from './utils';
import { CART_LS_KEY, FAV_LS_KEY } from './constants';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [inCartProducts, setInCartProducts] = useState([]);
	const [inFavProducts, setInFavProducts] = useState([]);
	const [currentProduct, setCurrentProduct] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('data/products.json');
				const data = await response.json();
				setAllProducts(data);
			} catch (err) {
				console.log(err);
			}
		})();

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

	let cartCounter = 0;
	for (let i = 0; i < inCartProducts.length; i++) {
		cartCounter += inCartProducts[i].count;
	}

	return (
		<>
			<Header
				cartCounter={cartCounter}
				favCounter={inFavProducts.length}
				setInCartProducts={setInCartProducts}
				setInFavProducts={setInFavProducts}
			/>
			<main className={styles.main}>
				<ProductsList
					products={allProducts}
					handleToggleModal={handleToggleModal}
					setCurrentProduct={setCurrentProduct}
					setInFavProducts={setInFavProducts}
					inFavProducts={inFavProducts}
				/>
			</main>
			{isModalOpen && (
				<Modal
					handleToggleModal={handleToggleModal}
					actions={
						<Actions
							setInCartProducts={setInCartProducts}
							handleToggleModal={handleToggleModal}
							currentProduct={currentProduct}
							setCurrentProduct={setCurrentProduct}
						/>
					}
					text={`Are you sure you want to add '${currentProduct.name}' to the cart?`}
					title={'Confirm operation'}
				/>
			)}
		</>
	);
}

export default App;
