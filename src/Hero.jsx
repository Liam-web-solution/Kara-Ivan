import React from 'react'
import developer from "./developers.png"

function Hero() {
  return (
         
    <section className="pt-28 pb-16 bg-slate-900/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">


          {/* Text Column */}
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-sm">
            Crafting User-
            <span className="block">Centric Digital</span>
            <span className="block">Experiences</span>
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl">Front-End Designer specializing in React and intuitive UI.</p>



          </div>       

          <div className="w-full flex justify-center lg:justify-end">
            <div
              className="
                w-full
                max-w-[320px]     
                sm:max-w-[384px]  
                rounded-2xl
                shadow-xl
                overflow-hidden
                transform transition-all duration-300
                hover:scale-105
              "
            >
              <img
                src={developer}
                alt= "developer"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
  

export default Hero