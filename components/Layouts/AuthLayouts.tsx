import Image from 'next/image';
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

function AuthLayouts({ children }: Props) {
    return (
        <div className='p-0 md:p-8 md:py-[10px] h-fit bg-white flex justify-center items-center'>
            <div className="form w-full md:w-[50%]">
                {children}
            </div>
            <div className="rhs hidden md:block  bg-background-color h-full w-[50%] rounded-2xl">
                <div className="image-container flex justify-center h-full items-center">
                    <Image src={"/auth-side-lg.png"} alt='Auth Page' width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default AuthLayouts