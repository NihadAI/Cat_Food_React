import styles from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import CartCounter from '../cartCounter';
import FavouritesCounter from '../favouritesCounter';
import { useContext } from 'react';
import ProductsViewContext from '../../context/ProductsView';

function Header() {
	const { view, toggleView } = useContext(ProductsViewContext);
	const { pathname } = useLocation();

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<NavLink
					to='/'
					className={styles.logo}>
					CatShop
				</NavLink>

				{(pathname === '/' || pathname === '/favourites') && (
					<div className={styles.controls}>
						<button
							className={styles.switcher}
							onClick={toggleView}>
							{view} view
						</button>
					</div>
				)}

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
