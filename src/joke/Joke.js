import React from 'react'
import { JokeData } from './JokeData'
export default function Joke(props) {
    const nums = [1, 2, 3, 4, 5]
    const colors = ['red', 'green', 'yellow', 'black', 'blue', 'orange', 'brown']
    // console.log(nums)
    const square = nums.map(num => {
        return (
            num*num
        )
    })
    console.log(square)
  return (
      <div>
          {
              colors.map((color) => {
                  return (
                      <h1>{ color }</h1>
                  )
              })
          }
          { props.punchline && <h1>{ props.punchline }</h1>}
          <h1>{props.question}</h1>
          {
              JokeData.map((jo) => {
                  return (<>
                      <h1>{ jo.joke }</h1>
                      <h1>{ jo.punch }</h1>
                  </>
                  )
              })
          }
    </div>
  )
}

