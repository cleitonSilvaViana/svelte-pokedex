<script>
	// signals
	import { pokemons } from '$signals/Pokemons.svelte';

	// function 
	import loadData from '../functions/loadDatas';

	// implementar a lógica que será aplicada sempre que o botão for clicado
	// desabilitar o botão
	// mudar mensagem do botão enquanto carrega os pokemons

</script>

<button onclick={() => loadData()}>Load More pokemons</button>

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
