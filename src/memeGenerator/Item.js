import React, {useState} from 'react'

export default function Item() {
    const [first, setFirst] = useState(['thing 1', 'thing 2', 'thing 3', 'thing 4', 'thing 5'])
    const things = first.map((thing) => {
        return (
             <p key={thing}>{ thing }</p>
        )
    })
    
    const handleClick = () => {
        const newText = `thing ${first.length + 1}`
        setFirst(prev => [...prev, newText] )
        // console.log(thingArray)
    }
  return (
      <div>
          <button onClick={
              handleClick
          }>Add Item</button>
         {things}
          
    </div>
  )
}
