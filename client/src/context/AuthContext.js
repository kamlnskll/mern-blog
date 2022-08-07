import { createContext, useReducer, useEffect } from "react";


export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': 
        return { user: action.payload}
        case 'LOGOUT':
        return {user: null}
        default: 
        return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })


useEffect(()=> {
// Checking the local storage to see if we have the token
// This function lets you refresh page and stay logged in
const token = JSON.parse(localStorage.getItem('token'))
if(token) {
    dispatch({type: 'LOGIN', payload: token})
} else{
    console.log('Please login!')
}


}, [])

    console.log('AuthContext state:', state)

    // Anything that is wrapped around the provider component, it will provide our value to the entire app.

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}