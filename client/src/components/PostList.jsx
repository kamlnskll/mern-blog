import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext'

const PostList = () => {

  const {user} = useAuthContext()
  useEffect(() => {
    if (user){
    getPosts()}
  }, [user])

  const [posts, setPosts] = useState(null)



  async function getPosts() {
    await axios
      .get(`http://localhost:8080/api/posts/`, {
        headers: {
          'Authorization': `Bearer ${user}`
        }
      })
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
              className='card card-compact w-96 bg-base-100 shadow-xl m-6'
              key={index}
            >
              <figure>
                <img alt='Shoes' src={post.img} className='' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{post.title}</h2>
                <p>{post.body}</p>
                <div className='card-actions justify-end'>
                  <Link to={`/posts/${post._id}`}>
                    <button className='btn btn-primary'>Read Article</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PostList
