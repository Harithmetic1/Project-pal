import axios from "axios";
import { registerDetails } from "../models/Interface";
import { registerEndpoint } from "../APIConfig";

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
        
    } catch (error) {
        console.log(error);
    }
    
}

export {
    httpRegister
}