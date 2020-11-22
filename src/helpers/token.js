const nameKey = 'todos-token-2.0';

export const setToken = (token) => {
	localStorage.setItem(nameKey, token);
}
export const removeToken = () => {
	localStorage.removeItem(nameKey)
}
export const getToken = () => {
	return localStorage.getItem(nameKey);
}