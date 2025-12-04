import type { PokemonDTO } from "./PokemonDTO";
import { Pokemon } from "./Pokemon";


export function PokemonList({ pokemons, onClickPokemon }: { pokemons: PokemonDTO[], onClickPokemon: (pokemon: PokemonDTO) => void }) {

    const pokemonItems = pokemons.map((pokemon) => {
        return (
            <Pokemon pokemon={pokemon} onClickPokemon={onClickPokemon} />

        )
    })
    // console.log(pokemonItems)
    return (
        <div>
            {pokemonItems}



        </div>
    )
}