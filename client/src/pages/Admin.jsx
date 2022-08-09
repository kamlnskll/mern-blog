import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PostSearch from '../components/PostSearch'
import CreatePostModal from '../components/CreatePostModal'
import { useAuthContext } from '../hooks/useAuthContext'
import EditPostModal from '../components/EditModal'

const Admin = () => {

  const { user } = useAuthContext()
  
    useEffect(() => {
      getPosts()
    }, [user])

  const [posts, setPosts] = useState(null)
  const [postNumber, setPostNumber] = useState('')
  
  async function getPosts() {
    await axios
      .get(`http://localhost:8080/api/posts/`, {
        headers: {
          'Authorization': `Bearer ${user}`
        }
      })
      .then((res) => {
        // console.log(res.data)
        setPosts(res.data)
        let length = (res.data.length)
        setPostNumber(length)
        
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const handleDelete = async (id) => {

    try {
        await axios.delete(`http://localhost:8080/api/posts/${id}`, {
            headers: {
              'Authorization': `Bearer ${user}`,
            }}, ).then((res) => console.log(res))
    // Fetch user function here so we can refetch posts after deletion
    getPosts()
    
    } catch (error) {
        console.log(error)
    }
    
    }


  return <div>

  <div className='flex w-2/3 mx-auto gap-4'>
  <h1 className='text-3xl font-bold'>Posts: ({postNumber})</h1>
  <CreatePostModal />
  </div>
<div className='max-w-xl mx-auto'>
  <PostSearch />
  </div>
  
  {posts && posts.map((post, index) => { return (<div className="hover:bg-gray-50 flex mt-6 card card-side bg-base-100 shadow-xl max-w-xl mx-auto h-48">
  <figure className='flex m-8' ><img src={post.img} className='h-32 w-32 rounded-md' alt="Movie"/></figure>
  <div class="card-body overflow-hidden" key={index}>
  <h4 className="text-sm"><span className='font-bold underline'>Post ID:</span> {post._id}</h4>

    <div className='flex-1'>
    <h2 className="card-title">{post.title}</h2>
    
    <div className='flex justify-end mt-6 gap-4'>
      <EditPostModal/>
      <button class="btn btn-error hover:bg-red-500" onClick={() => handleDelete(post._id)}>Delete</button>

    </div>
    
    </div>
    
  </div>
</div>
  )
})}
  </div>
}

export default Admin
