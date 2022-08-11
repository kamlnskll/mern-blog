// import React from 'react'
// import { useAuthContext } from '../hooks/useAuthContext'
// import axios from 'axios'

// const EditPostModal = (postData, setPostData, postId) => {
// const { img, body, shortDesc, title } = postData

// const {user} = useAuthContext()

// const getPost = async (id) => {

//   try{
// await axios.get(`http://localhost:8080/api/posts/${id}`, {
//     headers: {
//  'Authorization': `Bearer ${user}`
//     }
  
//  }).then((res) => {
  
//           // https://www.techiediaries.com/react-18-usestate-array/ 
//           // What I used for the setPostData function below since I want to use spread operator for the variable and props in this case
//           const data = res.data
  
//           setPostData(data)
//           console.log(postData)
  
//         })
  
//         }
//         catch(error){
//           console.log(error)
//         }
  
    
//    }

// const handleEdit = (id) => {

//   getPost(id)
//     console.log('Handle post edit function fired')

// }
//   return (
//     <div>
// <div>
// <label for="my-modal" class="btn modal-button btn-warning" onClick={() => handleEdit(postId)}>edit post</label>
// </div>
// <input type="checkbox" id="my-modal" class="modal-toggle" />
// <div class="modal">
//   <div class="modal-box">
//     <h3 class="font-bold text-lg">Check if data got passed</h3>
//     <h3 class="font-bold text-lg">{img}</h3>
//     <h3 class="font-bold text-lg">{body}</h3>

//     <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//     <div class="modal-action">
//       <label for="my-modal" class="btn">Yay!</label>
//     </div>
//   </div>
// </div>




//     </div>
//   )
// }

// export default EditPostModal