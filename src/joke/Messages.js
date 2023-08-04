import React from 'react'

export default function Messages() {
    const [messages, setMessages] = React.useState(['a', 'b'])
    console.log(messages)
    const clearMessage = () => {
        setMessages([])
    }
  return (
      <div>
          {messages.length > 0 ? <h1>You have {messages.length} unread message{ messages.length > 1 && 's'}</h1> : <h1>You are all caught up</h1>}
          <button onClick={clearMessage}>Clear Messages</button>
    </div>
  )
}
