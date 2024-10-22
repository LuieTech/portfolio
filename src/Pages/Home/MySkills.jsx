import React from "react";

function MySkills() {
  return (
    <>
      <section
        className="max-w-full pt-[8vh] pb-[4vh] sm:pb-[7vh] sm:p-[6vw]"
        id="my-skills"
      >
        <div className="flex flex-col items-center pb-[2vh]">
           
          <h1 className="text-4xl font-bold">My Skills</h1>
        </div>
        <div className="mx-8 flex flex-wrap sm:mx-6 p-9 gap-6 justify-center">
          {" "}
          {/* Added gap and justify-center for better spacing */}
          {/* FRONTEND */}
          <div className="w-full px-4  md:w-[48%] lg:w-[30%]">
            <div className="mb-6 rounded-xl py-6 px-5 shadow-md transition-all hover:shadow-lg sm:p-6 lg:p-5 xl:px-6 bg-blue-50 flex flex-col h-full">
              <div className=" mb-4 inline-block">
                <img src="./frontend.png" alt="frontend-img" />
              </div>
              <div className="flex-grow">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Front-End
                </h3>
                <p className="text-base font-medium text-body-color">
                  I specialize in building responsive, user-friendly interfaces
                  using HTML, CSS, and JavaScript frameworks like React.
                </p>
              </div>
            </div>
          </div>
          {/* BACKEND */}
          <div className="w-full px-4 md:w-[48%] lg:w-[30%]">
            <div className="mb-6 rounded-xl py-6 px-5 shadow-md transition-all hover:shadow-lg sm:p-6 lg:p-5 xl:px-6 bg-blue-50 flex flex-col h-full">
              <div className="mb-4 inline-block">
                <img src="./backend.png" alt="backend-img" />
              </div>
              <div className="flex-grow">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Back-End
                </h3>
                <p className="text-base font-medium text-body-color">
                  My work includes developing APIs, server-side logic, and
                  database management. I create robust back-end solutions
                  utilizing the MERN stack, along with Java, Spring Boot, and
                  SQL.
                </p>
              </div>
            </div>
          </div>
          {/* WEB-FLOW */}
          <div className="w-full px-4 md:w-[48%] lg:w-[30%]">
            <div className="mb-6 rounded-xl py-6 px-5 shadow-md transition-all hover:shadow-lg sm:p-6 lg:p-5 xl:px-6 bg-blue-50 flex flex-col h-full">
              <div className="mb-4 inline-block">
                <img src="./webflow.png" alt="webflow-img" />
              </div>
              <div className="flex-grow">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Webflow Development
                </h3>
                <p className="text-base font-medium text-body-color">
                  I leverage Webflow to design visually compelling and
                  functional websites. Whether you're looking for a simple site
                  or a more dynamic web presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-7/12 mx-auto border-gray-300 sm:w-8/12" />
    </>
  );
}

export default MySkills;
