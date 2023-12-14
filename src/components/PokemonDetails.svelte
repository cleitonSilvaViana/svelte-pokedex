<script>
	// signals
	import { pokemon } from '$signals/Pokemon.svelte';

	function id() {
		const id = pokemon.selected.id;
		const flag = id < 9 ? `000${id}` : id < 99 ? `00${id}` : `0${id}`;
		return flag;
	}
</script>

<div class="pokemon">
	{#if pokemon.selected}
		<h1>{pokemon.selected.name}</h1>

		<div class="details">
			<ul>
				{#each pokemon.selected.types as type}
					<li>{type.type.name}</li>
				{/each}
			</ul>
			<a class="id" href="">#{id()}</a>
		</div>

		<img
			src={pokemon.selected.sprites.other.dream_world.front_default}
			alt="{pokemon.name} image"
		/>

		<div class="statistics">
            <table>
                <tbody>
                    <tr>
                        <td>Specie</td>
                        <td>{pokemon.selected.species.name}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{pokemon.selected.height}</td>
                    </tr>

                    <tr>
                        <td>weight</td>
                        <td>{pokemon.selected.weight}</td>
                    </tr>
            
                    <tr>
                        <td>Abilities</td>
                        <td>
                            {#each pokemon.selected.abilities as m}
                                {m.ability.name},
                            {/each}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	{:else}
		<h1>Selecione um pokemon</h1>
	{/if}
</div>

<style>
	.pokemon {
        height: 100%;
		display: grid;
		grid-template-rows: min-content min-content 188px auto;
		gap: 1.6rem;
	}

	h1 {
		font-size: 3.2rem;
        text-transform: capitalize;
	}

	.details {
		margin: 1.6rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		width: fit-content;
	}

	li {
		margin-right: 0.8rem;
	}

	a,
	li {
		display: inline-block;
		width: fit-content;
		padding: 0.8rem 1.6rem;
		background-color: lightgray;
		border-radius: 0.4rem;
	}

    img {
        height: 100%;
        width: auto;
        object-fit: cover;
        margin: 0 auto;
    }

	.statistics {
        height: 100%;
        width: 100%;
        background-color: antiquewhite;
    }
</style>
