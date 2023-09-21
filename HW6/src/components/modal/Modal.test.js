import { fireEvent, screen, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '.';
import { setModal } from '../../redux/slices/modalSlice';

jest.mock('react-redux');

const testValues = {
	title: 'Test Title',
	content: 'Test Content',
};

describe('Modal Component', () => {
	test('renders correctly', () => {
		useSelector
			.mockReturnValueOnce(testValues.title)
			.mockReturnValueOnce(testValues.content)
			.mockReturnValueOnce(false);

		const dispatch = jest.fn();
		useDispatch.mockReturnValue(dispatch);

		render(<Modal />);

		expect(screen.getByText(testValues.title)).toBeInTheDocument();
		expect(screen.getByText(testValues.content)).toBeInTheDocument();

		const closeButton = screen.getByTestId('modal-close-button');
		const modalShadow = screen.getByTestId('modal-shadow');
		fireEvent.click(closeButton);
		expect(dispatch).toHaveBeenCalledWith(setModal());

		fireEvent.click(modalShadow);
		expect(dispatch).toHaveBeenCalledWith(setModal());
	});
});
