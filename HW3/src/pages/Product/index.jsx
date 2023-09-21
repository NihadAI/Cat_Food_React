import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductsItem from '../../components/productsItem/ProductsItem';

const ProductPage = ({
	handleToggleModal,
	setCurrentProduct,
	setModalAction,
}) => {
	const { targetId } = useParams();

	return (
		<ProductsItem
			targetId={targetId}
			setCurrentProduct={setCurrentProduct}
			handleToggleModal={handleToggleModal}
			setModalAction={setModalAction}
		/>
	);
};

ProductPage.propTypes = {
	handleToggleModal: PropTypes.func,
	setCurrentProduct: PropTypes.func,
	setModalAction: PropTypes.func,
};
ProductPage.defaultProps = {
	handleToggleModal: () => {},
	setCurrentProduct: () => {},
	setModalAction: () => {},
};

export default ProductPage;
