import React from 'react'

const Featured = () => {
  return (
    <div className='p-24'>
      <div className='flex'>
        <div className='w-2/4 h-96 justify-around'>
          <div className='carousel rounded-xl h-full'>
            <div id='item1' className='carousel-item w-full'>
              <img
                src='https://placeimg.com/800/200/arch'
                class='w-full h-full'
                alt=''
              />
            </div>
            <div id='item2' className='carousel-item w-full'>
              <img
                src='https://placeimg.com/800/200/arch'
                class='w-full'
                alt=''
              />
            </div>
            <div id='item3' className='carousel-item w-full'>
              <img
                src='https://placeimg.com/800/200/arch'
                class='w-full'
                alt=''
              />
            </div>
            <div id='item4' className='carousel-item w-full'>
              <img
                src='https://placeimg.com/800/200/arch'
                class='w-full'
                alt=''
              />
            </div>
          </div>
          <div class='flex justify-center py-8 gap-3'>
            <a href='#item1' className='btn btn-xs'>
              1
            </a>
            <a href='#item2' className='btn btn-xs'>
              2
            </a>
            <a href='#item3' className='btn btn-xs'>
              3
            </a>
            <a href='#item4' className='btn btn-xs'>
              4
            </a>
          </div>
        </div>
        <div className='flex flex-col ml-48'>
          <h2 className='font-bold text-lg flex justify-center py-6'>
            Recent Posts
          </h2>
          <div class='card w-auto h-48 bg-base-100 shadow-lg image-full'>
            <figure>
              <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
            </figure>
            <div class='card-body'>
              <h2 class='card-title'>Title of Post</h2>
              <p>Lorem Ipsum of Each Post goes Here!</p>
              <div class='card-actions flex'>
                <button class='btn btn-ghost hover:bg-red-400 mb-12 justify-left'>
                  Read Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
