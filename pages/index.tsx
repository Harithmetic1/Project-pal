import React from "react";
import Navbar from '../components/Navbar'
import Link from "next/link";
import Image from "next/image";
import SallyImg from "../public/Saly-home-lg.png"

const Landing = () => {
  return (
    <>
      <div className="home-container bg-background-color">
        <Navbar />
        <div className="home-section flex gap-8 h-fit justify-between items-center p-[30px] sm:p-[90px]">
          <div className="hero-section w-[100%] sm:w-[450px] mt-[30px] bg-background-color">
            <div className="header-container">
              <h1 className="text-bold text-[44px] leading-[54px] text-text-color">
                CREATING YOUR PERSONAL PORTFOLIO?
              </h1>
            </div>
            <div className="caption-container">
              <p className="text-400 mt-6 font-normal text-text-color">
                Add your projects to project pal, and get an endpoint that can easily connect to your portfolio.
              </p>
            </div>
            <div className="btn-container flex  items-center gap-6 mt-[60px]">
              <Link href="/register">
                <button className="bg-red-secondary flex-auto px-5 w-[139px] h-[44px] text-[0.9rem] rounded-lg">
                  Get Started
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-transparent flex-auto px-5 w-[139px] h-[44px] text-[0.9rem] border-2 border-red-secondary text-red-secondary rounded-lg">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="rhs h-fit w-fit">
            <div className="image hidden w-[100%] h-[100%] md:block">
              <Image src="/home-lg.png" alt="Sally Image" width={400} height={400} />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Landing;