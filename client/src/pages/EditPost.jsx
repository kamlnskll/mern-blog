import { useAuthContext } from '../hooks/useAuthContext'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditPost = () => {

  const navigate = useNavigate()

  let {id} = useParams()

  const { user } = useAuthContext()


const [postsId, setPostsId] = useState('')
const [img, setImg] = useState('')
const [title, setTitle] = useState('')
const [body, setBody] = useState('')

  async function getPost(postId) {
    await axios
      .get(`http://localhost:8080/api/posts/${postId}`, {
        headers: {
          'Authorization': `Bearer ${user}`
        }
      })
      .then((res) => {
        console.log(res.data)
        setPostsId(res.data._id)
        setImg(res.data.img)
        setTitle(res.data.title)
        setBody(res.data.body)
      })
      .catch((err) => {
        console.log(err)
      })
  }


async function editPost(postId){

  try {

 
    await axios.put(`http://localhost:8080/api/posts/edit/${postId}`, {img: img, title: title, body: body}, {
      headers: {
        'Authorization': `Bearer ${user}`
      }
    }
    
    ).then((res) => {
      console.log(res)
      if (res.status = '200'){
      window.alert('Post successfully edited!') 
      navigate('/admin')}
      else{
        window.alert('Could not edit post!')
      }
    })
  } catch(error){
console.log(error)
  }
  }



  useEffect(() => {
   getPost(id)
  }, [])

  return (
    <>
  
    <div className='w-2/3 mx-auto shadow-md'>
    <h1 className='flex justify-center my-6 text-2xl uppercase font-extrabold'>Edit Existing Post</h1>
      <div className='w-full p-6'>
      <input className='pt-16 flex text-2xl font-semibold border w-full rounded-xl text-justify' value={img} onChange={(e) => setImg(e.target.value)}/>
        <input className='pt-16 my-4 flex text-2xl font-semibold border w-full rounded-xl text-justify' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea className='pt-16 h-96 text-lg flex border w-full rounded-xl text-justify' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <h2 className='pt-12 flex text-sm font-semibold justify-center'>
          Written by: "AUTHOR NAME HERE EVENTUALLY"
        </h2>

      </div>
      <div className='flex justify-center gap-6 shadow-md my-4'>
      <button className='btn btn-primary mb-12' onClick={() => editPost(id)}>Save Changes</button>
        <button className='btn btn-warning mb-12' onClick={() => navigate('/admin')}>Discard Changes</button>
      </div>
    </div>
    </>
  )
  
}

export default EditPost
