import React from "react";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

import Message from '../components/icons/Message'
import Lock from '../components/icons/Lock'
import RevealEye from '../components/icons/RevealEye'
import Facebook from '../components/icons/Facebook'
import Google from '../components/icons/Google'
import AuthLayouts from "../components/Layouts/AuthLayouts";


const Login = () => {
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
                            <label htmlFor="email" className=" text-black text-[13px] font-md leading-5">
                                Email
                            </label>
                        </div>
                        <div className="input-field flex items-center  gap-[7.42px] pb-[7px] border-b-2 border-black">
                            <span className="invert">
                                <Message />
                            </span>
                            <input type="email" name="email" className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your email address" />
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
                            <input type="email" name="password" className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your Password" />
                            <span>
                                <RevealEye />
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
                        <button className="rounded-lg bg-red-secondary p-[14px] w-[100%]">
                            Login
                        </button>
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