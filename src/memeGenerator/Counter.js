import React, {useState} from 'react'
import Count from './Count'
export default function Counter() {
  const [counter, setCounter] = useState(0)
  const handlePlus = () => {
  setCounter(prev => prev + 1)
}
const handleMinus = () => {
  setCounter(prev => prev - 1)
}
  return (
    <div>
      <Count counter={counter} />
      <button onClick={handlePlus}>counter plus</button>
      <button onClick={handleMinus}>counter minus</button>
    </div>
  )
}

