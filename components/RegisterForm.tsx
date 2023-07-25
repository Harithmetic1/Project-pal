import React, { useContext, useState } from 'react'
import Message from './icons/Message';
import User from './icons/User';

import Lock from '../components/icons/Lock'
import RevealEye from '../components/icons/RevealEye'
import ShowEye from '../components/icons/ShowEye'
import { AuthContext } from '../features/authentication/contex/AuthContext';
import { AuthContextValue } from '../features/models/Interface';

function RegisterForm() {
    const {
        userDetails,
        handleInputChange
    } = useContext<AuthContextValue>(AuthContext);
    const [passwordConfirmed, setPasswordConfirmed] = useState<boolean>(false);
    const [revealPassword, setRevealPassword] = useState<boolean>(false);
    const [revealConfirmPassword, setRevealConfirmPassword] = useState<boolean>(false);

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value == userDetails.password ? setPasswordConfirmed(true) : setPasswordConfirmed(false);
    }
    return (
        <div className='register-form'>
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
                    <input type="email" name="email" onChange={handleInputChange} className="email-input bg-transparent outline-none w-full text-black" placeholder="Enter your email address" />
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
                    <input type="text" name="username" onChange={handleInputChange} className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your User name" />
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
                    <input type={revealPassword ? "text" : "password"} name="password" onChange={handleInputChange} className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your Password" />
                    <span className='invert' onClick={() => setRevealPassword(!revealPassword)}>
                        {revealPassword ? <ShowEye /> : <RevealEye />}
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
                    <input type="password" name="confirm-password" onChange={handleConfirmPassword} className="email-input bg-transparent outline-none w-[100%] text-black" placeholder="Confirm your Password" />
                    <span className='invert' onClick={() => setRevealConfirmPassword(!revealConfirmPassword)}>
                        {revealConfirmPassword ? <ShowEye /> : <RevealEye />}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;