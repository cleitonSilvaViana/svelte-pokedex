<script>
    // signals
    import { pokemons } from "$signals/Pokemons.svelte";

    let input = $state('')

    function pesquise() {
        pokemons.search = input
    }

</script>

<search>
    <input 
        bind:value={input} 

        onchange={pesquise}
        oninput={pesquise}

        type="text" 
        placeholder="Pesquise pokemons">
</search>

<style>
    input {
        width: 100%;
		padding: .8rem 1.6rem;
		border-radius: .4rem;
		margin-bottom: 1.6rem;
		position: sticky;
		top: 0;
		left: 0;
    }

</style>