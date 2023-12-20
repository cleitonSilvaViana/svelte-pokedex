<!-- Home page -->
<script>
	// signals
	import { pokemons } from '$signals/Pokemons.svelte';

	// components
	import Card from '$components/PokemonCard.svelte';
	import Button from '$components/ButtonLoadPokemons.svelte';
	import Input from '$components/InputSearchPokemon.svelte';

	// transitions
	import { fly, blur } from 'svelte/transition';

	// assets
	import img from '$assets/img/poke-egg.png';

	let isVisible = $state(true);
</script>

<div class="main">
	<section
		class="{pokemons.selected ? `bg-${pokemons.selected.types[0].type.name}` : ''}
			   {isVisible ? '' : 'toggle'} 

			pokemon__container pokemon-selected"
	>
		<button class="button--close" onclick={() => (isVisible = !isVisible)}>X</button>
		{#if pokemons.selected}
			{#key pokemons.selected}
				<!-- duração total da animação: 800ms -->
				<div class="pokemon-selected__image__container">
					<img
						transition:blur="{{ duration: 300 }}"
						class="pokemon-selected__image"
						src={pokemons.selected.sprites.other.dream_world.front_default}
						alt="{pokemons.selected.name} image"
					/>
				</div>

				<div 
				transition:blur="{{ duration: 300 }}"
					class="pokemon-selected__details">

					<div in:blur={{ delay: 400, opacity: 1, duration: 150 }} class="pokemon-selected__header">
						<h1
							class="pokemon-selected__name"
							style={`color: var(--${pokemons.selected.types[0].type.name}--dark);`}
						>
							{pokemons.selected.name}
						</h1>

						<ul class="pokemon-selected__types"
							in:blur={{ delay: 400, opacity: 1, duration: 150 }}
						>
							{#each pokemons.selected.types as types}
								<li
									class="pokemon-selected__type
									{`bg-${types.type.name}--intense`}"
								>
									{types.type.name}
								</li>
							{/each}
						</ul>
					</div>

					<table class="pokemon-selected__stats">
						<tbody>
							{#each pokemons.selected.stats as i}
								<tr>
									<td>{i.stat.name}</td>
									<td>{i.base_stat}</td>
								</tr>
							{/each}
						</tbody>
					</table>

					<a
						style={`color: var(--${pokemons.selected.types[0].type.name});`}
						class="pokemons-selected__button"
						href={`/pokemon/${pokemons.selected.id}`}>more</a
					>
				</div>
			{/key}
		{:else}
			<div>
				<h3>Select pokemon</h3>
			</div>
		{/if}
	</section>
	<section class="pokemons__container">
		<Input />
		<div class="pokemons__list">
			{#each pokemons.searched as pokemon}
				<Card isVisible={() => (isVisible = !isVisible)} {pokemon} />
			{/each}
		</div>
		<Button />
	</section>
</div>

<style>
	.toggle {
		display: contents;
	}

	.main {
		height: calc(100dvh - 150px);
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

	.pokemon__container {
		display: grid;
		grid-template-rows: 1fr 1fr;
		box-shadow: 3px 4px 3px #f1eded;
	}

	.pokemons__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 0.8rem;
	}

	.pokemon-selected {
		padding: 0;
		height: min-content;
		width: 100%;
		display: grid;
		grid-template-rows: repeat(auto-fit, minmax(180px, 240px));
		gap: 2.4rem;
		overflow: hidden;
	}

	.button--close {
		display: none;
	}

	.pokemon-selected__image__container {
		padding: 16px;
	}

	.pokemon-selected__image {
		margin: 0 auto;
		height: 100%;
		max-height: 240px;
		display: block;
		width: 100%;
		max-width: 240px;
	}

	.pokemon-selected__details {
		padding: 24px;
		height: min-content;
		color: #fff;
		background-color: #fff;
		border-radius: 32px 32px 0 0;
	}

	.pokemon-selected__header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.pokemon-selected__name {
		font-size: 3.2rem;
		text-transform: capitalize;
	}

	.pokemon-selected__types {
		width: fit-content;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 8px;
	}

	.pokemon-selected__type {
		display: block;
		width: fit-content;
		padding: 8px 16px;
		border-radius: 16px;
		font-size: 1.4rem;
		text-transform: capitalize;
	}

	.pokemon-selected__stats {
	}

	.pokemon-selected__stats,
	.pokemon-selected__stats tbody {
		width: 100%;
	}

	.pokemon-selected__stats tbody {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 24px;
		margin: 24px 0;
	}

	.pokemon-selected__stats tr {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		align-items: flex-start;
	}

	.pokemon-selected__stats tr > td:first-of-type {
		font-size: 1.2rem;
		color: #757575;
	}

	.pokemon-selected__stats tr > td:last-of-type {
		font-size: 1.8rem;
		color: #757575;
	}

	.pokemon-selected__stats td {
		text-transform: capitalize;
		font-weight: 600;
	}

	.pokemons-selected__button {
		display: block;
		text-align: center;
		padding: 8px;
		margin: 16px 0;
		font-size: 1.6rem;
		text-transform: uppercase;
		font-weight: 600;
	}

	@media screen and (max-width: 799px) {
		.main {
			display: initial;
		}

		.pokemon__container {
			display: flex;
			margin-bottom: 24px;
		}

		.pokemon-selected__details {
			border-radius: 16px 0 0 16px;
			width: 100%;
		}

		.pokemon-selected__header {
			flex-wrap: wrap;
			gap: 16px;
		}

		.pokemon-selected__image {
			min-width: 160px;
		}

		.pokemon-selected__stats tbody {
			display: flex;
			flex-wrap: wrap;
		}

		.pokemon-selected__stats tr {
			width: 80px;
		}
	}

	@media screen and (max-width: 430px) {
		div.main > section.toggle {
			display: none;
		}

		.pokemon-selected {
			display: block;
			position: fixed;
			bottom: -30px;
			left: 0px;
			z-index: 1;
		}

		.button--close {
			display: block;
			font-size: 1.8rem;
			color: #000;
			position: absolute;
			top: 8px;
			right: 8px;
			padding: 8px;
			border-radius: 8px;
		}
	}
</style>
