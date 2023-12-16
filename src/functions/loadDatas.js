import { pokemons } from "$signals/Pokemons.svelte"

export default async function loadData() {
    // params
    // 1º um objeto fetch oriundo do svelte
    // 2º parametros, dados dos pokemons (bem como o link 'next')

    // definindo a url para a próxima requisição...
    const url = (pokemons.list.length === 0) 
              ? 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0' 
              : pokemons.url


    // buscando os próximos 12 pokémons
    let res = await fetch(url)
    res = await res.json()

    // Armazenando em um array, as urls oriundas de cada pokemon resgatado na requisição acima
    const urls = await res.results.map(el => el.url)

    // Função genérica cujo objetivo é fazer uma requisição para uma URL fornecida (neste caso, para a url do pokemon)
    const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return await data;
    };

    // Buscando os dados específicos de cada um dos 12 pokemons procurados anteriormente 
    const promises = urls.map(url => fetchData(url));

    // Esperando TODAS as requisições serme concluídas
    const allLoaded = Promise.all(promises)
        .then(results => {
            // adicionando no signals todos os pokemons com seus respectivos dados...
            pokemons.add = results
            
            // re-atribuíndo um novo valor contendo a url necessária para a próxima busca de pokemons
            pokemons.url = res.next 
        })
        .catch(error => {
            console.error('Erro:', error);
        });

    return {
        // tal função irá retornar de maneira simbólica alguma coisa ao ser concluída (evita iniciar a página sem que os dados oriundos da api estejam carregados)
        loaded: await allLoaded
    }
}