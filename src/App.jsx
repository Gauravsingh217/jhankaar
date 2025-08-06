import React from 'react';
import Hero from './Components/Hero';
import Description from './Components/Description';
import Fests from './Components/Fests';
import Footer from './Components/Footer';
import End from './Components/End';

function App() {
  
  return (

    // <div className='flex  justify-center bg-primary min-h-screen '>
    // <p className='font-baskerville text-6xl font-medium mt-4 flex justify-center bg-primary text-heading bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent animate-gradient '>JHANKAAR</p>
  <div className='overflow-x-hidden'>
    <Hero/>
    <Description/>
    <Fests/>
    <Footer/>
    <End/>
    </div>
    
  )
}

export default App
