import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import PostSearch from '../components/PostSearch'
import CreatePostModal from '../components/CreatePostModal'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'


const Admin = () => {

  const [postId, setPostId] = useState('')
  const [postData, setPostData] = useState({
    img: '',
  title: '',
  shortDesc: '',
  body: '',

  })
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [postNumber, setPostNumber] = useState('')
  const navigate  = useNavigate()


  const { user } = useAuthContext()
  
  useEffect(() => {
    if (user){
    getPosts().then(res => {setSearchResults(res)})}
  }, [user])


  
  async function getPosts() {
    await axios
      .get(`http://localhost:8080/api/posts/`, {
        headers: {
          'Authorization': `Bearer ${user}`,
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
            }}, ).then((res) => {
              console.log(res)
              if (res.status = '200'){
                window.alert('Post successfully deleted')
              } else{
              window.alert('Unable to delete the post!')}
            })
    // Fetch user function here so we can refetch posts after deletion
    
    } catch (error) {
        console.log(error)
    }
    
    }


    const getPost = async (id) => {
      try{
      await axios.get(`http://localhost:8080/api/posts/${id}`, {

        headers: {
          'Authorization': `Bearer ${user}`
        }

      }).then((res) => {

        // https://www.techiediaries.com/react-18-usestate-array/ 
        // What I used for the setPostData function below since I want to use spread operator for the variable and props in this case

        setPostData(res.data)
        setPostId(res.data._id)
        console.log(postData)

      })

      }
      catch(error){
        console.log(error)
      }

 }


const handleEdit = (id) => {

  getPost(id)
  console.log('This is the post ID saved from the click' + '' + postId)
  navigate(`/posts/edit/${id}`)
  
} 


  return <div className='mb-16'>

  <div className='flex w-2/3 mx-auto gap-4'>
  <h1 className='text-3xl font-bold'>Posts: ({postNumber})</h1>
  <CreatePostModal />
  </div>
<div className='max-w-xl mx-auto'>
  {/* <PostSearch posts={posts} setSearchResults={setSearchResults}/> */}
  </div>
  
  {posts && posts.map((post, index) => { return (<div className="hover:bg-gray-50 flex mt-6 card card-side bg-base-100 shadow-xl max-w-xl mx-auto h-48">
  <figure className='flex m-8' ><img src={post.img} className='h-32 w-32 rounded-md' alt="Movie"/></figure>
  <div class="card-body overflow-hidden" key={index}>
  <h4 className="text-sm"><span className='font-bold underline'>Post ID:</span> {post._id}</h4>

    <div className='flex-1'>
    <h2 className="card-title">{post.title}</h2>
    <div className='flex justify-end my-6 gap-4'>
      <button class="btn btn-warning hover:bg-orange-400" onClick={() => handleEdit(post._id)}>Edit</button>
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
