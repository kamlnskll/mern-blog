import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Post = () => {
  let { id } = useParams()

  const [postData, setPostData] = useState('')

  async function getPost(id) {
    await axios
      .get(`http://localhost:8080/api/posts/${id}`)
      .then((res) => {
        console.log(res.data)
        setPostData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getPost(id)
    console.log(id)
  }, [])

  return (
    <div>
      <img src={postData.img} alt='Post Image' className='p-12 mx-auto' />
      <div className='w-2/3 text-center mx-auto'>
        <h1 className='pt-16 text-4xl font-bold'>{postData.title}</h1>
        <h2 className='pt-12 text-lg font-semibold'>
          Written by: "AUTHOR NAME HERE EVENTUALLY"
        </h2>
        <p className='pt-16'>{postData.body}</p>
      </div>
    </div>
  )
}

export default Post
