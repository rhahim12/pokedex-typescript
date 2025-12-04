
import { createRoot } from 'react-dom/client'
// import ReactDom from 'react-dom/client' 
import { App } from './components/App'


// import React from 'react'

fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
  .then(res => res.json())
  .then(pokemons => {


    createRoot(document.getElementById('root')!).render(

        <App pokemons={pokemons} />

    )
  })
