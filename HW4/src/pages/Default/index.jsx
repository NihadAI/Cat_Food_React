import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDefaultScreenText } from '../../redux/slices/currentsSlice';
import { NO_PAGE_FOUND_MESSAGE } from '../../constants/defaultTextConstants';
import DefaultScreen from '../../components/defaultScreen/DefaultScreen';

const DefaultPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setDefaultScreenText(NO_PAGE_FOUND_MESSAGE));
	}, [dispatch]);

	return <DefaultScreen />;
};

export default DefaultPage;
