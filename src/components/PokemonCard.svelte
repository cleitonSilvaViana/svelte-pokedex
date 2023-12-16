<script>
	// signals 
	import { pokemons } from "$signals/Pokemons.svelte";
	let { pokemon } = $props();

	// necessário realziar uma cópia do objeto para que não seja realizado um binding ao selecionarmos o pokemon e por ventura, alterar a sua propriedade type
	const poke = Object.assign({}, pokemon)
</script>

<button class={`bg-${poke.types[0].type.name}`} onclick={() => (pokemons.select = poke.id)}>
	<div>
		<img src={poke.sprites.other.dream_world.front_default} alt="{poke.name} image" />
	</div>
	<h2>{poke.name}</h2>
</button>

<style>
	button {
		cursor: pointer;
		width: 100%;
		height: 140px;
		border-radius: 0.8rem;
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
