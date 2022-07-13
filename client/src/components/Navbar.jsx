import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div class='navbar bg-primary text-primary-content flex justify-between p-5'>
        <div className='flex'>
          <h1 className='text-3xl font-bold'>Bloggers</h1>
        </div>
        <div className='flex'>
          <a class='btn btn-ghost normal-case text-xl'>Home</a>
          <a class='btn btn-tertiary normal-case text-xl'>Join</a>
          <a class='btn btn-ghost normal-case text-xl'>About</a>
          <a class='btn btn-ghost normal-case text-xl'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
