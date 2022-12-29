// @ts-ignore
export const load = ({ fetch, params }) => {
	const product = async () => {
		const response = await fetch(`https://dummyjson.com/products/${params.id}`);
		const data = await response.json();
		return data;
	};

	return {
		product: product()
	};
};
