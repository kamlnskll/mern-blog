import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostList = () => {
  useEffect(() => {
    getPosts()
  }, [])

  const [posts, setPosts] = useState(null)

  async function getPosts() {
    await axios
      .get('http://localhost:8080/api/posts')
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='flex overflow-hidden'>
      {posts &&
        posts.map((post, index) => {
          return (
            <div
              class='card card-compact w-96 bg-base-100 shadow-xl m-6'
              key={index}
            >
              <figure>
                <img alt='Shoes' src={post.img} />
              </figure>
              <div class='card-body'>
                <h2 class='card-title'>{post.title}</h2>
                <p>{post.body}</p>
                <div class='card-actions justify-end'>
                  <button class='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PostList
