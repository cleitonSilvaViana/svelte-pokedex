<script>
	const { data } = $props();
	const { image, name } = data;
</script>

<article>
	<div>
		<h1>What are you looking for?</h1>

		<search>
			<input type="text" placeholder="search pokemons, itens, etc." />
		</search>

		<section>
			<button>
				<a href="/pokemons">
					<h3>Pokémons</h3>
				</a>
			</button>
			<button>
				<h3>Items</h3>
			</button>
			<button>
				<h3>Moves</h3>
			</button>
			<button>
				<h3>Types</h3>
			</button>
			<button>
				<h3>Favorite</h3>
			</button>
		</section>
	</div>

	<div class="pokemon">
		<img src={image} alt="{`${name} image`}" />
	</div>
</article>

<style>
	article {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(296px, 1fr));
		gap: 1.6rem;
	}

	div {
		display: inline-block;
		width: 100%;
		height: 100%;

		display: grid;
		gap: 1.6rem;
	}

	h1 {
		padding: 3.2rem 0 1.6rem;
		font-size: 3.2rem;
		color: #eee;
	}

	input {
		width: 100%;
		border-radius: 0.4rem;
		padding: 0.8rem;
	}

	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.6rem;

		grid-template-areas:
			'a a'
			'b c'
			'd e';
	}

	button {
		cursor: pointer;
		border-radius: 0.4rem;
		height: 96px;
		position: relative;
	}

	button a {
		width: 100%;
		height: 100%;
		display: block;
	}

	h3 {
		font-size: 3.2rem;
		color: #ddd;
		text-shadow: 1px 1px 1px 3px #fff;
		font-weight: 700;
		position: absolute;
		bottom: 0.8rem;
		left: 1.2rem;
	}

	section button:first-child {
		background-color: #5dbe62;
		grid-area: a;
	}

	section button:nth-child(2) {
		grid-area: b;
		background-color: #f7786b;
	}

	section button:nth-child(3) {
		grid-area: c;
		background-color: #58aaf6;
	}

	section button:nth-child(4) {
		grid-area: d;
		background-color: #ffce4b;
	}

	section button:last-child {
		grid-area: e;
		background-color: #b863cf;
	}

	.pokemon {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.pokemon > img {
		width: 100%;
	}

	@media screen and (max-width: 799px) {
		h3 {
			font-size: 2.8rem;
		}
	}

	@media screen and (max-width: 430px) {
		h3 {
			font-size: 2.4rem;
		}

		section {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
		}

		.pokemon {
			position: absolute;
			z-index: -1;
			top: -25%;
			opacity: 0.3;
		}
	}
</style>
