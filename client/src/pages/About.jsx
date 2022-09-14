import React from 'react'
import reactSketch from '../undraw_react_re_g3ui.svg'
import webSketch from '../undraw_static_website_re_x70h.svg'

const About = () => {
  return <div className='max-w-xl text-center'>
    <div className='font-extrabold text-3xl mx-auto'>
      <h1>About Us</h1>
    </div>
<div className='md:mx-16 mt-6 md:mt-16 md:flex'>
    <div className='min-w-full max-w-3xl mx-16 md:mt-8 mt-16'>
      <h2 className='text-2xl font-bold uppercase'>Who we are</h2>
      <p className='text-lg mt-8 max-w-1/2'>We are a fictional blog dedicated to existing purely to showcase my ability to write a basic blog app with React, Node and other JS technologies.</p>
      </div>
      <img className='scale-75' src={reactSketch}/>
    </div>

    <div className='md:flex md:mx-16 md:mx-auto'>
    <img className='scale-75 md:scale-75' src={webSketch}/>
    <div className='mx-12 md:mr-24 md:mx-0 py-8 min-w-full max-w-3xl'>
      <h2 className='text-2xl font-bold uppercase'>What we do</h2>
      <p className='text-lg mt-8 md:max-w-lg md:min-w-full'>We don't really do much in the way of providing meaningful readership with our blog posts considering they are mockups and will likely only ever have Lorem Ipsum font within them. But, perhaps one day this blog, and other projects alongside it, will prove I am capable of being a good SDE candidate one day.</p>
      </div>
      
    </div>


  </div>
}

export default About
