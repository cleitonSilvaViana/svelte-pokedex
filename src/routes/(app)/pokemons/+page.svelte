<!-- Home page -->
<script>
	// signals
	import { pokemons } from '$signals/Pokemons.svelte';

	// components
	import Card from '$components/PokemonCard.svelte';
	import Button from '$components/ButtonLoadPokemons.svelte';
	import Input from '$components/InputSearchPokemon.svelte';
	import PokemonSelected from '$components/PokemonDetails.svelte';
</script>

<div class="main">
	<section class="">
		<PokemonSelected />
	</section>
	<section class="pokemons__container">
		<Input />
		<div class="pokemons__list">
			{#each pokemons.searched as pokemon}
				<Card {pokemon} />
			{/each}
		</div>
		<Button />
	</section>
</div>

<style>
	.main {
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

	.pokemons__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 0.8rem;
	}

	@media screen and (max-width: 799px) {
		.main {
			grid-template-columns: 1fr;
			gap: 2.4rem;
		}
	}

	@media screen and (max-width: 430px) {
	}
</style>
