import React from 'react';
import {FaReact} from "react-icons/fa";
import{FaShuttleSpace, FaSpaceAwesome} from "react-icons/fa6"
const AboutData = [
    {
        title: "Foundation",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos optio possimus nihil provident totam.",
        icon: <FaReact className="text-7xl"/>
    },
    {
        title: "Milestone",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos optio possimus nihil provident totam.",
        icon: <FaSpaceAwesome className="text-7xl"/>
    },
    {
        title: "Mission",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos optio possimus nihil provident totam.",
        icon: <FaShuttleSpace className="text-7xl"/>
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
                        <div key={index}>
                            <h1>{data.title}</h1>
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
