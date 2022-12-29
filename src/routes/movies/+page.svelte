<script>
	export let data;
	const { movies } = data;
</script>

<ul>
	{#each movies as movie}
		<li>
			<h1>{movie.title}</h1>
			<p>{movie.overview}</p>
		</li>
	{/each}
</ul>
