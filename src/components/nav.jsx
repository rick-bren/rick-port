import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/ken1.jpg"; // Ensure the path to your logo is correct
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const smoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -70;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center justify-between p-4">
      {/* Logo */}
      <div className="flex mt-5 ml-10">
        <img
          src={logo}
          alt="Logo"
          className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] rounded-full lg:ml-6 lg:mt-[-10px] lg:hover:scale-125 transition-transform duration-300"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex justify-end z-10">
        <button
          onClick={toggleMenu}
          className="text-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-4 top-[70px] bg-slate-700 shadow-lg rounded-lg p-4 flex flex-col space-y-2 z-50"
        >
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, "home")}
            className="text-white"
          >
            Home
          </a>
          <a
            href="#about-me"
            onClick={(e) => smoothScroll(e, "about-me")}
            className="text-white"
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={(e) => smoothScroll(e, "skills")}
            className="text-white"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => smoothScroll(e, "projects")}
            className="text-white"
          >
            Projects
          </a>
          <a
            href="#contact-me"
            onClick={(e) => smoothScroll(e, "contact-me")}
            className="text-white"
          >
            Contact Me
          </a>

          {/* Social Media Icons for Mobile */}
          <div className="flex space-x-2 mt-2 lg:hidden">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] flex items-center justify-center transition-transform duration-300 hover:scale-110 bg-gray-100 rounded-full"
            >
              <FaGithub
                size={32}
                className="text-gray-800 dark:text-gray-200"
              />
            </a>
          </div>
        </div>
      )}

      {/* Navigation Links for Desktop */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-between lg:mr-24 lg:text-2xl lg:mt-[-10px]">
        <div className="flex space-x-4 lg:flex-1 lg:justify-center lg:gap-6 font-extrathin">
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, "home")}
            className="transition-transform duration-300 hover:scale-125"
          >
            Home
          </a>
          <a
            href="#about-me"
            onClick={(e) => smoothScroll(e, "about-me")}
            className="transition-transform duration-300 hover:scale-125"
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={(e) => smoothScroll(e, "skills")}
            className="transition-transform duration-300 hover:scale-125"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => smoothScroll(e, "projects")}
            className="transition-transform duration-300 hover:scale-125"
          >
            Projects
          </a>
        </div>

        {/* Contact Me Button for Desktop */}
        <button
          onClick={(e) => smoothScroll(e, "contact-me")}
          className="inline-block bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-600 text-black px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-transform duration-1 hover:scale-105"
        >
          Contact Me
        </button>
      </div>

      {/* Social Media Icon for Desktop */}
      <div className="hidden lg:flex lg:flex-col lg:fixed lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:space-y-4">
        <a
          href="https://github.com/rick-bren"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50px] h-[50px] flex items-center justify-center transition-transform duration-300 hover:scale-110 rounded-full"
        >
          <FaGithub size={32} className="text-gray-800 dark:text-gray-200" />
        </a>
      </div>
    </div>
  );
};

export default Navi;
