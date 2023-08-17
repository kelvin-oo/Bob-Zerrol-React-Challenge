import React, {useState} from 'react'
import Tracker from './Tracker'
export default function Track() {
    const [show, setShow] = useState(true)
    const handleClick = () => {
        setShow(prev => !prev)
    }
  return (
      <div>
          {show && <Tracker onClick={handleClick} show={show} />}
          <button onClick={handleClick}>toggle</button>
    </div>
  )
}
