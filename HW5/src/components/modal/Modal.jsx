import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { setModal } from '../../redux/slices/modalSlice';
import styles from './Modal.module.css';
import Actions from '../actions';

function Modal() {
	const dispatch = useDispatch();
	const title = useSelector((state) => state.modal.modalAction.title);
	const content = useSelector((state) => state.modal.modalAction.content);
	const isShadowDisabled = useSelector((state) => state.modal.isShadowDisabled);

	const handleToggleModal = () => {
		dispatch(setModal());
	};

	const handleShadowClick = (e) => {
		if (e.target === e.currentTarget && !isShadowDisabled) handleToggleModal();
	};

	return (
		<div
			className={styles.shadow}
			onClick={handleShadowClick}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					<button
						className={styles['close-btn']}
						onClick={handleToggleModal}>
						{<MdClose size={24} />}
					</button>
				</div>
				<div className={styles.body}>
					{typeof content === 'string' ? (
						<p className={styles.content}>{content}</p>
					) : (
						<>{content}</>
					)}
				</div>
				<Actions />
			</div>
		</div>
	);
}

export default Modal;
