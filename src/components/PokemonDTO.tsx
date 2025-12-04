export interface PokemonDTO{
    id : number;
    name:string;
    image:any;
    sprite:string;
    evo:Array<{id:number}>;
    apiTypes:Array<{name:string, image:any}>
    
    

    
}
