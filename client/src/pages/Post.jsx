import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Post = () => {
  const [postData, setPostData] = useState('')
  const [id, setId] = useState('')

  async function getPost() {
    await axios
      .get(`http://localhost:8080/api/posts/`)
      .then((res) => {
        console.log(res.data)
        setPostData(res.data)
        setId(postData._id)
        console.log(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getPost(id)
    console.log(id)
  }, [])

  return <div>Here is the post page for post ID: ${} </div>
}

export default Post
