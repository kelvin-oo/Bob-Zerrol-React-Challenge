import React,{useState} from 'react'
import Data from './Data'
import Box from './Box'
export default function Boxes() {
    const [data, setData] = useState(Data)
    const toggle = (id) => {
        // console.log(id)
        setData(prev => {
            return prev.map((pre) => {
                return pre.id === id ? {...pre, on: !pre.on} : pre
            })
        })
    }
    const Boxes = data.map((box) => {
        return (
            <Box on={box.on} key={box.id} toggle={ toggle } id={box.id} />
        )
    })
  return (
      <div style={{
          display: 'flex'
      }}>
          {Boxes}
    </div>
  )
}

