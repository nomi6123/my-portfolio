import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black px-8 text-white md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Noman</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About me
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Contact Me Button for Desktop */}
        <button
          className="hidden 
        md:inline bg-gradient-to-r
         from-green-500 to-blue-500 text-white px-4 py-2
          rounded-full transform transition-transform duration-300 hover:scale-105"
        >
          Contact Me
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <a
              href="#home"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              About me
            </a>
            <a
              href="#services"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
