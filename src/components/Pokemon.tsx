import type { PokemonDTO } from "./PokemonDTO"



export function Pokemon({pokemon,onClickPokemon}:{pokemon:PokemonDTO,onClickPokemon:(pokemon:PokemonDTO)=>void}){


    // console.log(pokemons.name)
    

    function start(){
        console.log(pokemon)
        onClickPokemon(pokemon)
    }

return (
    <div className="total" onClick={start}>
        <p>{pokemon.id}</p>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprite} alt="" />
    </div>
)





}