import type { PokemonDTO } from "./PokemonDTO"




export function Pokemondetail({ pokemon }: { pokemon: PokemonDTO }) {


    const apitype = pokemon.apiTypes
    const evotype = apitype.map((evo: any) => {
        return (
                <img src={evo.image} alt="" />
        )
    })
    // console.log(evotype)






    return (
        <div className="pokedetail">
            <h1>POkemondetail</h1>
            <h1>n°{pokemon.id}</h1>
            <img src={pokemon.image} alt="" />
            <p>{pokemon.name}</p>
            <p>Types</p>
            <div className="evolution">
            {evotype}
            </div>

        </div>
    )
} 