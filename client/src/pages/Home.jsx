import React from 'react'

import PostList from '../components/PostList'
import EmailCapture from '../components/EmailCapture'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center pt-12 pb-4'>HOME</h1>
      <PostList />
      <EmailCapture />
    </div>
  )
}

export default Home
