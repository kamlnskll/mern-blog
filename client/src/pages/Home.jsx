import React from 'react'

import PostList from '../components/PostList'
import EmailCapture from '../components/EmailCapture'

const Home = () => {
  return (
    <div className='sm:text-center'>
      <h1 className='text-3xl font-extrabold sm:pl-12 sm:pt-12 sm:pb-4 sm:text-left text-center'>HOME</h1>
      <PostList />
      <EmailCapture />
    </div>
  )
}

export default Home
