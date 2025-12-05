import type { ApiEvo, PokemonDTO } from "./PokemonDTO"




export function Pokemondetail({ pokemon }: { pokemon: PokemonDTO }) {


    const apitype = pokemon.apiTypes
    const evotype = apitype.map((evo: any) => {
        return (
            <img src={evo.image} alt="" />
        )
    })
    // console.log(pokemon.apiEvolutions);
    const apievo = pokemon.apiEvolutions
    // console.log(apievo[0].pokedexId)
    console.log("rhamss")





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
            <h1>Evolution</h1>
            {apievo.length <= 0 ? <p>Pas d'evo</p> :
                apievo.map((evo: ApiEvo) => (
                        <div className="pokeevo">
                            <h1>{evo.pokedexId}</h1>
                            <p>{evo.name}</p>
                            <img src={pokemon.sprite} alt="" />
                        </div>
                    )
                )
            }
          



        </div>
    )
} 