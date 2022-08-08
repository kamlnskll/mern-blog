import React from 'react'
import reactSketch from '../undraw_react_re_g3ui.svg'
import webSketch from '../undraw_static_website_re_x70h.svg'

const About = () => {
  return <div className=''>
    <div className='text-center font-extrabold text-3xl'>
      <h1>About Us</h1>
    </div>
<div className='flex ml-24'>
    <div className='mx-4 py-8'>
      <h2 className='text-2xl font-bold uppercase'>Who we are</h2>
      <p className='text-lg mt-8 max-w-1/2'>We are a fictional blog dedicated to existing purely to showcase my ability to write a basic blog app with React, Node and other JS technologies.</p>
      </div>
      <img className='scale-75' src={reactSketch}/>
    </div>

    <div className='flex'>
    <img className='scale-75' src={webSketch}/>
    <div className='mx-12 py-8 justify-right mr-24 max-w-1/2'>
      <h2 className='text-2xl font-bold uppercase'>What we do</h2>
      <p className='text-lg mt-8'>We don't really do much in the way of providing meaningful readership with our blog posts considering they are mockups and will likely only ever have Lorem Ipsum font within them. But, perhaps one day this blog, and other projects alongside it, will prove I am capable of being a good SDE candidate one day.</p>
      </div>
      
    </div>


  </div>
}

export default About
