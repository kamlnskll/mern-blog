import React from 'react'
import { useState } from 'react'
import validator from 'validator'

const Contact = () => {

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
 

  const submitValues = () => {
    
const contactFormDetails = {
  'First Name': fName,
  'Last Name': lName,
  'Email': email,
  'Message Body': body,
} 
if(validator.isEmail(email)){
console.log(contactFormDetails)
window.alert(Object.values(contactFormDetails))
} else{
window.alert('Please fill out all fields correctly')
}
  }

  return <div>

<div className='w-2/3 mx-auto'>
  <div>
  <h1 className='text-3xl uppercase font-extrabold'>Contact Us!</h1>
  <p className='mt-4'>If you'd like to get in contact with us and provide feedback, criticism or provide other general comments, feel free to put fill out the provided contact form! We'll get back to you asap.</p>
  <p className='mt-4'><span className="font-bold">Please note:</span> We will try to get back to you as soon as we can but response times may vary!</p>

  </div>

  <div className="form-control">
    <div className='flex gap-4 mt-8 mx-auto w-full'>
    <input type="text" placeholder="Your first name" class="input input-bordered w-full" onChange={e => setFName(e.target.value)}/>
    <input type="text" placeholder="Your last name" class="input input-bordered w-full" onChange={e => setLName(e.target.value)}/>
    </div>
    <div>
    <input type="text" placeholder="Your email address" class="input input-bordered w-full mt-3" onChange={e => setEmail(e.target.value)}/>
    </div>
    <div>
    <textarea class="mt-3 textarea textarea-bordered w-full h-36" placeholder="Please enter your message here" onChange={e => setBody(e.target.value)}></textarea>  
    </div>
<div>


</div>
<button class="btn btn-primary w-48 mt-8 mb-16"
type="submit" onClick={submitValues}>Send message</button>
  </div>

  </div>
</div>

}

export default Contact
