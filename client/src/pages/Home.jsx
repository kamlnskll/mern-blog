import React from 'react'

import PostList from '../components/PostList'
import EmailCapture from '../components/EmailCapture'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='sm:text-center'>
      <Hero />
      <h1 className='text-3xl font-extrabold sm:pl-12 sm:pt-12 sm:pb-4 sm:text-left text-center'>HOME</h1>
      <PostList />
      <EmailCapture />
      <div className='flex ml-24'>
    <div className='mx-4 py-8'>
      <h2 className='text-2xl font-bold uppercase'>The number one fictional blog!</h2>
      <p className='text-lg mt-8 max-w-1/2'>We are a fictional blog dedicated to existing purely to showcase my ability to write a basic blog app with React, Node and other JS technologies.</p>
      </div>
      <img className='scale-75'/>
    </div>
    </div>
  )
}

export default Home
