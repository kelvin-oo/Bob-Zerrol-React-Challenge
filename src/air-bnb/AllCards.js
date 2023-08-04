import React from 'react'
import Card from './Card'
function AllCards() {
  return (
    <div>
      <Card
        score='26'
        title= 'ola'
        price= '120'
        // image='../images/20211219_030934.jpg'
        location='usa'
      />
      <Card
        score='26'
        title= 'ola'
        price= '120'
        // image='../src/images/20211225_143040.jpg'
        location='usa'
      />
    </div>
  )
}

export default AllCards
