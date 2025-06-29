import React from 'react'
import bgVideo from "./assets/earth.mp4"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from './components/About'
import Mission from './components/Mission'
import Footer from './components/Footer'
import AOS from "aos";  
import "aos/dist/aos.css"

const App = () => {

  React.useEffect( ()=> {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out"
   } );
  }

  )
  return (
    <>
    <div>
      <div className='h-[700px]  relative '>
        <video autoPlay loop muted src={bgVideo}className=' fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'></video>
        <Nav/>
        <Hero/>
      </div>
      <About/>
      <Mission/>
      <Footer/>
    </div>
    </>
  )
}

export default App

