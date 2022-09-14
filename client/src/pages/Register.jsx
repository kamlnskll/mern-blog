import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'

const Register = () => {

const handleClick = () => {
setIsAdmin(!isAdmin)
console.log(!isAdmin)
}


// const emailValidation = () => {
//   const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9+-]+\.[a-z]{2,8}(.[a-z])/
//   if(regEx.test(email)){
//     window.alert('Email is valid')
//   } else if(!regEx.test(email)&& email !== ''){
//     window.alert('Email is not valid')
//   } else{
//     window.alert('')
//   }
    
//   }
  


const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
 

const handleRegister = async () => {

  if(validator.isEmail(email)){
    await axios
      .post(`http://localhost:8080/api/users/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      isAdmin: isAdmin
      })
      .then(function (response) {
        console.log(response)
        const token = response.data.token
          // Save user json data to localStorage
          localStorage.setItem('token', JSON.stringify(token))
          localStorage.setItem('isAdmin', JSON.stringify(isAdmin))

          // Navigate to home page on successful login
          navigate('/')
      })
      .catch(function (error) {
        console.log(error)
        setErrorMessage('Please fill out all fields')
    setTimeout(() => {
      setErrorMessage('')
    }, 3500)
      })
  } else{
setErrorMessage('Please enter a valid email address')
setTimeout(() => {
  setErrorMessage('')
}, 3500)
  }

}


  return (
    <div>
      <div className='mx-auto min-w-max max-w-lg'>
        <div class='form-control'>
          <label class='input-group input-group-vertical'>
            <span>
Email<h1 className='ml-4 text-red-600 text-sm font-semibold text-center'>{errorMessage}</h1></span>
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

            <div class="form-control">
  <label class="label cursor-pointer mx-auto gap-4 mt-4">
    <span class="label-text">Check this box to create an Admin user</span> 
    <input type="checkbox" value={isAdmin} onClick={() => handleClick()} class="checkbox" />
  </label>
  <div className='text-center'>
  <h1 className='font-semibold'>Already a user? <span className="hover:font-bold cursor-pointer hover:text-blue-600" onClick={() => navigate('/login')}>Login here!</span></h1>
  </div>
</div>
            <div className='mt-12 w-48 mx-auto flex gap-6'>
              <button
                className='btn btn-warning font-bold hover:bg-orange-400 mx-auto mb-12'
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
