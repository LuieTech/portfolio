import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="heroSection"
      className="grid grid-cols-1 place-items-center sm:grid-cols-2 items-center px-8 pt-36 pb-[10vh] sm:px-[10vw] sm:pt-[18vh] sm:pb-[12vh] sm:gap- bg-blue-50"
    >
      {/* Text First on Desktop, Image First on Mobile */}
      <div className="flex flex-col space-y-2 text-center sm:text-left items-center sm:items-start mt-10 sm:order-none order-2">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
          Hey, I'm Luie
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
          Full Stack
          <br />
          Developer
        </h1>

        <p className="text-lg w-[70%] py-[2%] pb-[9%] sm:w-[80%] sm:text-lg md:text-xl  text-gray-600">
          I build powerful and efficient web applications with a passion for both front-end and back-end development. <br />
        </p>
        <button className="bg-purple-500 border border-purple-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-500 transition duration-300 max-w-max mx-auto sm:mx-0">
        <Link to="contact-me" offset={-30} className="text-purple hover:text-white">Contact Me</Link>        </button>
      </div>
      <div className="flex justify-center order-1 sm:order-none">
        <img
          src="./hero-luie.png"
          alt="Hero Section"
          className="w-[63%] sm:w-[60%] md:w-[65%] lg:w-[70%] h-auto object-cover"
          // style={{ borderRadius: "20%", width: "80%" }}
        />
      </div>
    </section>
  );
}

export default Hero;
