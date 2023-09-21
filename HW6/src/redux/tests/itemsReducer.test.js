import { setItems, setIsLoading, fetchItems } from '../slices/itemsSlice';

describe('fetchItems thunk', () => {
	it('dispatches setItems and setIsLoading on successful fetch', async () => {
		const mockItems = [
			{
				name: 'test product',
				price: 10,
				vendor: 0,
				desc: 'test description',
			},
		];
		const mockResponse = {
			json: jest.fn().mockResolvedValueOnce(mockItems),
		};
		global.fetch = jest.fn().mockResolvedValueOnce(mockResponse);

		const dispatch = jest.fn();

		await fetchItems()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(setItems(mockItems));
		expect(dispatch).toHaveBeenCalledWith(setIsLoading(false));
	});

	it('dispatches setIsLoading only on fetch error', async () => {
		const mockFetch = jest.fn().mockRejectedValueOnce(new Error('Fetch error'));
		global.fetch = mockFetch;

		const dispatch = jest.fn();

		await fetchItems()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(setIsLoading(false));
	});
});
