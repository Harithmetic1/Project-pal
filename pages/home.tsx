import React from 'react'
import Navbar from '../components/Navbar';
import Link from 'next/link';

import UserProfileCard from '../components/UserProfileCard';
import ProjectCard from '../components/ProjectCard';

const home = () => {
    return (
        <div>
            <Navbar />
            <div className="home-contents bg-background-color">
                <UserProfileCard />
                <div className="project-cards p-[30px] flex flex-col gap-5">
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}

export default home;