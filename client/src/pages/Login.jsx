import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext'
import validator from 'validator'

const Login = () => {

const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const {dispatch} = useAuthContext()

  const handleLogin = () => {

    if(validator.isEmail(email)){
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
        setErrorMessage('Invalid credentials')
    setTimeout(() => {
      setErrorMessage('')
    }, 3500)
      })
  } else{
    setErrorMessage('Please enter a valid email address')
    setTimeout(() => {
      setErrorMessage('')
    }, 3500)
  }}

  return (
    <div className='mx-auto min-w-max max-w-lg mb-24'>
      <div class='form-control my-4'>
        <label class='label'>
        <span class="block text-sm font-medium text-slate-700">Email</span>

        </label>
          <input
            type='email'
            required
            placeholder='Enter your email'
            class='input input-bordered peer focus:invalid:ring-red-500'
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
            class='input input-bordered peer'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
         
         <h1 className='mx-auto mt-6 text-red-600 text-sm font-semibold text-center'>{errorMessage}</h1>
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
