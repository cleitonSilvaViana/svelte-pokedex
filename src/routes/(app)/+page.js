
export async function load({ fetch }) {
    const id = Math.floor(Math.random() * 1292)

    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    res = await res.json()
    
    return {
        pokemon: await res
    }
}