import React from "react";
import { Link } from "react-scroll";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // You might need to install @heroicons/react if not installed

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white text-gray-800 px-4 py-4 md:px-8 md:py-6 shadow-md fixed w-full">
      {({ open }) => (
        <>
          <div className="container mx-auto flex justify-between items-center">
            {/* Left side (Logo/Name) */}
            <div className="text-2xl font-bold">LRamirez</div>

            {/* Hamburger Icon (Mobile) */}
            <div className="md:hidden">
              <Disclosure.Button className="text-3xl focus:outline-none">
                {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </Disclosure.Button>
            </div>

            {/* Center (Navigation Links for Desktop) */}
            <div className="hidden md:flex space-x-6 text-lg">
              <Link to="heroSection" offset={-40} smooth={true} duration={500} className="hover:text-purple-500 transition duration-300">
                Home
              </Link>
              <Link to="my-skills" offset={-50} smooth={true} duration={500} className="hover:text-purple-500 transition duration-300">
                My Skills
              </Link>
              <Link to="about" offset={-70} smooth={true} duration={500} className="hover:text-purple-500 transition duration-300">
                About Me
              </Link>
              <Link to="projects" offset={-40} smooth duration={500} className="hover:text-purple-500 transition duration-300">
                Projects
              </Link>
              
            </div>

            {/* Right side (Contact Button) */}
            <div className="hidden md:flex">
              <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300">
                <Link to="contact-me" offset={-30} className="text-purple hover:text-white">Contact Me</Link>
              </button>
            </div>
          </div>

          {/* Mobile Menu (displays when hamburger is clicked) */}
          <Disclosure.Panel className="md:hidden">
            <div className="flex flex-col space-y-4 text-center">
              <Link to="heroSection" smooth offset={-20} duration={500} className="hover:text-purple-500 transition duration-300">
                Home
              </Link>
              <Link to="my-skills" smooth offset={-20} duration={500} className="hover:text-purple-500 transition duration-300">
                My Skills
              </Link>
              <Link to="about" smooth offset={-20} duration={500} className="hover:text-purple-500 transition duration-300">
                About Me
              </Link>
              <Link to="projects" offset={-20} smooth duration={500} className="hover:text-purple-500 transition duration-300">
                Projects
              </Link>
              <Link to="contact-me" offset={-40} smooth duration={500} className="hover:text-purple-500 transition duration-300">
                Contact Me
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
