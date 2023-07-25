import React, { useContext } from 'react'
import { AuthContextValue } from '../features/models/Interface';
import { AuthContext } from '../features/authentication/contex/AuthContext';

const PersonalDetailsForm = () => {
    const {
        handleInputChange
    } = useContext<AuthContextValue>(AuthContext)
    return (
        <div>
            <div className="email">
                <div className="label pb-[11px]">
                    <label htmlFor="first_name" className="text-placeholder text-[13px] font-md leading-5 md:border-black">
                        First name
                    </label>
                </div>
                <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                    <span className='invert'>
                        {/* <Message /> */}
                    </span>
                    <input type="text" name="first_name" onChange={handleInputChange} className="email-input bg-transparent outline-none w-full text-black" placeholder="Enter your first name" />
                </div>
            </div>
            <div className="username pt-[42px]">
                <div className="label pb-[11px]">
                    <label htmlFor="last_name" className="text-placeholder text-[13px] font-md leading-5">
                        Last name
                    </label>
                </div>
                <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                    <span className='invert'>
                        {/* <User /> */}
                    </span>
                    <input type="text" name="last_name" onChange={handleInputChange} className="email-input bg-transparent w-full outline-none text-black" placeholder="Enter your last name" />
                </div>
            </div>
            <div className="social-link mt-[49px]">
                <div className="label pb-[11px]">
                    <label htmlFor="github" className="text-placeholder text-[13px] font-md leading-5">
                        Github
                    </label>
                </div>
                <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                    <span className='invert'>
                        {/* <Lock /> */}
                    </span>
                    <input type="text" name="github" onChange={handleInputChange} className="email-input bg-transparent w-full outline-none text-black" placeholder="Link to social profile" />
                    <span className='invert'>
                        {/* <RevealEye /> */}
                    </span>
                </div>
            </div>
            <div className="social-link mt-[49px]">
                <div className="label pb-[11px]">
                    <label htmlFor="twitter" className="text-placeholder text-[13px] font-md leading-5">
                        Twitter Username
                    </label>
                </div>
                <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                    <span className='invert'>
                        {/* <Lock /> */}
                    </span>
                    <input type="text" name="twitter" onChange={handleInputChange} className="email-input bg-transparent outline-none w-[100%] text-black" placeholder="Link to social profile" />
                </div>
            </div>
            <div className="social-link mt-[49px]">
                <div className="label pb-[11px]">
                    <label htmlFor="linkedin" className="text-placeholder text-[13px] font-md leading-5">
                        Linkedin Profile Link
                    </label>
                </div>
                <div className="input-field flex items-center gap-[7.42px] pb-[7px] border-b-2 border-black">
                    <span className='invert'>
                        {/* <Lock /> */}
                    </span>
                    <input type="text" name="linkedin" onChange={handleInputChange} className="email-input bg-transparent outline-none w-[100%] text-black" placeholder="Link to social profile" />
                </div>
            </div>
        </div>
    )
}

export default PersonalDetailsForm;