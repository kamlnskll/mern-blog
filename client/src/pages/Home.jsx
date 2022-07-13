import React from 'react'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Featured />
      <h1 className='text-3xl font-semibold'>Home</h1>
    </div>
  )
}

export default Home
