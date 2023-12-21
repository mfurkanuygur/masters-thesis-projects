import { useEffect, useState } from 'react'
import './App.css'
import getApiData from './request/request'

function App() {
  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    getApiData.then(items => { setPokemons(items?.results), console.log(items.results) })
  }, [])
  return (
    <ul>
      {
        pokemons?.map(( pokemon, index) => (
          <li key={index}>{ pokemon.name}</li>
        ))
      }
    </ul>
  )
}

export default App
