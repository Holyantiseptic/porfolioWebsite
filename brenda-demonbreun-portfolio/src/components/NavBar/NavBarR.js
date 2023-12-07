import React, { useState } from 'react';

const NavBarR = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-extrabold">
          MyLogo
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div className={`w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex space-x-4">
            <li><a href="#home" className="text-white">Home</a></li>
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#contact" className="text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul>
            <li><a href="#home" className="text-white block py-1">Home</a></li>
            <li><a href="#about" className="text-white block py-1">About</a></li>
            <li><a href="#contact" className="text-white block py-1">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBarR;
