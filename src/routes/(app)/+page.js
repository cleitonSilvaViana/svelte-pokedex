export async function load({ fetch }) {

    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    res = await res.json()

	return {
        res,
		pokemons: res.results
	}
}