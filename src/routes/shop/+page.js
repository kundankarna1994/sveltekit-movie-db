// @ts-ignore
export const load = async ({ fetch }) => {
	const fetchProducts = async () => {
		const response = await fetch('https://dummyjson.com/products');
		const data = await response.json();
		return data.products;
	};

	const fetchUsers = async () => {
		const response = await fetch('https://dummyjson.com/users');
		const data = await response.json();
		return data.users;
	};
	return {
		products: fetchProducts(),
		users: fetchUsers()
	};
};
