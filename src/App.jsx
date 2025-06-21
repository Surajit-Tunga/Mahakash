import React from 'react'
import bgVideo from "./assets/earth.mp4"
import Nav from "./components/Nav"

const App = () => {
  return (
    <>
    <div>
      <div className='h-[700px] relative'>
        <video autoPlay loop muted src={bgVideo}className='fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'></video>
        <Nav/>
      </div>
    </div>
    </>
  )
}

export default App

