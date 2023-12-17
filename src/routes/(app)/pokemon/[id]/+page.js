export async function load({ fetch, params }) {

    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
        .then(res => res.json())

    let specie = await fetch(` https://pokeapi.co/api/v2/pokemon-species/${params.id}/`)
        .then(res => res.json())


    const speciesList = await fetch(specie.evolution_chain.url)
    .then(res => res.json())
    .then(res => res.chain)
    .then((res) => {
        const evolutions = []

        function m(currentPath) {
            if (currentPath) {
                // verificando se parametro passado é um array
                // se for, iremos transformá-lo emm um objeto
                const isArray = Array.isArray(currentPath)
                if (isArray) currentPath = currentPath[0]

                // adicionando a evolução desta iteração no array
                evolutions.push(currentPath.species)

                // se o array da próxima iteração não for um array vazio
                // chamarei a função recursivamente...
                if(currentPath.evolves_to.length > 0) m(currentPath.evolves_to)
        
            } else {
                return evolutions
            }
        }

        m(res)

        return evolutions
    })


    const fetchData = async (url) => {
        const res = await fetch(url)
        return await res.json()
    }  
    
    const loadingPokemonDatas = speciesList.map(specie => fetchData(`https://pokeapi.co/api/v2/pokemon/${specie.name}`))
    const evolutions = Promise.all(loadingPokemonDatas).then(results => console.log('results: ',results))

    return {
        pokemon: await res,
        specie: await specie,
        evolutions: await evolutions
    }
}