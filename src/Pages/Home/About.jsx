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
            src="./about-3.png"
            alt="About Me"
            className="w-60 md:w-[30%] lg:w-[60%] h-auto object-cover rounded-full"
            // style={{ borderRadius: "50%" }}
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
            I’m Luie, a Full Stack Developer with a passion for building
            impactful web applications. My journey in software development
            started with a focus on the MERN stack, where I honed my skills in
            creating dynamic and user-friendly websites.
          </p>
          <p className="text-lg items-stretch sm:text-xl text-gray-600">
            To broaden my expertise, I completed a second bootcamp specializing
            in Java, Spring Boot, and SQL. This experience has given me a
            diverse skill set across both front-end and back-end development.
          </p>
          <p className="text-lg items-stretch sm:text-xl text-gray-600">
            My goal is to continuously grow as a developer while delivering
            impactful solutions that make a difference.
          </p>
        </div>
      </section>
      <hr className="w-7/12 mx-auto border-gray-300 sm:w-8/12" />
    </>
  );
}

export default About;
