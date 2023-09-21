import PropTypes from 'prop-types';
import styles from './Favourites.module.css';
import { clearLocalStorage } from '../../utils';
import { FAV_LS_KEY } from '../../constants';

function Favourites({ counter, setInFavProducts }) {
	const handleClearLs = () => {
		clearLocalStorage(FAV_LS_KEY);
		setInFavProducts([]);
	};

	return (
		<div
			className={styles.fav}
			onClick={handleClearLs}
			title='click to clear favourite items'>
			Favourites <span className={styles.counter}>{counter}</span>
		</div>
	);
}

Favourites.propTypes = {
	counter: PropTypes.number,
	setInFavProducts: PropTypes.func,
};

Favourites.defaultTypes = {
	counter: 0,
	setInFavProducts: () => {},
};

export default Favourites;
