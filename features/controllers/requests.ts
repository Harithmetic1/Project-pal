import React from "react";
import axios from "axios";
import { registerDetails } from "../models/Interface";
import { registerEndpoint } from "../APIConfig";
import { toast } from "react-toastify";

const httpRegister = async (registerDetails: registerDetails) => {
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
        return true
        
    } catch (error) {
        console.log(error);
        toast(`Error: ${error}`, { hideProgressBar: true, autoClose: 2000, type: 'error' })
    }
    
}

export {
    httpRegister
}