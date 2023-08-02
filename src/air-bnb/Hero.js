import React from 'react'
import image from '../images/leave.jpg'

export default function Hero() {
  return (
      <section className="hero">
          <div className="heroImg">
              <img src={image} alt="" />
          </div>
          <h1>Online Experiences</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta recusandae similique numquam repellendus vel quisquam soluta, saepe eaque qui vero.</p>
    </section>
  )
}
