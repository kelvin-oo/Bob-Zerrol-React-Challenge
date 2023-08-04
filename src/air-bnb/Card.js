import React from 'react'
// import image from '../images/20211219_030934.jpg'
export default function Card({score, title, price, image, location}) {
  return (
      <article
          key={score}
      >
          <img src={image} alt="" />
          <h1>{score}/6</h1>
          <span>{location}</span>
          <p>{title}</p>
          <h3>from {price}$ per person</h3>
    </article>
  )
}
