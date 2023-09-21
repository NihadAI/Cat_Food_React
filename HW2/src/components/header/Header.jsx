import PropTypes from 'prop-types';
import Cart from '../cart';
import styles from './Header.module.css';
import Favourites from '../favourites';

function Header({
	cartCounter,
	favCounter,
	setInCartProducts,
	setInFavProducts,
}) {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<a
					href='/'
					className={styles.logo}>
					CatShop
				</a>
				<div className={styles.wrapper}>
					<Cart
						counter={cartCounter}
						setInCartProducts={setInCartProducts}
					/>
					<Favourites
						counter={favCounter}
						setInFavProducts={setInFavProducts}
					/>
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
