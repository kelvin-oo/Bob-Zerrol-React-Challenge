import React from 'react'

export default function Card({item}) {
  console.log(item)
  return (
      <section className="mainCard">
      <div className="pic">
          <img src={item.imageUrl} alt="" />
      </div>
      <div className="content">
        <h1>{item.location}</h1>
        <span><a href={item.Url}>visit on google map</a></span>
        <h2>{item.title}</h2>
        <div className="date">
          <span>{item.startDate}</span>
          <span>  /  {item.endDate}</span>
        </div>
        <div className="description">
          {item.description}
        </div>
      </div>
    </section>
  )
}

