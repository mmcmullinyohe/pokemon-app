import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='TitleSection'>
<h1>Pokemon</h1>
<input type="text" />
<button>Search Pokemon</button>
  </div>
    </div>
  )
}

export default App
