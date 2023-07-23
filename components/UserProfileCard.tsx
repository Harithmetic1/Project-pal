import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Github from '../components/icons/Github'
import Linkedin from '../components/icons/Linkedin'
import FacebookOutline from '../components/icons/FacebookOutline'

const UserProfileCard = () => {
    return (
        <div className='p-[30px]'>
            <div className="profile-card flex items-center justify-center py-[11px] px-[6px] gap-[7px] border-purple-secondary border-[2px] rounded-[23px]">
                <div className="img-icon">
                    <Image
                        alt='User Image'
                        src="/user_profile.png"
                        width={83}
                        height={83}
                        priority
                    />
                </div>
                <div className="user-details pt-6 px-2">
                    <div className="name">
                        <h2 className='text-xl'>
                            Drishti Ratan
                        </h2>
                    </div>
                    <div className="title">
                        <p className='text-[14px]'>
                            Frontend Developer @Clover
                        </p>
                    </div>
                    <div className="social-links flex items-center justify-center gap-6">
                        <Link href="/">
                            <Github />
                        </Link>
                        <Link href="/">
                            <Linkedin />
                        </Link>
                        <Link href="/">
                            <FacebookOutline />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard;