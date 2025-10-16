import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemonName, setPokemonName] = useState("")

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="App">
      <div className='TitleSection'>
<h1>Pokemon</h1>
<input type="text" onChange={(event) => {setPokemonName(event.target.value)}} />
<button onClick={searchPokemon}>Search Pokemon</button>
  </div>
    </div>
  )
}

export default App
