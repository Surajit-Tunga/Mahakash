import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Nav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLinkClick = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <div className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 h-20'>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center text-white font-bold text-2xl space-x-2">
            <img className='w-14 sm:w-16' src={logo} alt="logo" />
            <span>MAHAKASH</span>
          </div>

          {/* Desktop Nav */}
          <div className='text-white hidden lg:flex'>
            <ul className="flex items-center gap-6 text-lg">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Mobile Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-20 left-0 w-full z-40 bg-neutral-900 text-white p-6 flex flex-col items-center space-y-6 lg:hidden">
            <ul className="flex flex-col items-center space-y-4 text-xl">
              <li onClick={handleLinkClick}><a href="#">Home</a></li>
              <li onClick={handleLinkClick}><a href="#">About</a></li>
              <li onClick={handleLinkClick}><a href="#">Mission</a></li>
              <li onClick={handleLinkClick}><a href="#">Contact Us</a></li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <a href="#" className="py-2 px-4 border rounded-md">Sign In</a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-2 px-4">Create an Account</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
