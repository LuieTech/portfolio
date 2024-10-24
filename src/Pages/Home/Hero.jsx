import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="heroSection"
      className="grid grid-cols-1 place-items-stretch md:grid-cols-2 place-content-center items-center px-8 pt-32 pb-[10vh] sm:px-[10vw] sm:pt-[18vh] sm:pb-[12vh] sm:gap-5 bg-blue-50"
    >
      {/* Text First on Desktop, Image First on Mobile */}
      <div className="flex flex-col space-y-2 text-stretch md:text-left items-center md:items-start mt-10 md:order-none order-2">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
          Hey, I'm Luie
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
          Full Stack
          <br />
          Developer
        </h1>

        <p className="text-lg w-[70%] py-[2%] pb-[9%] sm:w-[80%] sm:text-lg md:text-xl  text-gray-600">
          I build powerful and efficient web applications with a passion for both front-end and back-end development. <br />
        </p>
        <button className="bg-purple-500 border border-purple-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-500 transition duration-300 max-w-max mx-auto sm:mx-0">
        <Link to="contact-me" offset={-30} className="text-purple hover:text-purple-500">Contact Me</Link>        </button>
      </div>
      <div className="flex justify-center order-1 sm:order-none">
        <img
          src="./hero-image.png"
          alt="Hero Section"
          className="w-[55%] sm:w-[60%] md:w-[75%] lg:w-[80%] h-auto object-cover rounded-[15%] pointer-events-none"
          // style={{ borderRadius: "20%", width: "80%" }}
        />
      </div>
    </section>
  );
}

export default Hero;
