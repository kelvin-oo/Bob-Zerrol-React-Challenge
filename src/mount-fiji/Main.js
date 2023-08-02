import React from 'react'
import { Data } from './Data'
import Card from './Card'
export default function Main() {
  return (
      <>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, eaque?</h1>
          {
              Data.map((item) => {
                  return (
                      <Card key={item.key} item={item} />
                  )
              })
         }
      </>
  )
}

