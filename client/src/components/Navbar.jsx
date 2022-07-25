import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div class='navbar bg-primary text-primary-content flex justify-between p-6 mb-16'>
        <div className='flex'>
          <h1 className='text-3xl font-bold'>Bloggers</h1>
        </div>
        <div className='flex'>
          <Link className='btn btn-ghost normal-case text-xl' to={`/login`}>
            Login
          </Link>
          <Link className='btn btn-ghost normal-case text-xl' to={`/register`}>
            Register
          </Link>

          <Link
            className='btn btn-ghost normal-case text-xl btn-warning'
            to={`/logout`}
          >
            Logout
          </Link>

          <Link className='btn btn-ghost normal-case text-xl' to={`/`}>
            Home
          </Link>

          <Link className='btn btn-ghost normal-case text-xl' to={`/about`}>
            About
          </Link>
          <Link className='btn btn-ghost normal-case text-xl' to={`/contact`}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
