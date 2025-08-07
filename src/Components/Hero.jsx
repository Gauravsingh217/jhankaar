

import video from '../assets/hero.webm';

export default function Hero() {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden ">
      {/* 🔴 Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      
     
      {/* 🔵 Overlay (optional for darkening video slightly) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* 🟢 Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-baskerville text-5xl md:text-6xl font-medium bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent animate-fadeInUp duration-1000 leading-[1.2] p-2">
          Welcome To JHANKAAR
        </h1>
        <p className="text-lg md:text-xl text-yellow-300 mt-4 animate-fadeInUp duration-1000 font-playfair">
          A celebration of Culture, Creativity, and Talent
        </p>
      </div>
    
    </div>
  );
}
