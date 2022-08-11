import React, {useState} from 'react'
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext'

const CreatePostModal = () => {



const {user} = useAuthContext()
const [title, setTitle] = useState('')
const [url, setURL] = useState('')
const [desc, setDesc] = useState('')
const [body, setBody] = useState('')

const [showModal, setShowModal] = useState(false)


const PostSubmit = async () => {

await axios.post('http://localhost:8080/api/posts/', {
  img: url,
  title: title,
  shortDesc: desc,
  body: body,
}, {
  headers: {
    'Authorization': `Bearer ${user}`,
  }
}).then(function(response){
  setShowModal(false)
  console.log(response)
}).catch(function(error){

  console.log(error)
})


}


  return (
    <div>
<label for="my-modal-5" class="btn btn-warning hover:bg-orange-400 ml-8' modal-button" onClick={() => setShowModal(true)}>Create Post</label>
{showModal && ( <> <div>


<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-9/12 max-w-4xl">

  <div>
  <div>
  <h1 className='text-3xl uppercase font-bold mt-4 ml-32'>Create new post</h1>
  </div>

<div className='w-2/3 mx-auto pt-2'>
  

  <div alt="form" className='pt-4'> 
  <input type="text" placeholder="Post Title" class="input w-full input-bordered required" onChange={e => setTitle(e.target.value)}/>
  </div>

  <div alt="form" className='pt-2'> 
  <input type="text" placeholder="Post Image URL" class="input w-full input-bordered required" onChange={e => setURL(e.target.value)}/>
  </div>

  <div alt="form" className='pt-2'> 
  <textarea class="textarea textarea-bordered w-full required" placeholder="Enter a short description of the post" onChange={e => setDesc(e.target.value)}></textarea>  
  </div>

<div alt="form" className='pt-2'> 
  <textarea class="textarea textarea-bordered w-full h-72 required" placeholder="Post body goes here" onChange={e => setBody(e.target.value)}></textarea>  
  </div>
  </div>
</div>

    <div className="modal-action flex justify-center gap-2">
      <button for="my-modal-5" class="btn btn-warning" onClick={() => PostSubmit()}>Add Post</button>
      <label for="my-modal-5" class="btn btn-primary">Cancel</label>
    
    </div>

  </div>
</div>
</div> </>)}

      
    </div>
  ) }

export default CreatePostModal