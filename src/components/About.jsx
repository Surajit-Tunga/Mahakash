import React from 'react';
import {FaReact} from "react-icons/fa";
import{FaShuttleSpace, FaSpaceAwesome} from "react-icons/fa6"
const AboutData = [
    {
        title: "Foundation",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos optio possimus nihil provident totam.",
        icon: <FaReact className="text-7xl"/>,
        asoDelay: "300"
    },
    {
        title: "Milestone",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos optio possimus nihil provident totam.",
        icon: <FaSpaceAwesome className="text-7xl"/>,
        asoDelay: "500"
    },
    {
        title: "Mission",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos optio possimus nihil provident totam.",
        icon: <FaShuttleSpace className="text-7xl"/>,
        asoDelay: "700"
    }
]

const About = () => {
  return (
    <div>
      <div className="container">
        <div className='min-h-[400px]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                { 
                    AboutData.map((data, index) => (
                        <div data-aos="fade-up" data-aos-delay={data.asoDelay} key={index} className='min-h-[180px] flex flex-col justify-center items-center bg-sky-900/70 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'>
                            {data.icon}
                            <h1 className='my-3'>{data.title}</h1>
                            <p className='text-sm'>{data.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
