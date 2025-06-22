import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 '>
        <section className='max-w-[1200px] mx-auto'>
            <div className="grid md:grid-cols-3 py-5">
                <div>
                    <h1>Ready To Join</h1>
                    <p>Get Exclusive <span className='font-bold'> Mentorship</span></p>
                </div>
                <br />
                <div>
                    <input type="text" className='py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-2 border-gray-200 rounded-md' />
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
