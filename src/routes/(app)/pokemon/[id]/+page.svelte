<script>
	// components
	import Header from '$components/Header.svelte';

	const { data } = $props();
	const { pokemon, specie, evolutions } = data;

	const pokemonImage = () => {
		const path = pokemon.sprites.other;
		if (path.dream_world.front_default) {
			return path.dream_world.front_default;
		} else {
			return path['official-artwork'].front_default;
		}
	};



	const type = pokemon.types[0].type.name;
</script>

<Header />
<main style={`background-color: var(--${type});`}>
	<div class="pokemon__container container">
		<div style={`background-color: var(--${type}--dark);`}>
			<section class="pokemon__attributes">
				<h1>{pokemon.name}</h1>

				<strong class="pokemon__id">#{pokemon.id}</strong>

				<p>{specie.flavor_text_entries[0].flavor_text}</p>

				<ul class="pokemon__types">
					{#each pokemon.types as i}
						<li class={`bg-${i.type.name}--intense`}>{i.type.name}</li>
					{/each}
				</ul>
			</section>

			<section class="pokemon__info">
				<details>
					<summary>Infos</summary>
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
				</details>

				<details>
					<summary>Stats</summary>
					<table>
						<tbody>
							{#each pokemon.stats as i}
								<tr>
									<td>{i.stat.name}</td>
									<td class="attribute">
										<span
											style={`width: ${i.base_stat}%`}
											class="attribute--bar {`bg-${type}--intense`}"
										>
										</span>
									</td>
									<td>{i.base_stat}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</details>

		
				<details class="pokemon__evolutions">
					<summary>Evolution</summary>
					<div>
						{#each evolutions as evolution}
							<article>
								<a href={`/pokemon/${evolution.id}`}>
									{#if evolution.sprites.other.dream_world.front_default}
										<img
											src={evolution.sprites.other.dream_world.front_default}
											alt={`${evolution.name} image`}
										/>
									{:else}
										<img
											src={evolution.sprites.other['official-artwork'].front_default}
											style="object-fit: cover"
											alt={`${evolution.name} image`}
										/>
									{/if}
								</a>
								<h4>{evolution.name}</h4>
								<span class={`bg-${evolution.types[0].type.name}--intense`}
									>{evolution.types[0].type.name}</span
								>
							</article>
						{/each}
					</div>
				</details>
			</section>
		
		</div>

		<div class="pokemon__img__container">
			<img class="pokemon__img" src={pokemonImage()} alt="{pokemon.name} image" />
		</div>
	</div>
</main>

<style>
	@keyframes sweep {
		0% {
			opacity: 0;
			transform: translateX(-10px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	main {
		min-height: calc(100dvh - 48px);
		padding: 40px 0;
	}

	table,
	tbody {
		width: 100%;
	}

	td {
		color: #fff;
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

	.pokemon__container > div {
		padding: 24px;
		border-radius: 24px;
	}

	.pokemon__attributes {
		margin: 2.4rem 0 0;
		position: relative;
	}

	h1 {
		font-size: 6rem;
		color: #eee;
		text-transform: capitalize;
		font-weight: bold;
		margin-bottom: 24px;
	}

	p {
		font-size: 1.6rem;
		color: #fff;
		margin-bottom: 16px;
	}

	.pokemon__id {
		position: absolute;
		top: 24px;
		right: 0;
		font-size: 2.4rem;
		color: #fff;
	}

	.pokemon__types {
		margin-bottom: 24px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 8px;
	}

	.pokemon__types li {
		font-size: 1.4rem;
		padding: 8px 16px;
		border-radius: 16px;
	}

	.pokemon__attributes tr > td:first-of-type {
		font-weight: bold;
	}

	details[open] summary ~ *,
	details[close] summary ~ * {
		animation: sweep 0.5s ease-in-out;
	}

	summary {
		font-size: 2.4rem;
		color: #fff;
		cursor: pointer;
		transition: all ease-in-out 0.3s;
		border-bottom: 1px solid #fff;
		padding-bottom: 8px;
		margin: 16px 0;
	}

	summary:hover {
		color: #414141;
	}

	summary:active {
		color: #fff;
	}

	.attribute {
		display: block;
		height: 8px;
		width: 80%;
		min-width: 196px;
		border-radius: 16px;
		background-color: #fff;
		overflow: hidden;
	}

	.attribute--bar {
		display: block;
		height: 100%;
	}

	.pokemon__evolutions {
	}

	.pokemon__evolutions div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(40px, 88px));
		align-items: baseline;
		gap: 32px;
	}

	.pokemon__evolutions img {
		width: 100%;
		height: 100%;
		max-height: 80px;
	}

	.pokemon__evolutions h4 {
		font-size: 1.6rem;
		font-weight: 600;
		text-align: center;
		color: #ddd;
		text-transform: capitalize;
	}

	.pokemon__evolutions span {
		padding: 8px 16px;
		border-radius: 16px;
		margin: 8px auto;
		display: block;
		width: fit-content;
		font-size: 1.4rem;
	}

	.pokemon__img__container {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: fit-content;

		margin: 0 auto;
	}

	.pokemon__img {
		width: 100%;
		align-self: center;
	}

</style>
