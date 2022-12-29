// @ts-ignore
export const load = async ({ fetch }) => {
	const fetchMovies = async () => {
		const response = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=aeeb4f6341db365219da9d16e62163a1&language=en-US'
		);
		const data = await response.json();
		return data.results;
	};

	return {
		movies: fetchMovies()
	};
};
