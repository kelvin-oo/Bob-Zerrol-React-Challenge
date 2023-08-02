import React from 'react'

export default function Posts({ posts }) {

  return (
      <div className="posts">
          {posts.map((post) => (
              <div className="post" key={post.id}>
                  <h1>{post.title.slice(0,15)}</h1>
                  <h1>{post.title.slice(0,15)}</h1>
              </div>
          ))}
     </div>
  )
}
