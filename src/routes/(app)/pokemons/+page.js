import { pokemons } from "$signals/Pokemons.svelte"

export async function load({ fetch }) {

    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=90&offset=0')
    res = await res.json()
    pokemons.add = await res.results
	pokemons.url = await res.next
}