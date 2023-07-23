import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="navbar-container bg-background-color">
                <div className="navbar px-[30px] py-[20px] flex justify-between drop-shadow-sm items-center">
                    <div className="navbar-title">
                        <h1 className="font-bold text-text-color">
                            PROJECT PAL
                        </h1>
                    </div>
                    <div className="hamburger-menu flex flex-col gap-1 cursor-pointer">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;