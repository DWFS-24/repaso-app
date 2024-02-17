import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Hello from './components/Hello'
import ListElements from './components/ListElements'

const App = () => {

  const [ text, setText ] = useState('')

  const canasta = [ 'naranja', 'fresa', 'melon', 'sandia']
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      { text }
      <Hello name={text} />
      <ListElements list={canasta} />
      <Counter />
    </>
  )
}

export default App
