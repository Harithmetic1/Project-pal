import React, { ReactElement, createContext, useState } from "react";
import { AuthContextValue, registerDetails } from "../../models/Interface";

interface AuthProviderProps {
    children: ReactElement
}

const defaultAuthContext: AuthContextValue = {
    userDetails: {
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        bio: "",
        title: "",
        github: "",
        twitter: "",
        linkedIn: "",
        password: ""
    },
    handleInputChange: (e) => { }
}



const AuthContext = createContext<AuthContextValue>(defaultAuthContext)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [userDetails, setUserDetails] = useState<registerDetails>({
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        bio: "",
        title: "",
        github: "",
        twitter: "",
        linkedIn: "",
        password: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value

        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    return (
        <AuthContext.Provider value={{
            userDetails,
            handleInputChange
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }