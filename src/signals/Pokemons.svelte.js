//@ts-nocheck 
export class Pokemons {
    list = $state([]) // lista de pokemons
    searched = $state([]) // lista contendo os pokemons encontrados na pesquisa
    input = $state('') // item com os dados do input de pesquisa
    url = $state(null)

    set search(param) {
        this.input = param
        this.searched.length = 0
        
        this.list.filter(el => {
            if (el.name.toLowerCase().includes(this.input.toLowerCase())) {
                this.searched.push(el)
            }
        })

        this.rescue
        this.load
    }

    get rescue() {
        if (this.input.trim() === '') {
            this.searched = [...this.list]
        }
        return
    }

    set add(pokemons) {
        console.log(this.list)

          // verificando se a lista está vazia
         if (this.list.length === 0) {
             this.list.push(...pokemons)
         } else {
             //verificando se o último elemento da lista possuí o mesmo nome do último elemento do array de pokemons que vou inserir
             console.log('aqui')
             if (this.list[this.list.length - 1].name !== pokemons[pokemons.length - 1].name) {
                 this.list.push(...pokemons)
             }
         }
  
             this.rescue
             this.load
    }

    get load() {
        let flag = [...this.list]
        this.list.length = 0
        this.list = [...flag]
        flag.length = 0

        flag = [...this.searched]
        this.searched.lenght = 0
        this.searched = [...flag]

        return
    }

}

export const pokemons = new Pokemons()