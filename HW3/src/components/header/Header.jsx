import PropTypes from 'prop-types';
import Cart from '../cart';
import styles from './Header.module.css';
import Favourites from '../favourites';
import { Link } from 'react-router-dom';

function Header({ cartCounter, favCounter }) {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link
					to='/'
					className={styles.logo}>
					CatShop
				</Link>

				<div className={styles.wrapper}>
					<Link to='/cart'>
						<Cart counter={cartCounter} />
					</Link>
					<Link to='/favourites'>
						<Favourites counter={favCounter} />
					</Link>
				</div>
			</div>
		</header>
	);
}

Header.propTypes = {
	cartCounter: PropTypes.number,
	favCounter: PropTypes.number,
	setInCartProducts: PropTypes.func,
	setInFavProducts: PropTypes.func,
};

Header.defaultProps = {
	cartCounter: 0,
	favCounter: 0,
	setInCartProducts: () => {},
	setInFavProducts: () => {},
};

export default Header;
