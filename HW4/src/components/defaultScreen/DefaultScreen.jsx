import { NavLink, useLocation } from 'react-router-dom';
import styles from './DefaultScreen.module.css';
import { useSelector } from 'react-redux';

function DefaultScreen() {
	const { pathname } = useLocation();
	const defaultText = useSelector((state) => state.currents.defaultScreenText);
	return (
		<>
			{defaultText && <p className={styles.text}>{defaultText}</p>}
			{pathname !== '/' && (
				<NavLink
					to='/'
					className={styles.link}>
					Return to Home page ⬅️
				</NavLink>
			)}
		</>
	);
}

export default DefaultScreen;
