 import React, { useState } from 'react';

const IconMenu= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col items-center justify-between p-2 bg-gray-800 text-white">
      <div className="brand">
        <a href="#" className="text-2xl font-bold"></a>
      </div>

      {/* Hamburger button for small screens */}
      <button
        id="menu-toggle"
        className="hamburger flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={toggleMenu}
        aria-controls="main-nav"
        aria-expanded={isMenuOpen}
        aria-label="Open menu"
      >
        <span className="bar w-5 h-1 bg-white mb-1"></span>
        <span className="bar w-5 h-1 bg-white mb-1"></span>
        <span className="bar w-5 h-1 bg-white"></span>
      </button>

      {/* Main navigation */}
      <nav id="main-nav" className={`main-nav ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row">
          <li className="m-2"><a href="#home" className="nav-link hover:text-gray-400">Home</a></li>
          <li className="m-2"><a href="#about" className="nav-link hover:text-gray-400">About</a></li>
          <li className="m-2"><a href="#projects" className="nav-link hover:text-gray-400">Projects</a></li>
          <li className="m-2"><a href="#contact" className="nav-link hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default IconMenu;

 