<script>
	import { page } from '$app/stores';

	let image = $state(null);

	$effect(() => {
		fetch(`https://pokeapi.co/api/v2/type/ghost`)
			.then((res) => res.json())
			.then((res) => res.pokemon)
			.then((res) => {
				let pokemonUrl = res[Math.round(Math.random() * res.length - 1)].pokemon.url;

				const regexp = /\d+/g;

                let pokeId = pokemonUrl.match(regexp);
                pokeId = [...pokeId]
                pokeId = pokeId[pokeId.length - 1]

                console.log(pokeId)

				image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;
			});
	});
</script>

<main>
	<h1><strong>{$page.status}</strong>: {$page.error.message}</h1>
	<a href="/">go back</a>
	{#if image}
		<img src={image} alt="ghost poke" />
	{/if}
</main>

<style>
	main {
		height: 100dvh;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 16px;
		justify-content: center;
		align-items: center;
        position: relative;
	}

	h1 {
		font-size: 2.4rem;
		color: var(--fire);
	}

	strong {
		font-weight: 700;
	}

	a {
        cursor: póinter;
		display: block;
		width: fit-content;
		padding: 8px 16px;
		border-radius: 16px;
		background-color: var(--fire--soft);
		color: var(--ghost--dark);
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: 600;
		transition: ease-in-out all 0.2s;
	}

	a:hover {
		box-shadow: 1px 1px 3px var(--fire);
	}

	a:active {
		background-color: var(--fire--intense);
	}

    img {
        position: absolute;
        opacity: .1;
        z-index: -1;
    }
</style>
