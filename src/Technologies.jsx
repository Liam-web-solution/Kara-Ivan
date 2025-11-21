
import React from 'react';
import html5Img from './htmllogo.webp';
import cssImg from './csslogo.png';
import jsImg from './javascriptlogo.jpg';
import tailwindImg from './Tailwindlogo.png';
import reactImg from './reactlogo.png';
import supabaseimg from './supabaselogo.jpg'

function Technologies() {
  const html = [{ name: "HTML5", logo: html5Img }]
  const css  = [{ name: "CSS", logo: cssImg},]
  const javascript = [ { name: "JavaScript", logo: jsImg }]
  const tailwind = [{ name: "Tailwind CSS", logo: tailwindImg }]
  const react = [ { name: "React", logo: reactImg },]
  const supbas = [ { name: "Supabase", logo: supabaseimg }]
   
    


  return (
    <section className="py-10 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-white text-lg sm:text-xl font-medium mb-6">
          Technologies Used
        </h3>

        <div className="grid sm:grid-cols-6 gap-3 max-sm:grid-cols-2">
          {html.map((h, idx) => (
            <div
              key={idx}
              className="min-w-[6 rem] max-sm:flex max-sm:flex-wrap sm:flex-wrap sm:flex rounded-lg border border-slate-700/40 p-4 text-slate-300 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
            >
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-slate-800/60 flex items-center justify-center overflow-hidden md:flex-wrap">
                <img
                  src={h.logo}
                  alt={h.name}
                  className="w-full h-full object-contain"
                />
              </div>

              
              <div className="text-sm sm:text-base">{h.name}</div>
            </div>
          ))}

          {css.map((c, idx) => (
            <div
              key={idx}
              className="min-w-[6 rem]  max-sm:flex max-sm:flex-wrap sm:flex-wrap sm:flex rounded-lg border border-slate-700/40 p-4 text-slate-300 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
            >
              
              <div className="w-10 h-12 sm:w-14 sm:h-14 rounded-md bg-slate-800/60 flex items-center justify-center overflow-hidden md:flex-wrap">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="w-full h-full object-contain"
                />
              </div>

            
              <div className="text-sm sm:text-base">{c.name}</div>
            </div>
          ))}

           {javascript.map((j, idx) => (
            <div
              key={idx}
              className="min-w-[6 rem]  max-sm:flex max-sm:flex-wrap sm:flex-wrap sm:flex rounded-lg border border-slate-700/40 p-4 text-slate-300 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
            >
              
              <div className="w-12 h-10 sm:w-14 sm:h-14 rounded-md bg-slate-800/60 flex items-center justify-center overflow-hidden md:flex-wrap">
                <img
                  src={j.logo}
                  alt={j.name}
                  className="w-full h-full object-contain"
                />
              </div>

            
              <div className="text-sm sm:text-base">{j.name}</div>
            </div>
          ))}

          {tailwind.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[6 rem] max-sm:flex max-sm:flex-wrap sm:flex-wrap sm:flex  rounded-lg border border-slate-700/40 p-4 text-slate-300 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
            >
            
              <div className="w-10 h-12 sm:w-14 sm:h-14 rounded-md bg-slate-800/60 flex items-center justify-center overflow-hidden md:flex-wrap">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="w-full h-full object-contain"
                />
              </div>

              
              <div className="text-sm sm:text-base">{t.name}</div>
            </div>
          ))}
          
          {react.map((r, idx) => (
            <div
              key={idx}
              className="min-w-[6 rem] max-sm:flex max-sm:flex-wrap sm:flex-wrap sm:flex rounded-lg border border-slate-700/40 p-4 text-slate-300 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
            >
            
              <div className="w-10 h-12 sm:w-14 sm:h-14 rounded-md bg-slate-800/60 flex items-center justify-center overflow-hidden md:flex-wrap">
                <img
                  src={r.logo}
                  alt={r.name}
                  className="w-full h-full object-contain"
                />
              </div>

              
              <div className="text-sm sm:text-base">{r.name}</div>
            </div>
          ))}

          {supbas.map((s, idx) => (
            <div
              key={idx}
              className="min-w-[6 rem] max-sm:flex max-sm:flex-wrap sm:flex-wrap sm:flex rounded-lg border border-slate-700/40 p-4 text-slate-300 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
            >
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-slate-800/60 flex items-center justify-center overflow-hidden md:flex-wrap">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="w-full h-full object-contain"
                />
              </div>

              
              <div className="text-sm sm:text-base">{s.name}</div>
            </div>
          ))}


          
        </div>
      </div>
    </section>
  );
}

export default Technologies;
