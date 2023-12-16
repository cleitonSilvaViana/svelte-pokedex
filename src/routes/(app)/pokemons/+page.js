/* import { pokemons } from "$signals/Pokemons.svelte"

export async function load({ fetch }) {
 
    if(pokemons.list.length === 0) {

        let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')
        res = await res.json()
        
        const urls = await res.results.map(el => el.url)
        
        // Função para fazer uma requisição para uma URL
        const fetchData = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            return await data;
        };
        
        // realizando busca na api para cada url do array urls
        const promises = urls.map(url => fetchData(url));
        
        const allLoaded = Promise.all(promises)
        .then(results => {
            pokemons.add = results
            pokemons.url = res.next
        })
        .catch(error => {
            console.error('Erro:', error);
        });
        
        return {
            loaded: await allLoaded
        }
    }
        
} */


// functions
import loadData from '../../../functions/loadDatas'

export async function load() {
    const res = await loadData()

    return {
        res: await res
    }
} 
