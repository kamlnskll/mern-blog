import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Post = () => {
  const [postData, setPostData] = useState(null)

  async function getPost() {
    await axios
      .get('http://localhost:8080/api/posts/:id')
      .then((res) => {
        console.log(res.data)
        setPostData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getPost()
  }, [])

  return <div>${postData.body}</div>
}

export default Post
