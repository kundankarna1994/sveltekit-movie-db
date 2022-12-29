<script>
	export let data;
	const { product } = data;
	console.log(product);
</script>

<h1>Product Title : {product.title}</h1>
<p>Product Description : {product.description}</p>
<p>Product Price : {product.price}</p>

{#each product.images as image}
	<img src={image} alt={product.tilte} />
{/each}
