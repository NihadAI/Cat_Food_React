import modalReducer, {
	initialState,
	setModal,
	setModalAction,
	disableShadow,
} from '../slices/modalSlice';

const fakeInitialState = {
	isModalOpen: true,
	isShadowDisabled: false,
};

describe('modal reducer', () => {
	it('should handle setModal', () => {
		const newState = modalReducer(initialState, setModal());
		expect(newState.isModalOpen).toEqual(true);
		expect(newState.isShadowDisabled).toEqual(false);
	});

	it('should handle setModal despite receiving any arguments', () => {
		const newState = modalReducer(initialState, setModal(true));
		expect(newState.isModalOpen).toEqual(true);
		expect(newState.isShadowDisabled).toEqual(false);
	});

	it('should handle setModal and close modal if isModalOpen is true', () => {
		const newState = modalReducer(fakeInitialState, setModal());
		expect(newState.isModalOpen).toEqual(false);
		expect(newState.isShadowDisabled).toEqual(false);
	});

	it('should handle disableShadow', () => {
		const newState = modalReducer(initialState, disableShadow());
		expect(newState.isShadowDisabled).toEqual(true);
	});

	it('should handle setModalAction update state accordingly', () => {
		const payload = {
			content: 'Some content',
			button: <button>Test Button</button>,
			title: 'Test Title',
		};
		const newState = modalReducer(initialState, setModalAction(payload));
		expect(newState.modalAction.content).toEqual(payload.content);
		expect(newState.modalAction.button).toEqual(payload.button);
		expect(newState.modalAction.title).toEqual(payload.title);
	});
});
