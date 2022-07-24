import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mx-auto w-1/3'>
      <div class='form-control'>
        <label class='label'>
          <span class='label-text'>Email Address</span>
        </label>
        <label class='input-group input-group-vertical'>
          <span>Email</span>
          <input
            type='text'
            placeholder='Enter your email'
            class='input input-bordered'
          />
        </label>
      </div>
      <div class='form-control'>
        <label class='label'>
          <span class='label-text'>Password</span>
        </label>
        <label class='input-group input-group-vertical'>
          <span>Password</span>
          <input
            type='password'
            class='input input-bordered'
            placeholder='Enter your password'
          />
        </label>
        <div className='mt-12 w-48 mx-auto flex gap-6'>
          <button class='btn btn-info font-bold hover:bg-blue-400'>
            Login
          </button>
          <Link to='/register'>
            <button class='btn btn-warning font-bold hover:bg-orange-400'>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
