import React, { FC, createContext, useState } from "react";
import { ComponentWithChild } from "../models/Interface";

import axios from "axios";
import { registerDetails } from "../models/Interface";
import { registerEndpoint } from "../APIConfig";
import { toast } from "react-toastify";


interface RequestContextState {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    httpRegister: (registerDetails: registerDetails) => void
}

const defaultRequestContextValue: RequestContextState = {
    isLoading: false,
    setIsLoading: () => { },
    httpRegister: (registerDetails: registerDetails) => { }
}

const RequestContext = createContext<RequestContextState>(defaultRequestContextValue)

const RequestProvider: FC<ComponentWithChild> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)


    // Register user
    const httpRegister = async (registerDetails: registerDetails) => {
        setIsLoading(true);
        try {
            const request = await axios.post(registerEndpoint, {
                email: registerDetails.email,
                username: registerDetails.username,
                first_name: registerDetails.first_name,
                last_name: registerDetails.last_name,
                bio: registerDetails.bio,
                title: registerDetails.title,
                github: registerDetails.github,
                twitter: registerDetails.twitter,
                linkedIn: registerDetails.linkedIn,
                password: registerDetails.password
            })
            console.log(request);
            toast("Registration Successful", { hideProgressBar: true, autoClose: 2000, type: 'success' })
        } catch (error) {
            console.log(error);
            toast(`Error: ${error}`, { hideProgressBar: true, autoClose: 2000, type: 'error' })
        }
        setIsLoading(false)
    }


    return (
        <RequestContext.Provider value={{
            isLoading,
            setIsLoading,
            httpRegister
        }}>
            {children}
        </RequestContext.Provider>
    )
}

export {
    RequestProvider,
    RequestContext,
}