import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext'

const Login = () => {

const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {dispatch} = useAuthContext()

  const handleLogin = () => {
    axios
      .post(`http://localhost:8080/api/users/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response)
        const token = response.data.token
        const isAdmin = response.data.isAdmin
          // Save user json data to localStorage
  
          localStorage.setItem('token', JSON.stringify(token))
          localStorage.setItem('isAdmin', JSON.stringify(isAdmin))

          // Update AuthContext

          dispatch({type: 'LOGIN', payload: token})

          navigate("/")

        
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='mx-auto w-1/3 mb-24'>
      <div class='form-control my-4'>
        <label class='label'>
        <span class="block text-sm font-medium text-slate-700">Email</span>

        </label>
          <input
            type='email'
            required
            placeholder='Enter your email'
            class='input input-bordered peer nvalid:border-red-500 invalid:text-red-500
            focus:invalid:border-red-500 focus:invalid:ring-red-500'
            onChange={(e) => setEmail(e.target.value)}
          />

        
      </div>
      <div class='form-control'>
        <label class='label'>
        <span class="block text-sm font-medium text-slate-700">Password</span>       
         </label>
          <input
            type='password'
            required
            class='input input-bordered peer nvalid:border-red-500 invalid:text-red-500
            focus:invalid:border-red-500 focus:invalid:ring-red-500'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
         
       
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
