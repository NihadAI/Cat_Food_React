import { useState } from 'react';
import ProductsViewContext from '.';

function ProductsViewProvider({ children }) {
	const [view, setView] = useState('card');

	const toggleView = () => {
		setView((prev) => (prev === 'card' ? 'table' : 'card'));
		console.log(view);
	};

	const value = {
		view,
		toggleView,
	};

	return (
		<ProductsViewContext.Provider value={value}>
			{children}
		</ProductsViewContext.Provider>
	);
}

export default ProductsViewProvider;
