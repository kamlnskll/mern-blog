import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Admin = () => {
  
    useEffect(() => {
      getPosts()
    }, [])

  const [posts, setPosts] = useState(null)
  const [postNumber, setPostNumber] = useState('')

  async function getPosts() {
    await axios
      .get(`http://localhost:8080/api/posts/`)
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
        let length = (res.data.length)
        setPostNumber(length)
        
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return <div>Admin Page

  <div className='flex w-2/3 mx-auto'>
  <h1 className='text-3xl font-bold'>Posts: ({postNumber})</h1>
  <button className='btn btn-warning ml-8'>Create New Post</button>
  </div>
  
  {posts && posts.map((post, index) => { return (<div className="hover:bg-gray-50 flex mt-6 card card-side bg-base-100 shadow-xl w-2/3 mx-auto h-48">
  <figure className='flex m-8' ><img src={post.img} className='h-32 w-32 rounded-md' alt="Movie"/></figure>
  <div class="card-body overflow-hidden" key={index}>
  <h4 className="text-sm"><span className='font-bold underline'>Post ID:</span> {post._id}</h4>

    <div className='flex-1'>
    <h2 className="card-title">{post.title}</h2>
    
    <div className='flex justify-end mt-6 gap-4'>
      <button class="btn btn-warning hover:bg-yellow-500">Edit</button>
      <button class="btn btn-error hover:bg-red-500">Delete</button>

    </div>
    
    </div>
    
  </div>
</div>
  )
})}
  </div>
}

export default Admin
