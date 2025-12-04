// import { useState ,useEffect} from "react"

import "../App.css"
import type { PokemonDTO } from "./PokemonDTO";
import { PokemonList } from './Pokemonlist'
import { Searchbar } from "./Searchbar";
import { Pokemondetail } from "./Pokemondetail";
import { useState } from "react";



export function App({ pokemons }: { pokemons: PokemonDTO[], onClickPokemon:(pokemon:PokemonDTO)=>void }) {
    const [currentPokemon, setPokemon] = useState(pokemons[1])

    function onClickPokemon(pokemon : PokemonDTO){
        setPokemon(pokemon)
    }





    return (
        <div className="App">
            <div className="pokelist">
                <PokemonList pokemons={pokemons}  onClickPokemon={onClickPokemon}/>
            </div>
            <div className="droite">
                <Searchbar setRech={(recherche: any) => {
                    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + recherche)
                        .then(res => {
                            if(!res.ok)throw "Erreur 404"
                            return res.json();
                        })
                        .then(Object => {
                            setPokemon(Object)
                            console.log(Object)
                            console.log("rhahim")

                        })
                }} />
                <h1>{currentPokemon.name}</h1>
                <Pokemondetail pokemon={currentPokemon} />
            </div>
        </div>
    )
}