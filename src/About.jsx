
import React from 'react';
import profileImg from './kara.png'; 

function About() {
  return (
    <section id="about" className="py-14 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-white text-lg font-medium mb-6">About Me</h3>

        <div className="bg-slate-800/60 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
        
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10">
           <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
           />
         </div>


          <div className="text-slate-300  leading-relaxed">
            <div className="mb-3">
                <h4 className='text-2xl font-bold text-slate-50'>Kara Ivan</h4>
              I’m Creative front-end designer with a knack for creating clean, intuitive, and performant user interfaces. With a strong foundation in HTML, CSS, JavaScript, Tailwind CSS, React, Supabase and AI to speed up production. I specialize in turning complex problems into beautiful and functional digital experiences.
            </div>
            <h2 className='text-lg font-bold text-slate-100'> Education <span >(2019-2023)</span></h2>
            
           <p>A Bachelor of Science with Education from Makerere University Kampala, specializing in Biology and Chemistry. Acquired Scientific attitudes of problem identification, analysis and solving skills through Science research.</p>
           <p>Attended online C50 Computer Science course from Harvard University (2024-to date)</p>


            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
