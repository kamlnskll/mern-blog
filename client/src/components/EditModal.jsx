import React, {useState} from 'react'
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext'

const EditPostModal = () => {
const {user} = useAuthContext()
const [title, setTitle] = useState('')
const [url, setURL] = useState('')
const [desc, setDesc] = useState('')
const [body, setBody] = useState('')
// const [id, setId] = useState('')





  return (
    <div>
<label for="my-modal-5" class="btn btn-warning hover:bg-orange-400 ml-8' modal-button">Edit Post</label>
<div>

<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-9/12 max-w-4xl">

  <div>
  <div>
  <h1 className='text-3xl uppercase font-bold mt-4 ml-32'>Edit existing field</h1>
  </div>

<div className='w-2/3 mx-auto pt-2'>
  

  <div alt="form" className='pt-4'> 
  <input type="text" placeholder="Post Title" class="input w-full input-bordered required" value={title} onChange={e => setTitle(e.target.value)}/>
  </div>

  <div alt="form" className='pt-2'> 
  <input type="text" placeholder="Post Image URL" class="input w-full input-bordered required" value={url} onChange={e => setURL(e.target.value)}/>
  </div>

  <div alt="form" className='pt-2'> 
  <textarea class="textarea textarea-bordered w-full required" placeholder="Enter a short description of the post" value={desc} onChange={e => setDesc(e.target.value)}></textarea>  
  </div>

<div alt="form" className='pt-2'> 
  <textarea class="textarea textarea-bordered w-full h-72 required" placeholder="Post body goes here" value={body} onChange={e => setBody(e.target.value)}></textarea>  
  </div>
  </div>
</div>

    <div className="modal-action flex justify-center gap-2">
      <label for="my-modal-5" class="btn btn-warning">Edit Post</label>
      <label for="my-modal-5" class="btn btn-primary">Cancel</label>
    
    </div>

  </div>
</div>
</div>

      
    </div>
  )
}

export default EditPostModal