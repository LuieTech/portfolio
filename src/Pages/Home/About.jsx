import React from "react";

function About() {
  return (
    <>
      <section
        id="about"
        className="grid grid-cols-1 sm:grid-cols-1 items-center place-items-center gap-12 px-16  pt-[5vh] pb-[8vh] sm:pb-[10vh] lg:grid-cols-2 lg:px-[10vw] lg:py-[10vh] lg:gap-5"
      >
        {/* Image Section */}
        <div className="flex justify-center md:justify-center">
          <img
            src="./luie-3.png"
            alt="About Me"
            className="w-[55%] rounded-full sm:w-[33%] hover:scale-110 transition-all duration-700 md:w-[33%] lg:w-[55%] lg:rounded-[55%] lg:border-b-transparent h-auto object-cover pointer-events-none"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col space-y-4 items-center text-center stretch sm:w-[90%] md:items-center md:text-center lg:items-start lg:text-left">
          <div className="pb-4 lg:pb-0">
            {/* <p className="text-indigo-600 text-lg font-medium sm:pl-1">About</p> */}
            <h1 className="text-4xl sm:text-4xl font-bold text-gray-800">
              About Me
            </h1>
          </div>

          <p className="text-lg items-stretch sm:text-xl text-gray-600">
            I’m Luie, a Full Stack Developer skilled in the MERN stack and
            JavaScript. I’ve developed my skills in creating interactive and
            user-friendly web applications.
          </p>
          <p className="text-lg items-stretch sm:text-xl text-gray-600">
            However, to expand my knowledge, I completed a Bootcamp
            focused on Java, MySQL, and Spring Boot. This experience has given
            me a strong foundation in both front-end and back-end development.
          </p>
          <p className="text-lg items-stretch sm:text-xl text-gray-600">
            My goal is to keep growing as a developer while creating solutions
            that make a real impact.
          </p>
        </div>
      </section>
      <hr className="w-7/12 mx-auto border-gray-300 sm:w-8/12" />
    </>
  );
}

export default About;
