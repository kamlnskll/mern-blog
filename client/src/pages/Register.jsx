import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className='mx-auto w-1/3'>
        <div class='form-control'>
          <label class='input-group input-group-vertical'>
            <span>Email</span>
            <input
              type='text'
              placeholder='Enter your email'
              class='input input-bordered'
              required
            />
          </label>
        </div>
        <div className='flex w-full gap-4'>
          <div class='form-control flex-1 mt-4'>
            <label class='input-group input-group-vertical'>
              <span>First Name</span>
              <input
                type='text'
                placeholder='Enter your email'
                class='input input-bordered'
                required
              />
            </label>
          </div>
          <div class='form-control flex-1 mt-4'>
            <label class='input-group input-group-vertical'>
              <span>Last Name</span>
              <input
                type='text'
                placeholder='Enter your email'
                class='input input-bordered'
                required
              />
            </label>
          </div>
        </div>
        <div class='form-control mt-4'>
          <label class='input-group input-group-vertical'>
            <span>Password</span>
            <input
              type='password'
              class='input input-bordered'
              placeholder='Enter your password'
              required
            />
          </label>

          <div class='form-control mt-4'>
            <label class='input-group input-group-vertical'>
              <span>Confirm Password</span>
              <input
                type='password'
                class='input input-bordered'
                placeholder='Confirm your password'
                required
              />
            </label>

            <div className='mt-12 w-48 mx-auto flex gap-6'>
              <Link to='/register'>
                <button class='btn btn-warning font-bold hover:bg-orange-400'>
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
