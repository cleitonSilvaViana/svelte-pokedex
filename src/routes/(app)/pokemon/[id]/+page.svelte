<script>
	const { data } = $props();
	const { pokemon, specie, evolutions } = data;

	console.log(evolutions)
	
</script>

<div class="pokemon__container">
	<div class="pokemon__details">
		<div class="pokemon__attributes">
			<h1>{pokemon.name}</h1>
			<strong class="pokemon__id">#{pokemon.id}</strong>

			<ul class="pokemon__types">
				{#each pokemon.types as i}
					<li>{i.type.name}</li>
				{/each}
			</ul>

			<table>
				<tbody>
					<tr>
						<td>Height</td>
						<td>{pokemon.height}</td>
					</tr>

					<tr>
						<td>Weight</td>
						<td>{pokemon.weight}</td>
					</tr>

					<tr>
						<td>Abilities</td>
						<td>
							{#each pokemon.abilities as m}
								{m.ability.name},
							{/each}
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="pokemons__stats">
			<h2>Stats</h2>
			<table>
				<tbody>
					{#each pokemon.stats as i}
						<tr>
							<td>{i.stat.name}</td>
							<td class="attribute"
								><span style={`width: ${i.base_stat}%`} class="attribute--bar"> </span></td
							>
							<td>{i.base_stat}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	<img
		class="pokemon__img"
		src={pokemon.sprites.other.dream_world.front_default}
		alt="{pokemon.name} image"
	/>
</div>

<style>
	table,
	tbody {
		width: 100%;
	}

	td {
		color: #ddd;
		font-size: 1.6rem;
		text-transform: capitalize;
	}

	tr td:last-of-type {
		text-align: right;
	}

	.pokemon__container {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 64px;
	}

	.pokemon__attributes {
		margin: 2.4rem 0;
		position: relative;
	}

	h1 {
		font-size: 6rem;
		color: #eee;
		text-transform: capitalize;
		font-weight: bold;
		margin-bottom: 24px;
	}

	.pokemon__id {
		position: absolute;
		top: 24px;
		right: 0;
		font-size: 2.4rem;
		color: #ffffff70;
	}

    .pokemon__types {
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
    }

    .pokemon__types li {
        background-color: #565656;
        color: #ddd;
        font-size: 1.4rem;
        padding: 8px 16px;
        border-radius: 4px;
    }

	.pokemon__attributes tr > td:first-of-type {
		font-weight: bold;
	}

	h2 {
		font-size: 4rem;
		color: #ddd;
	}

	.attribute {
		display: block;
		height: 8px;
		width: 80%;
		min-width: 196px;
		border-radius: 16px;
		background-color: #aaa;
		overflow: hidden;
	}

	.attribute--bar {
		display: block;
		height: 100%;
		background-color: rgb(158, 19, 19);
	}

	.pokemon__img {
		width: 100%;
		height: 100%;
	}
</style>
