<script>
	// signals 
	import { pokemon as pokemonSignal } from "$signals/Pokemon.svelte";

	const { pokemon } = $props();
	const id = () => {
		// transformar em array
		// remover o último (/) caractere do array
		// identificar a última barra do array
		// a partir da última BigInt64Array, resgatar todos os itens (respectivos id's)
		// retornar o id 
	}

	async function selectPokemon() {
		await fetch(pokemon.url)
			.then((res) => res.json())
			.then(res => pokemonSignal.select = res)
			// .then(res => console.log(res.sprites.other.dream_world.front_default))
			// .then(res => console.log(pokemonSignal.selected.sprites.other.dream_world.front_default))
	}



</script>

<button onclick="{selectPokemon}">
	<div>
		<img
			src="{`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id[1]}.svg`}"
			alt="..."
		/>
	</div>
    <h2>{pokemon.name}</h2>
</button>

<style>
	button {
		cursor: pointer;
		width: 100%;
        height: 140px;
		border-radius: 0.8rem;
		background-color: aquamarine;
		padding: 1.6rem 0.8rem 0.8rem;
        
		display: flex;
        justify-content: space-between;
        align-items: center;
		flex-direction: column;
	}

	h2 {
		color: #333;
		font-size: 2rem;
	}

	div {
		display: flex;
		justify-content: center;
        align-items: center;
		gap: 0.8rem;
        width: 100%;
        height: 100%;
	}

	img {
		display: inline-block;
        max-width: 80px;
        max-height: 80px;
		max-width: 116px;
        object-fit: cover;
	}
</style>
