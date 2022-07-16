import axios from 'axios'
import { useState } from 'react'

export default async function fetchPosts() {
  // Fetch post data

  try {
    const getPosts = await axios
      .get('http://localhost:8080/api/posts')
      .then((res) => {
        console.log(res.data)
      })
    return (
      <div class='card card-compact w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class='card-actions justify-end'>
            <button class='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}
