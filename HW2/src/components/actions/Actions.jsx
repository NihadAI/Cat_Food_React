import Button from '../button';
import ActionsStyled from './Actions.styled';
import { saveStateToLocalStorage } from '../../utils';
import { CART_LS_KEY } from '../../constants';
import PropTypes from 'prop-types';

function Actions({
	setInCartProducts,
	handleToggleModal,
	currentProduct,
	setCurrentProduct,
}) {
	const handleAddToCart = () => {
		const { name, price, vendor } = currentProduct;

		setInCartProducts((prev) => {
			const copyState = [...prev];
			const item = copyState.find((item) => item.vendor === vendor);
			if (item) {
				item.count++;
				saveStateToLocalStorage(CART_LS_KEY, copyState);
				return copyState;
			} else {
				const currentItem = { name, price, vendor, count: 1 };
				const newState = [currentItem, ...prev];
				saveStateToLocalStorage(CART_LS_KEY, newState);
				return newState;
			}
		});

		setCurrentProduct({});
	};

	const handleConfirm = () => {
		!!Object.keys(currentProduct).length && handleAddToCart();
		handleToggleModal();
	};

	return (
		<ActionsStyled>
			<Button
				handleBtnClick={handleConfirm}
				text='Ok'
			/>
			<Button
				handleBtnClick={handleToggleModal}
				text='Cancel'
			/>
		</ActionsStyled>
	);
}

Actions.propTypes = {
	setInCartProducts: PropTypes.func,
	handleToggleModal: PropTypes.func,
	currentProduct: PropTypes.object,
	setCurrentProduct: PropTypes.func,
};

Actions.defaultProps = {
	setInCartProducts: () => {},
	handleToggleModal: () => {},
	currentProduct: {},
	setCurrentProduct: () => {},
};

export default Actions;
