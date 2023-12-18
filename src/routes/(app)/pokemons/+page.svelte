<!-- Home page -->
<script>
	// signals
	import { pokemons } from '$signals/Pokemons.svelte';

	// components
	import Card from '$components/PokemonCard.svelte';
	import Button from '$components/ButtonLoadPokemons.svelte';
	import Input from '$components/InputSearchPokemon.svelte';
</script>

<div class="main">
	<section
		class="{pokemons.selected
			? `bg-${pokemons.selected.types[0].type.name}`
			: ''} pokemon__container"
	>
		{#if pokemons.selected}
			<div class="pokemon">
				<h1 class="pokemon__name">{pokemons.selected.name}</h1>

				<div class="flex">
					<ul class="pokemon__types">
						{#each pokemons.selected.types as types}
							<li 
								class="pokemon__type 
										{`bg-${pokemons.selected.types[0].type.name}--intense`}" 
							>{types.type.name}</li>
						{/each}
					</ul>
					<a href="/" class="pokemon__id">#{pokemons.selected.id}</a>
				</div>

				<img
					class="pokemon__image"
					src={pokemons.selected.sprites.other.dream_world.front_default}
					alt="{pokemons.selected.name} image"
				/>
			</div>

			<div class="pokemon__slider">
				<table>
					<tbody>
						<tr>
							<td></td>
						</tr>
					</tbody>
				</table>
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
		border-radius: 16px;
		overflow: hidden;
	}

	.pokemons__container {
		overflow-y: scroll;
		padding: 16px;
		background-color: #f1eded;
	}

	.pokemons__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 0.8rem;
	}

	.pokemon__container {
		display: grid;
		grid-template-rows: 1fr 1fr;
		box-shadow: 3px 4px 3px #f1eded;
	}

	.pokemon {
		padding: 16px;
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-rows: min-content min-content 160px;
		gap: 2.4rem;
	}

	.pokemon__name {
		text-transform: capitalize;
		font-size: 3.2rem;
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

	.pokemon__type {
		display: inline-block;
		padding: 0.8rem 1.6rem;
		border-radius: 16px;
		margin-right: 0.8rem;
		font-size: 1.6rem;
		text-transform: capitalize;
	}

	.pokemon__id {

	}

	.pokemon__slider {
		background-color: #fff;
		height: 100%;
		width: 100%;
		border-radius: 32px 32px 0 0;
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
