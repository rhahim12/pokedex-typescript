
// import { useState } from "react";


export function Searchbar({ setRech }: { setRech: Function }) {
    // const [evolution, setEvolution]= useState("")

    function start(event: any) {
        event.preventDefault();
        const FormData_obj = new FormData(event.target)
        const recherche = FormData_obj.get("search")
        console.log(recherche)
        setRech(recherche)

    }


    return (
        
            <form  className="search" onSubmit={start}>
                <button>OK</button>
                <input type="text" name="search" />

            </form>
        
    )


}