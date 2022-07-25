import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    axios
      .post(`http://localhost:8080/api/users/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className='mt-12 w-48 mx-auto flex gap-6'>
          <button
            class='btn btn-info font-bold hover:bg-blue-400'
            onClick={handleLogin}
          >
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
