export interface PokemonDTO{
    id : number;
    name:string;
    image:any;
    sprite:string;
    evo:Array<{id:number}>;
    apiTypes:Array<{name:string, image:any}>
    apiEvolutions : ApiEvo[]
    

    
}


export interface ApiEvo{
    pokedexId : string;
    name : string;
}
