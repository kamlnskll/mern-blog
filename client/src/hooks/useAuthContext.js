import { AuthContext } from "../context/AuthContext";
import { useContext} from "react";

// Consumes the context and checks if it is being called from within the scope of the provider, otherwise it throws an error.

// AuthContext is used to set token globally - we login, get token, save it to context, and access it later.

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be used within AuthContextProvider')
    }

    return context
}