import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"


export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

const logout = () => {
    // Remove user from local storage
    localStorage.removeItem('token')
    localStorage.removeItem('isAdmin')

    // Dispatch logout action
    dispatch({type: 'LOGOUT'})

    // Navigate to the home screen
    navigate('/')

}

return { logout }

}