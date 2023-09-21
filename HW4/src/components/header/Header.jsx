import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import CartCounter from '../cartCounter';
import FavouritesCounter from '../favouritesCounter';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<NavLink
					to='/'
					className={styles.logo}>
					CatShop
				</NavLink>

				<div className={styles.wrapper}>
					<NavLink to='/cart'>
						<CartCounter />
					</NavLink>
					<NavLink to='/favourites'>
						<FavouritesCounter />
					</NavLink>
				</div>
			</div>
		</header>
	);
}

export default Header;
