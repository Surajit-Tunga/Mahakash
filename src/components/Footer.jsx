import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { MdCall, MdMessage } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-gray-800 px-5'>
        <section className='max-w-[1200px] mx-auto'>
            <div className="grid md:grid-cols-3 py-5">
                {/* 1st col */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Ready To Join</h1>
                    <p>Get Exclusive <span className='font-bold'> Mentorship</span></p>
                    <br />
                    <div className='flex items-center h-10'>
                        <input type="text" className='py-1 px-3 w-full h-full focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-2 border-gray-200 rounded-md' placeholder='Enter Your Email' />
                        <button className='bg-white text-black px-4 py-2 h-full rounded-md hover:bg-slate-300 transition duration-300 ml-2'>Subscribe</button>
                    </div>
                </div>
                {/* Sec Col */}
                <div className='grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                            <ul className='flex flex-col gap3'>
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
                                    <a href="#">Events</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                            <ul className='flex flex-col gap3'>
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
                                    <a href="#">Events</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   <div className='py-8 px-4'>
                      <h1 className='text-xl font-bold border-b border-gray-600 pb-2 mb-4'>Contact Us</h1>
                      <div className='space-y-4 text-sm leading-tight'>
                      <div className='flex items-start gap-3'>
                        <HiLocationMarker className='text-lg mt-0.5 text-sky-400' />
                        <p>Kolkata, WB</p>
                      </div>
                      <div className='flex items-start gap-3'>
                        <MdMessage className='text-lg mt-0.5 text-sky-400' />
                        <p>abc@gmail.com</p>
                     </div>
                     <div className='flex items-start gap-3'>
                       <MdCall className='text-lg mt-0.5 text-sky-400' />
                        <p>+91 0001112223</p>
                     </div>
                    </div>
                  </div>
                </div>
            </div>
            {/* Bottom */}
            <div className=' sm:block'>
                <div className='flex justify-between items-center py-6 border-t-2 border-gray-400'>
                    <span className='text-sm text-gray-400'>
                        Copyright &copy; 2025.
                    </span>
                    <div className='flex items-center justify-center gap-4 pb-4 '>
                        <a href="#">
                            <FaInstagram className='text-4xl'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-4xl'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-4xl'/>
                        </a>
                    </div>
                    <span className='text-sm text-gray-400'>
                        Terms & Conditions.
                    </span>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
