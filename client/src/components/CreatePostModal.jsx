import React from 'react'

const CreatePostModal = () => {
  return (
    <div>
<label for="my-modal-5" class="btn btn-warning hover:bg-orange-400 ml-8' modal-button">Create Post</label>
<div>

<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-4xl">
    <h1 class="font-extrabold text-2xl">Create a new post</h1>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action border flex justify-center gap-4">
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