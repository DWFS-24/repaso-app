import { useState } from 'react'

const Counter = () => {
  const [ count, setCount ] = useState(0)
  
  const countPlus = () => {
    setCount( count + 1 )
  }


  return (
    <div>
      <button type="button" onClick={() => setCount(count - 1) }>-1</button>
      <p>{count}</p>
      <button type="button" onClick={() => countPlus()}>+1</button>
    </div>
  )
}

export default Counter