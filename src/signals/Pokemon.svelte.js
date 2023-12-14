// @ts-nocheck
class Pokemon {
    selected = $state(null)


    set select(pokemon) {
        this.selected = pokemon
    }
}

export const pokemon = new Pokemon()