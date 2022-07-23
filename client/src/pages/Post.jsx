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

  return <div>This post ID is {id} </div>
}

export default Post
