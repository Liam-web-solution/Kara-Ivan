import React from 'react'
import IconLogo from './IconLogo'
import IconMenu from './IconMenu'

function Header() {
  return (

    <header className="w-full bg-transparent fixed top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white font-semibold">
          <div className=" bg-linear-to-br from-sky-400 to-indigo-500 p-1 rounded-md">
            <div className=" bg-linear-to-br from-slate-900 to-slate-800 p-2 rounded-sm">
            {<IconLogo /> }
            </div>
          </div>
          <span className="ml-1">Kara Ivan</span>
        </div>


        <nav className="hidden md:flex items-center gap-8 text-slate-300 text-sm">
          <a href="#work" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>

          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>


        <div className="flex items-center gap-3">
      
          <div className="md:hidden text-slate-300 p-2 rounded-md hover:bg-white/5">
            { <IconMenu /> }
          </div>
        </div>
      </div>
   </header>

      
 )
}

export default Header