import React, { useEffect, useState } from 'react'
import Posts from './Posts'
export default function Pagination() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json()
            setPosts(data)
        }
        fetchPosts()
    }, [])
    
  return (
    <div className="container">
      <Posts posts={posts} />
    </div>
  );
}

