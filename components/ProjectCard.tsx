import React from 'react';
import Image from 'next/image';

import GithubOutline from './icons/GithubOutline';
import ArrowLink from './icons/ArrowLink';

const ProjectCard = () => {
    return (
        <div className='text-black flex flex-col sm:flex-row justify-center items-center'>
            <div className="image-container w-full flex items-center justify-center relative ">
                <Image
                    src="/Rectangle.png"
                    alt="Rectangle"
                    width={300}
                    height={150}
                />
            </div>
            <div className="project-description pt-[9px] px-2 w-[310px] sm:w-full">
                <div className="project-name-links flex justify-between">
                    <h1 className="project-name">
                        Weather App
                    </h1>
                    <div className="social-links flex gap-3">
                        <GithubOutline />
                        <ArrowLink />
                    </div>
                </div>
                <div className="project-stack">
                    <p className='px-2 text-[10px] leading-3 font-normal'>
                        React Js, SCSS, Redux, Axios
                    </p>
                </div>
                <div className="project-caption pt-[15px]">
                    <p className='px-2 text-[10px] leading-3 font-normal'>
                        A weather map to help you check your location, using the name of the country.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;