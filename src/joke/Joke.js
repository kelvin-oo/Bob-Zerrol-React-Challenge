import React, {useState} from 'react'
import { JokeData } from './JokeData'
export default function Joke(props) {
    const [isShown, setIsShown] = useState(true)
    const handleClick = () => {
        setIsShown(prev => {
            return !prev
        })
    }
  return (
      <div>
          { props.punchline && <h1>{ props.punchline }</h1>}
          <h1>{props.question}</h1>
          {
              JokeData.map((jo) => {
                  return (<>
                      <h1>{ isShown && jo.joke }</h1>
                      <h1>{jo.punch}</h1>
                  </>
                  )
              })
          }
          <button onClick={handleClick}>{isShown ? 'Hide Punch Line' : 'Show punchline'}</button>
    </div>
  )
}

