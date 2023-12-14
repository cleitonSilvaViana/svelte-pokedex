<!-- Home page -->
<script>
	// components
	import Card from '$components/PokemonCard.svelte'

	const { data } = $props();
	const { pokemons } = data;


</script>

<main class="container">
	<section class="">

	</section>
	<section class="pokemons__container">
		<input type="text" placeholder="Search your pokemon">
		<div class="pokemons__list">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</section>
</main>

<style>
	main {
		height: calc(100dvh - 88px);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	section {
		padding: 1.6rem;
		border-radius: 4px;
		background-color: #ccc;
		overflow: hidden;
	}

	.pokemons__container {
		overflow-y: scroll;
	}

	.pokemons__container input {
		width: 100%;
		padding: .8rem 1.6rem;
		border-radius: .4rem;
		margin-bottom: 1.6rem;
	}

	.pokemons__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: .8rem;
	}


	@media screen and (max-width: 799px) {
		main {
			grid-template-columns: 1fr;
			gap: 2.4rem;
		}
	}

	@media screen and (max-width: 430px) {

	}
</style>
