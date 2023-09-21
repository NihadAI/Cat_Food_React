import styles from './FavouritesCounter.module.css';
import { useSelector } from 'react-redux';

function FavouritesCounter() {
	const favCounter = useSelector((state) => state.favourites.count);

	return (
		<div className={styles.fav}>
			Favourites <span className={styles.counter}>{favCounter}</span>
		</div>
	);
}

export default FavouritesCounter;
