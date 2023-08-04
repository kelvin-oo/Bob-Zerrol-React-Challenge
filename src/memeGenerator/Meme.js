import React, {useState} from 'react'

import MemeData from './MemeData'
export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bootomText: '',
        link: '../images/eden.jpg'
    })
    const [memeDat, setMemeData] = useState(MemeData)
    const getMeme = (e) => {
        e.preventDefault()
        const memeArray = memeDat.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prev => {
            return {...prev, link:url}
        })
    }
    const handleTopChange = (e) => {
        setMeme(prev => {
            return{...prev, [e.target.name]: e.target.value}
        })
        console.log(e.target.name)
    }

    
  return (
      <div style={{
          position: 'absolute'
      }}>
          <form action="">
              <label htmlFor="">
                  Top Text
                  <input name='topText' value={meme.topText} onChange={handleTopChange} type="text" placeholder='enter the top text'/>
              </label>
              <label htmlFor="">
                  bottom Text
                  <input name='bootomText' value={meme.bootomText} onChange={handleTopChange} type="text" placeholder='enter the bottom text'/>
              </label>
              <button onClick={getMeme} type='submit'>generatee meme</button>
          </form>
          <img src={meme.link} style={{
              width: '400px'
          }} alt="" />
          <h3 style={{
              position: 'relative',
              bottom: '300px',
              left: '80px'
          }}>{meme.topText}</h3>
          <h3 style={{
              position: 'relative',
              bottom: '80px',
              left: '80px'
          }}>{meme.bootomText}</h3>
    </div>
  )
}

