import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=' h-full relative z-10'>
        <div className="h-full flex justify-center items-center p-4 ">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div>
                    <h1 data-aos="fade-up" className='text-5xl font-bold'>
                        Welcome to MAHAKASH
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300" className='mt-10'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae consequuntur pariatur officia suscipit debitis consequatur quos iure maiores natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minima blanditiis sit obcaecati non nostrum?
                     </p>
                     <button data-aos="fade-up" data-aos-delay="500" className='bg-white text-black px-4 py-2 rounded-md mt-5 hover:bg-slate-300'>
                        Explore
                     </button>

                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero
