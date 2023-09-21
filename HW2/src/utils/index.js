export const saveStateToLocalStorage = (key, state) => {
	window.localStorage.setItem(key, JSON.stringify(state));
};

export const getStateFromLocalStorage = (key) => {
	const lsValue = window.localStorage.getItem(key);

	if (lsValue) {
		return JSON.parse(lsValue);
	}

	return null;
};

export const clearLocalStorage = (key) => {
	window.localStorage.removeItem(key);
};
