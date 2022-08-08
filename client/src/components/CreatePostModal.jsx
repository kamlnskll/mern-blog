import React from 'react'

const CreatePostModal = () => {
  return (
    <div>
<label for="my-modal-5" class="btn btn-warning hover:bg-orange-400 ml-8' modal-button">Create Post</label>
<div>

<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-9/12 max-w-4xl">

  <div>
  <div>
  <h1 className='text-3xl uppercase font-bold mt-4'>Create new post</h1>
  </div>

<div className='w-2/3 mx-auto pt-12'>
  

  <div alt="form" className='p-4'> 
  <input type="text" placeholder="Post Title" class="input w-full input-primary" />
  </div>

  <div alt="form" className='p-4'> 
  <textarea class="textarea textarea-bordered w-full" placeholder="Enter a short description of the post"></textarea>  
  </div>

<div alt="form" className='px-4'> 
  <textarea class="textarea textarea-bordered w-full h-72" placeholder="Post body goes here"></textarea>  
  </div>
  </div>
</div>

    <div className="modal-action flex justify-center gap-2">
      <label for="my-modal-5" class="btn btn-warning">Add Post</label>
      <label for="my-modal-5" class="btn btn-primary">Cancel</label>
    
    </div>

  </div>
</div>
</div>

      
    </div>
  )
}

export default CreatePostModal