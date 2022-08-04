import { createContext, useReducer } from "react";


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

    console.log('AuthContext state:', state)

    // Anything that is wrapped around the provider component, it will provide our value to the entire app.

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}