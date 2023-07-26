import React, { useContext, useState } from "react";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

import Message from '../components/icons/Message'
import Lock from '../components/icons/Lock'
import RevealEye from '../components/icons/RevealEye'
import Facebook from '../components/icons/Facebook'
import Google from '../components/icons/Google'
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { AuthContext } from "../features/authentication/contex/AuthContext";
import { RequestContext } from "../features/controllers/RequestContext";
import ActionButton from "../components/reusables/ActionButton";

import ShowEye from "../components/icons/ShowEye";


const Login = () => {
    const [revealPassword, setRevealPassword] = useState<boolean>(false)

    const {
        loginDetails,
        handleLoginInputChange
    } = useContext(AuthContext)

    const {
        isLoading,
        httpLogin
    } = useContext(RequestContext)
    return (
        <AuthLayouts>
            <div className="login-container bg-background-color md:bg-white ">
                <PageHeader />
                <div className="login-caption p-[30px]">
                    <div className="Sign-in-header">
                        <h1 className="font-md text-[30px] text-text-color md:invert leading-[45px]">
                            Sign in
                        </h1>
                        <div className="sign-in-caption mt-[22px]">
                            <p className="text-black">
                                If you don't have an acccount registered <br />You can <span className="text-red-secondary"><Link href="/register">register here !</Link></span>
                            </p>
                        </div>
                    </div>
                </div>
                <form className="login-form mt-[22px] p-[30px]">
                    <div className="email text-black">
                        <div className="label pb-[11px]">
                            <label htmlFor="username" className=" text-black text-[13px] font-md leading-5">
                                Username
                            </label>
                        </div>
                        <div className="input-field flex items-center  gap-[7.42px] pb-[7px] border-b-2 border-black">
                            <span className="invert">
                                <Message />
                            </span>
                            <input required type="username" name="username" onChange={handleLoginInputChange} className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div className="password mt-[49px] text-black">
                        <div className="label pb-[11px]">
                            <label htmlFor="password" className="text-placeholder text-[13px] font-md leading-5">
                                Password
                            </label>
                        </div>
                        <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                            <span className="invert">
                                <Lock />
                            </span>
                            <input required type={revealPassword ? "text" : "password"} name="password" onChange={handleLoginInputChange} className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your Password" />
                            <span onClick={() => setRevealPassword(!revealPassword)}>
                                {revealPassword ? <RevealEye /> : <ShowEye />}
                            </span>
                        </div>
                    </div>
                    <div className="remember-me flex items-center justify-between pt-[17px] text-[12px] text-black">
                        <div className="remember flex gap-[6px] items-center">
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <p className="text-placeholder leading-[18px]">Forgot Password?</p>
                    </div>
                    <div className="submit-btn mt-[60px]">
                        <ActionButton buttonText={isLoading ? "Loading..." : "Login"} onClick={(e) => {
                            if (
                                loginDetails.username &&
                                loginDetails.password
                            ) {
                                e.preventDefault()
                                httpLogin(loginDetails)
                            }

                        }} />
                    </div>
                    <div className="continue-with  flex flex-col justify-center items-center mt-[42px]">
                        <p className="text-black">
                            or continue with
                        </p>
                        <div className="logo flex gap-[31.08px] mt-[25px]">
                            <Facebook />
                            <Google />
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayouts>
    )
}

export default Login;