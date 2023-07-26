import React, { ReactElement, createContext, useState } from "react";
import { AuthContextValue, ComponentWithChild, loginInterface, registerDetails, validPasswordState } from "../../models/Interface";



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
    loginDetails: {
        username: "",
        password: ""
    },
    handleInputChange: (e) => { },
    handleValidPassword: () => { },
    handleLoginInputChange: (e) => { }
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

    const [loginDetails, setLoginDetails] = useState<loginInterface>({
        username: "",
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

    const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value;

        setLoginDetails({
            ...loginDetails,
            [name]: value
        })
    }

    return (
        <AuthContext.Provider value={{
            userDetails,
            validPassword,
            loginDetails,
            handleInputChange,
            handleValidPassword,
            handleLoginInputChange
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }