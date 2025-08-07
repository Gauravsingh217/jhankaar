import React, { Suspense, lazy } from 'react';
const Fests = lazy(() => import('./Components/Fests'));
import Hero from './Components/Hero';
import Description from './Components/Description';
import Footer from './Components/Footer';
import End from './Components/End';

function App() {
  
  return (

    // <div className='flex  justify-center bg-primary min-h-screen '>
    // <p className='font-baskerville text-6xl font-medium mt-4 flex justify-center bg-primary text-heading bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent animate-gradient '>JHANKAAR</p>
  <div className='overflow-x-hidden'>
    <Hero/>
    <Description/>
    <Suspense fallback={<div className="text-white text-center">Loading Fests...</div>}>
  <Fests />
</Suspense>
    <Footer/>
    <End/>
    </div>
    
  )
}

export default App
