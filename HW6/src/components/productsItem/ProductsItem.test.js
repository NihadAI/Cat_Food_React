import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from './cardView';
import { fireEvent, screen, render } from '@testing-library/react';
import { setModal, setModalAction } from '../../redux/slices/modalSlice';
import { MemoryRouter } from 'react-router-dom';
import {
	addFavouriteItem,
	removeFavouriteItem,
} from '../../redux/slices/favouritesSlice';

jest.mock('react-redux');

const item = {
	name: 'test product',
	price: 10,
	vendor: 0,
	desc: 'test description',
};

describe("Products card's cart button", () => {
	it("should open modal and set it's actions", () => {
		useSelector.mockImplementation((selector) =>
			selector({
				favourites: {
					items: [item],
				},
			})
		);

		const dispatch = jest.fn();
		useDispatch.mockReturnValue(dispatch);

		render(
			<MemoryRouter initialEntries={['/cart']}>
				<ProductsItem item={item} />
			</MemoryRouter>
		);

		const cartBtn = screen.getByTestId('modal-cart-button');
		fireEvent.click(cartBtn);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenCalledWith(setModal());
		expect(dispatch).toHaveBeenCalledWith(
			setModalAction(
				expect.objectContaining({
					button: expect.any(Object),
					content: expect.anything(),
				})
			)
		);
	});
});

describe("Products card's favourite button", () => {
	it('should add item to favourites', () => {
		useSelector.mockImplementation((selector) =>
			selector({
				favourites: {
					items: [],
				},
			})
		);

		const dispatch = jest.fn();
		useDispatch.mockReturnValue(dispatch);

		render(
			<MemoryRouter initialEntries={['/cart']}>
				<ProductsItem item={item} />
			</MemoryRouter>
		);

		const favBtn = screen.getByTestId('modal-fav-button');
		fireEvent.click(favBtn);

		expect(dispatch).toHaveBeenCalledWith(addFavouriteItem(item));
	});

	it('should remove item from favourites', () => {
		useSelector.mockImplementation((selector) =>
			selector({
				favourites: {
					items: [item],
				},
			})
		);

		const dispatch = jest.fn();
		useDispatch.mockReturnValue(dispatch);

		render(
			<MemoryRouter initialEntries={['/cart']}>
				<ProductsItem item={item} />
			</MemoryRouter>
		);

		const favBtn = screen.getByTestId('modal-fav-button');
		fireEvent.click(favBtn);

		expect(dispatch).toHaveBeenCalledWith(removeFavouriteItem(item.vendor));
	});
});
