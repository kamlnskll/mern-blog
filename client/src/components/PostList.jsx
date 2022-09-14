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
        // console.log(res.data)
        setPosts(res.data)
        console.log(posts)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='grid grid-rows-1 sm:grid-flow-col sm:my-6 justify-between sm:overflow-scroll mx-8 sm:gap-8'>
      {posts &&
        posts.map((post, index) => {
          return (
            <div
              className='card card-compact sm:scale-90 sm:w-96 bg-base-100 shadow-xl my-4 sm:my-6'
              key={index}
            >
              <figure>
                <img alt='Shoes' src={post.img} className='max-h-36 object-fit' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title mx-auto'>{post.title}</h2>
                <p className='max-h-32 overflow-hidden text-justify mx-4 my-4 rounded-xl'>{post.body}</p>
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
