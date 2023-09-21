import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/slices/modalSlice';
import styles from './Actions.module.css';

function Actions() {
	const dispatch = useDispatch();
	const button = useSelector((state) => state.modal.modalAction.button);

	const handleCancel = () => {
		dispatch(setModal());
	};

	return (
		<div className={styles.actions}>
			{/* className={styles.button} */}
			{button}
			<button
				className={styles.button}
				onClick={handleCancel}>
				Cancel
			</button>
		</div>
	);
}

export default Actions;
