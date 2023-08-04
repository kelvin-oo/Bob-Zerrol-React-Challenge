// import React,{useState} from 'react'

// export default function Going() {
//     const [going, setGoing] = useState(true)
//     const handleClick = () => {
//         setGoing(prev => !prev)
//     }
//   return (
//       <div>
//           <h1>Do i feel like going out?</h1>
//           <div onClick={handleClick}>
//               <h1>{going ? 'yes' : 'no'}</h1>
//           </div>
//     </div>
//   )
// }
import React, {useState} from 'react'

export default function Going() {
    const [contact, setContact] = useState({
        firstName: 'john',
        lastName: 'Doe',
        phone: '09090102835',
        email: 'itsmyemail@gmail.com',
        isFavorite: true,
    })
    const handleClick = () => {
        setContact(prev => {
            return {
            ...prev, isFavorite: !prev.isFavorite
        }
    })
  };

  return (
      <div>
          <h1>{contact.firstName}</h1>
          <h1>{contact.lastName}</h1>
          <h1>{contact.phone}</h1>
          <h1>{contact.email}</h1>
          <h3>{contact.isFavorite ? 'favourite' : 'not favourite'}</h3>
          <button onClick={handleClick}>favour button</button>
    </div>
  )
}
