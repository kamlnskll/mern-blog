import axios from "axios"
import { useAuthContext } from '../hooks/useAuthContext'


const deletePost = (id) => {

    const { user } = useAuthContext()

    axios.delete(`http://localhost:8080/api/posts/${id}`, {
        headers: {
            'Authorization': `Bearer ${user}`
        } },

            window.alert('Post Deleted!')
        )

}

export default