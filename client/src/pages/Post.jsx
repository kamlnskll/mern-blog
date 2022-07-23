import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Post = () => {
  let { postId } = useParams()

  const [postData, setPostData] = useState('')

  async function getPost(postId) {
    await axios
      .get(`http://localhost:8080/api/posts/${postId}`)
      .then((res) => {
        console.log(res.data)
        setPostData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getPost(postId)
    console.log(postId)
    console.log(postData)
  }, [])

  return <div>Here is the post page for post ID: ${} </div>
}

export default Post
