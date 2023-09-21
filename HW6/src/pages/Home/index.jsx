import ProductsList from '../../components/productsList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NO_ITEMS_TEXT } from '../../constants/defaultTextConstants';
import { useEffect } from 'react';
import { setDefaultScreenText } from '../../redux/slices/currentsSlice';

const HomePage = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.items.items, shallowEqual);
	const isLoading = useSelector((state) => state.items.isLoading);

	useEffect(() => {
		dispatch(setDefaultScreenText(NO_ITEMS_TEXT));
	}, [dispatch]);

	return isLoading ? <div>Loading...</div> : <ProductsList products={items} />;
};

export default HomePage;
