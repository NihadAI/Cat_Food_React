import PropTypes from 'prop-types';
import styles from './Favourites.module.css';

function Favourites({ counter }) {
	return (
		<div className={styles.fav}>
			Favourites <span className={styles.counter}>{counter}</span>
		</div>
	);
}

Favourites.propTypes = {
	counter: PropTypes.number,
};

Favourites.defaultTypes = {
	counter: 0,
};

export default Favourites;
