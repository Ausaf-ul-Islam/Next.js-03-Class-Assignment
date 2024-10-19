"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-white tracking-wide hover:scale-105 transition-transform duration-200 cursor-pointer">
          Asf Enterprises
        </h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none relative"
          >
            <span
              className={`block w-8 h-1 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-8 h-1 bg-white my-1 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-8 h-1 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row justify-end items-center absolute md:static bg-black w-full md:w-auto top-16 left-0 md:top-auto md:left-auto transition-transform duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
            <li className="flex items-center">
              <Link
                href="/"
                className="relative text-white transition-colors duration-300 text-lg md:text-base font-medium group"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="#features"
                className="relative text-white transition-colors duration-300 text-lg md:text-base font-medium group"
              >
                Featured Cars
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="#services"
                className="relative text-white transition-colors duration-300 text-lg md:text-base font-medium group"
              >
                Services
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="#customer-reviews"
                className="relative text-white transition-colors duration-300 text-lg md:text-base font-medium group"
              >
                Reviews
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="#contact"
                className="relative text-white transition-colors duration-300 text-lg md:text-base font-medium group"
              >
                Contact
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
