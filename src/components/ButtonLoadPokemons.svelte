<script>
	// signals
	import { pokemons } from '$signals/Pokemons.svelte';

	async function load() {
		let res = await fetch(pokemons.url);
		res = await res.json();
		pokemons.add = await res.results;
		pokemons.url = await res.next;
	}
</script>

<button onclick={load}>Load More pokemons</button>

<style>
    
	button {
		display: block;
		width: fit-content;
		padding: .8rem 1.6rem;
		border-radius: .4rem;
		margin: 2.4rem auto .8rem;
		cursor: pointer;
	}

</style>
