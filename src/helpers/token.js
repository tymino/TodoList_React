const nameKey = 'todos-token';

export const setToken = (token) => {
	localStorage.setItem(nameKey, token);
}
export const removeToken = () => {
	localStorage.removeItem(nameKey)
}
export const getToken = () => {
	return localStorage.getItem(nameKey);
}