import React from 'react'
import { useState } from 'react'

const EmailCapture = () => {
  const [email, setEmail] = useState('')

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9+-]+\.[a-z]{2,8}(.[a-z])/
    if(regEx.test(email)){
      window.alert('Email is valid')
    } else if(!regEx.test(email)&& email !== ''){
      window.alert('Email is not valid')
    } else{
      window.alert('')
    }
      
    }


  const handleEmailSubmit = () => {
    console.log(email)
  }




  return (
    <div className='bg-primary text-white text-center py-16'>
      <h1 className='text-xl mb-8 font-semibold'>
        Like our content? Join our email list and stay connected!
      </h1>
      <div className='flex justify-evenly pt-6'>
        <div className='w-96'>
          <input
            type='text'
            placeholder='Enter your email here!'
            class='input input-bordered w-full max-w-xl text-black'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type='submit'
            onClick={handleEmailSubmit}
            className='btn btn-warning mt-4 font-bold border-2 hover:bg-yellow-600'
          >
            SUBMIT EMAIL
          </button>
        </div>
        <div className='w-1/2 text-justify text-lg'>
          <p className=''>
            By joining our email list you get access to the newest articles we
            release. Additionally, subscribers get exclusive bonuses that
            regular visitors don't including access to otherwise hidden content,
            raffles, and more!
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmailCapture
