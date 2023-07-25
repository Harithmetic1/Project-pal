import React, { useContext, useState } from 'react'
import PageHeader from "../components/PageHeader";
import Link from "next/link";

import AuthLayouts from '../components/Layouts/AuthLayouts';
import RegisterForm from '../components/RegisterForm';
import PersonalDetailsForm from '../components/PersonalDetailsForm';
import ActionButton from '../components/reusables/ActionButton';
import { AuthContext } from '../features/authentication/contex/AuthContext';
import { AuthContextValue } from '../features/models/Interface';
// import { httpRegister } from '../features/controllers/requests';
import { RequestContext } from '../features/controllers/RequestContext';


const register = () => {
    // const [registerDetails, setRegisterDetails] = useState<registerDetails>();
    const [toggleForm, setToggleForm] = useState<boolean>(false);


    const {
        userDetails,
    } = useContext<AuthContextValue>(AuthContext)

    const {
        isLoading,
        httpRegister
    } = useContext(RequestContext)

    return (
        <AuthLayouts>
            <div className="login-container bg-background-color md:bg-white">
                <PageHeader />
                <div className="login-caption p-[30px]">
                    <div className="Sign-in-header">
                        <h1 className=" invert font-md text-[30px] leading-[45px]">
                            Sign up
                        </h1>
                        <div className="sign-in-caption mt-[22px] text-black">

                            {toggleForm ? <p className='text-[20px] font-semibold'> <span className='mr-2' onClick={() => setToggleForm(false)}>&larr;</span> Personal Details</p> : <p>
                                If you already have an account registered <br />You can <span className="text-red-secondary"><Link href="/login">Login here !</Link></span>
                            </p>}
                        </div>
                    </div>
                </div>
                <form className="login-form mt-[5px] p-[30px]">

                    {!toggleForm ?
                        <RegisterForm /> :
                        <PersonalDetailsForm />
                    }

                    <div className="submit-btn mt-[60px]">
                        {!toggleForm ?
                            <ActionButton buttonText='Continue' onClick={(e) => {
                                if (
                                    userDetails.email &&
                                    userDetails.username &&
                                    userDetails.password
                                ) {
                                    e.preventDefault()
                                    setToggleForm(true)
                                }
                            }} /> :
                            <ActionButton buttonText={`${isLoading ? "Loading..." : "Register"} `} onClick={(e) => {
                                e.preventDefault()
                                httpRegister(userDetails)
                            }} />
                        }
                    </div>
                </form>
            </div>
        </AuthLayouts>
    )
}

export default register;