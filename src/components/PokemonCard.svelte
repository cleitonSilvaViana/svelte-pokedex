<script>
    const { pokemon } = $props()

</script>

<article>
    <h2>Bulbassaur</h2>
    <div>
        <ul>
            <li>fire</li>
            <li>Water</li>
        </ul>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="...">
    </div>
</article>

<style>
    article {
        width: 100%;
        border-radius: .8rem;
        background-color: aquamarine;
        padding: 1.6rem .8rem .8rem;
    }

    h2 {
        color: #333;
        font-size: 2rem;
    }

    div {
        display: flex;
        justify-content: space-between;
        gap: .8rem;
    }

    ul {
        display: inline-block;
    }

    li {
        padding: .8rem 1.6rem;
        border-radius: .8rem;
        background-color: aqua;
        width: fit-content;
        margin: .8rem 0;
        font-size: 1.4rem;
        text-transform: capitalize;
    }

    img {
        display: inline-block;
        width: 50%;
        max-width: 116px;
    }
</style>