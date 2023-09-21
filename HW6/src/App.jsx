import { useEffect } from 'react';
import Modal from './components/modal';
import Header from './components/header';
import styles from './App.module.css';
import AppRoutes from './AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavouriteItems } from './redux/slices/favouritesSlice';
import { fetchItems } from './redux/slices/itemsSlice';
import { fetchCartItems } from './redux/slices/cartSlice';
import ProductsViewProvider from './context/ProductsView/ProductsViewProvider';

function App() {
	const dispatch = useDispatch();
	const isModalOpen = useSelector((state) => state.modal.isModalOpen);

	useEffect(() => {
		dispatch(fetchItems());
		dispatch(fetchCartItems());
		dispatch(fetchFavouriteItems());
	}, [dispatch]);

	return (
		<ProductsViewProvider>
			<Header />
			<main className={styles.main}>
				<AppRoutes />
			</main>
			{isModalOpen && <Modal />}
		</ProductsViewProvider>
	);
}

export default App;
