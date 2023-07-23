import React from 'react'
import PageHeader from "../components/PageHeader";
import Link from "next/link";

import Message from '../components/icons/Message'
import Lock from '../components/icons/Lock'
import RevealEye from '../components/icons/RevealEye'
import Facebook from '../components/icons/Facebook'
import Google from '../components/icons/Google'
import User from '../components/icons/User'
import AuthLayouts from '../components/Layouts/AuthLayouts';

const register = () => {
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
                            <p>
                                If you already have an account registered <br />You can <span className="text-red-secondary"><Link href="/login">Login here !</Link></span>
                            </p>
                        </div>
                    </div>
                </div>
                <form className="login-form mt-[22px] p-[30px]">
                    <div className="email">
                        <div className="label pb-[11px]">
                            <label htmlFor="email" className="text-placeholder text-[13px] font-md leading-5 md:border-black">
                                Email
                            </label>
                        </div>
                        <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                            <span className='invert'>
                                <Message />
                            </span>
                            <input type="email" name="email" className="email-input bg-transparent outline-none w-full text-black" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div className="username pt-[42px]">
                        <div className="label pb-[11px]">
                            <label htmlFor="username" className="text-placeholder text-[13px] font-md leading-5">
                                Username
                            </label>
                        </div>
                        <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                            <span className='invert'>
                                <User />
                            </span>
                            <input type="text" name="username" className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your User name" />
                        </div>
                    </div>
                    <div className="password mt-[49px]">
                        <div className="label pb-[11px]">
                            <label htmlFor="password" className="text-placeholder text-[13px] font-md leading-5">
                                Password
                            </label>
                        </div>
                        <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                            <span className='invert'>
                                <Lock />
                            </span>
                            <input type="password" name="password" className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your Password" />
                            <span className='invert'>
                                <RevealEye />
                            </span>
                        </div>
                    </div>
                    <div className="password mt-[49px]">
                        <div className="label pb-[11px]">
                            <label htmlFor="confirm-password" className="text-placeholder text-[13px] font-md leading-5">
                                Confirm Password
                            </label>
                        </div>
                        <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                            <span className='invert'>
                                <Lock />
                            </span>
                            <input type="password" name="confirm-password" className="email-input bg-transparent outline-none w-[100%] text-black" placeholder="Confirm your Password" />
                            <span className='invert'>
                                <RevealEye />
                            </span>
                        </div>
                    </div>
                    <div className="submit-btn mt-[60px]">
                        <button className="rounded-lg bg-red-secondary p-[14px] w-[100%]">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </AuthLayouts>
    )
}

export default register;