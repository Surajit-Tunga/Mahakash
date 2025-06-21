import React from 'react'
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4 h-20'>
        <div className="container">
             <div className="flex items-center justify-between">
                <div className="flex items-center  text-white font-bold text-2xl">
                     <img className='w-20' src={logo} alt=""  />
                     <span className="flex ">
                        MAHAKASH
                     </span>
                </div>
                <div className='text-white'>
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
             </div>
        </div>
    </div>
    
  )
}

export default Nav
