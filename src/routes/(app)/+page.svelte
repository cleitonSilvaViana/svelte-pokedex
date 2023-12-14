<!-- Home page -->
<script>
	const { data } = $props();
	const { pokemons } = data;


</script>

<main class="container">
	<section class="">

	</section>
	<section class="pokemons__container">
		<input type="text" placeholder="Search your pokemon">
		<div class="pokemons__list">

		</div>
	</section>
</main>

<style>
	main {
		min-height: calc(100dvh - 88px);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	section {
		border-radius: 4px;
		background-color: #ccc;
	}

	.pokemons__container input {
		width: 100%;
		padding: .8rem 1.6rem;
		border-radius: .4px;
	}


	@media screen and (max-width: 799px) {
		main {
			grid-template-columns: repeat(auto-fit, minmax(204px, 1fr));
		}
	}

	@media screen and (max-width: 430px) {

	}
</style>
