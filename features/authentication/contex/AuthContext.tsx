import React, { ReactElement, createContext, useState } from "react";
import { AuthContextValue, ComponentWithChild, registerDetails, validPasswordState } from "../../models/Interface";



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
    validPassword: {
        lowerCasePattern: true,
        upperCasePattern: true,
        digitPattern: true,
        tenCharPattern: true,
        confirmAllPattern: true
    },
    handleInputChange: (e) => { },
    handleValidPassword: () => { }
}




const AuthContext = createContext<AuthContextValue>(defaultAuthContext)

const AuthProvider: React.FC<ComponentWithChild> = ({ children }) => {

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

    const [validPassword, setValidPassword] = useState<validPasswordState>({
        lowerCasePattern: true,
        upperCasePattern: true,
        digitPattern: true,
        tenCharPattern: true,
        confirmAllPattern: true
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value

        setUserDetails({
            ...userDetails,
            [name]: value
        })

        // if (name === "password") {
        //     handleValidPassword()
        // }
    }

    const handleValidPassword = () => {
        const lowerCasePattern: RegExp = /(?=.*[a-z])/
        const upperCasePattern: RegExp = /(?=.*[A-Z])/
        const digitPattern: RegExp = /(?=.*\d)/
        const tenCharPattern: RegExp = /.{10,}$/
        const confirmAllPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/


        setValidPassword({
            ...validPassword,
            lowerCasePattern: lowerCasePattern.test(userDetails.password),
            upperCasePattern: upperCasePattern.test(userDetails.password),
            digitPattern: digitPattern.test(userDetails.password),
            tenCharPattern: tenCharPattern.test(userDetails.password),
            confirmAllPattern: confirmAllPattern.test(userDetails.password)
        })

    }

    return (
        <AuthContext.Provider value={{
            userDetails,
            validPassword,
            handleInputChange,
            handleValidPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }