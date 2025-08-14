

import React, { useEffect } from "react";


export default function Footer() {
  

  return (
    <div className="flex flex-col justify-center items-center py-20 px-4  text-white">
      <h1
       
        className="text-3xl md:text-5xl font-playfair text-heading text-center mb-3"
      >
        Be More Than a Spectator – Be the
      </h1>

      <h2
      
        className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-5xl md:text-6xl font-baskerville text-center p-2 
        "
      >
        Spark!
      </h2>

      <p
       
        className="text-lg md:text-2xl font-cormorant text-text text-center max-w-3xl mt-6"
      >
        Jhankaar isn’t just a fest — it’s where talent ignites, friendships bloom, and dreams take the stage. Whether you're a performer, creator, or dreamer...{" "}
        <span className="text-pink-400">this is your moment.</span>
      </p>
    </div>
  );
}
