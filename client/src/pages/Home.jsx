import React from 'react'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import PostList from '../components/PostList'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center pt-12 pb-4'>HOME</h1>
      <PostList />
      <h1 className='text-3xl font-semibold text-center pt-12 pb-4'></h1>
    </div>
  )
}

export default Home
