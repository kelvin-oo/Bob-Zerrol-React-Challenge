import React from 'react'

export default function Tracker({ show, handleClick }) {
    console.log(show)
  return (
      <div>
          <h1>Window Width: {window.innerWidth}</h1>
      <button onClick={() => handleClick()}>SHow or not</button>
      </div>
  )
}
