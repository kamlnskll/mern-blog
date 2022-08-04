import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    axios
      .post(`http://localhost:8080/api/users/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response)
        const token = response.data.token
        console.log(token)
          // Save user json data to localStorage
          localStorage.setItem('token', JSON.stringify(token))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
              onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              <button
                class='btn btn-warning font-bold hover:bg-orange-400'
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
