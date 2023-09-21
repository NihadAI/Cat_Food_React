import { useEffect } from 'react';
import Modal from './components/modal';
import Header from './components/header';
import styles from './App.module.css';
import AppRoutes from './AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavouriteItems } from './redux/slices/favouritesSlice';
import { fetchItems } from './redux/slices/itemsSlice';
import { fetchCartItems } from './redux/slices/cartSlice';

function App() {
	const dispatch = useDispatch();
	const isModalOpen = useSelector((state) => state.modal.isModalOpen);

	useEffect(() => {
		dispatch(fetchItems());
		dispatch(fetchCartItems());
		dispatch(fetchFavouriteItems());
	}, [dispatch]);

	return (
		<>
			<Header />
			<main className={styles.main}>
				<AppRoutes />
			</main>
			{isModalOpen && <Modal />}
		</>
	);
}

export default App;
