<script>
    // components
    import Header from '$components/Header.svelte';

	const { data } = $props();
	const { pokemon } = data;
</script>

<Header />
<main class="container">
	<section class="links">
        <a href="" class="bg-water">
            <strong>Pokemons</strong>
        </a>

        <a href="" class="bg-fire">
            <strong>Moves</strong>
        </a>

        <a href="" class="bg-ghost">
            <strong>Abilities</strong>
        </a>

        <a href="" class="bg-grass">
            <strong>Locations</strong>
        </a>

        <a href="" class="bg-poison">
            <strong>Type charts</strong>
        </a>
    </section>
	<section>
        <a href="{`/pokemon/${pokemon.id}`}">
            <img src="{pokemon.sprites.other['official-artwork'].front_default}" alt="{`${pokemon.name} image`}">
        </a>
    </section>
</main>

<style>
    main {
        height: calc(100dvh - 48px);
        padding: 40px 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 30px;
    }

    section {
        width: 100%;
    }

    img {
        width: 100%;
    }

    .links a {
        display: block;
        padding: 16px 32px;
        text-align: right;
        margin: 16px 0;
        border-radius: 16px;
    }

    strong {
        font-size: 1.6rem;
    }

</style>
