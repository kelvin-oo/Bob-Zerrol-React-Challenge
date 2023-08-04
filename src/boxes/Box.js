import React from 'react'

export default function Box({on, toggle, id}) {
  return (
    <div style={{
              background: on ? 'red' : 'black',
              height: '100px',
              width: '100px',
              margin: '10px',
      }}
          onClick={() => {toggle(id)}}
      ></div>
  )
}
