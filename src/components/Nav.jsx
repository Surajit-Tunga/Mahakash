import React from 'react'
import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png"


const Nav = () => {

const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false); //hook
const toggleNavbar =()=> {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <div className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4 h-20'>
        <div className="container">
             <div className="flex items-center justify-between">
                <div className="flex items-center font-bold text-2xl">
                     <img className='w-20' src={logo} alt=""  />
                     <span className="flex ">
                        MAHAKASH
                     </span>
                </div>
                <div className='hidden lg:flex'>
                    <ul className="flex items-center gap-6 text-xl py-4">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Mission</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                       <button onClick={toggleNavbar}>
                           {mobileDrawerOpen ? <X/>: <Menu/>}
                       </button>
                   </div>
             </div>
              {mobileDrawerOpen && (
                <div className="fixed   bg-black/10 backdrop-blur w-full flex flex-col justify-center lg:hidden">
                    <ul className="flex flex-col items-center"> 
                       <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Mission</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul> 
                </div>
            )}
        </div>
    </div>
    
  )
}

export default Nav
