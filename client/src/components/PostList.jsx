import axios from 'axios'
import React, { useState } from 'react'

const PostList = () => {
  const [postImg, setPostImg] = useState('')
  const [postShortDesc, setPostShortDesc] = useState('')
  const [postBody, setPostBody] = useState('')

  async function getPosts() {
    await axios.get('http://localhost:8080/api/posts').then((res) => {
      console.log(res.data)
    })
  }

  return <div>PostList</div>
}

export default PostList
