import React, {useEffect, useState} from 'react'

export default function Fetch() {
  const [data, setData] = useState()
  useEffect(() => {
    async function info() {
      const res = await fetch('')
      const data = res.json()
      setData(data)
    }
  
    info()
  }, [])
  
  return (
    <div>

    </div>
  )
}
