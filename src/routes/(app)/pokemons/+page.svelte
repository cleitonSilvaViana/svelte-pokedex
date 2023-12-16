<!-- Home page -->
<script>
	// signals
	import { pokemons } from '$signals/Pokemons.svelte';

	// functions
	import loadData from '../../../functions/loadDatas';

	// components
	import Card from '$components/PokemonCard.svelte';
	import Button from '$components/ButtonLoadPokemons.svelte';
	import Input from '$components/InputSearchPokemon.svelte';
</script>

<div class="main">
	<section>
		<!-- <section class={pokemons.selected ? `bg-${pokemons.selected.types[0].type.name}` : ''}> -->
		{#if pokemons.selected}
			<div class="pokemon">
				<h1 class="pokemon__name">{pokemons.selected.name}</h1>

				<div class="flex">
					<ul class="pokemon__types">
						{#each pokemons.selected.types as types}
							<li class="pokemon__type">{types.type.name}</li>
						{/each}
					</ul>
					<a href="/" class="pokemon__id">#{pokemons.selected.id}</a>
				</div>

				<img
					class="pokemon__image"
					src={pokemons.selected.sprites.other.dream_world.front_default}
					alt="{pokemons.selected.name} image"
				/>

				<div class="pokemon__details">
					
					
				</div>
			</div>
		{:else}
			<h1>Select any pokemon</h1>
		{/if}
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
		overflow: hidden;
	}

	.pokemons__container {
		overflow-y: scroll;
		background-color: #666;
	}

	.pokemons__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 0.8rem;
	}

	.pokemon {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-rows: min-content min-content 160px 2fr;
		gap: 2.4rem;
	}

	.pokemon__name {
		text-transform: capitalize;
		font-size: 3.2rem;
		color: #ddd;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.pokemon__image {
		height: 100%;
		width: 100%;
		object-fit: fill;
		margin: 0 auto;
	}

	.pokemon__types li,
	.pokemon__id {
		display: inline-block;
		padding: 0.8rem 1.6rem;
		border-radius: 0.4rem;
		margin-right: 0.8rem;
		font-size: 1.6rem;
		background-color: #ddd;
	}

	.pokemon__details {
		background-color: #aaa;
		height: 100%;
		width: 100%;
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
