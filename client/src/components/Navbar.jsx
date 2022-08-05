
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useState, useEffect } from 'react'

const Navbar = () => {

  const { logout } = useLogout()

const [user, setUser] = useState(null)

const checkUser = () => {
  // Check local storage for user and set user flag to true
  const token = localStorage.getItem('token')
  if(token){
console.log('Token is found, user is logged in')
setUser(true)

  } else{
console.log('Token is not found, user not logged in')
  } setUser(false)
}

useEffect(() => {
  checkUser()
},[])


  return (
    <div>
      <div class='navbar bg-primary text-primary-content flex justify-between p-6 mb-24'>
        <div className='flex'>
          <h1 className='text-3xl font-bold'>Bloggers</h1>
        </div>
        <div className='flex'>
          {!user && (
            <>
              {' '}
              <Link className='btn btn-ghost normal-case text-xl' to={`/login`}>
                Login
              </Link>
              <Link
                className='btn btn-ghost normal-case text-xl'
                to={`/register`}
              >
                Register
              </Link>{' '}
            </>
          )}
          {user && (
            <Link
              className='btn btn-ghost normal-case text-xl btn-warning'
              
            >
              Logout
            </Link>
          )}

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
