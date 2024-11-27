import data from "../../data/portfolio/portfolio.json";
import { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    data && setProjects(data);
  }, []);

  return (
    <>
      <section
        id="projects"
        className="pt-[6vh] pb-[10vh] mx-[6vw] sm:p-[6vw] sm:pt-[10vh] sm:pb-[13vh]"
      >
        {/* Título y botón */}
        <div className="flex flex-col mb-[8vh] sm:flex-row justify-between items-center text-center sm:text-left gap-y-2">
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-3xl font-bold">My Portfolio</h2>
          </div>
          <a
            href="https://github.com/LuieTech"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center text-sm gap-2 border-red-700 text-white bg-pink-600 px-6 py-2 rounded-md hover:bg-white hover:text-pink-600 transition"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-5 sm:[&>svg]:w-6 sm:[&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512"
              >
                {/* GitHub icon */}
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </span>
            Visit My GitHub
          </a>
        </div>

        {/* Renderización de las tarjetas de los proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20">
          {projects?.map((project, index) => (
            <div key={index} className="shadow-lg w-[100%] h-auto hover:scale-110 transition-all duration-700 rounded-xl">

              <div className="relative flex justify-center">
                <img
                  className="object-fit  h-64 lg:h-60"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="min-h-[calc(100%)] h-auto px-6 py-6 mb-[3vh]">
                <h2 className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                  {project.title}
                </h2>
                <h5 className="text-gray-500 text-sm space-y-1">
                  {project.description} <br />
                  <p className="">
                    Key technologies:{" "}
                    <span className="text-gray-500 font-bold text-xs">
                      <i>{project.technologies}</i>
                    </span>
                  </p>
                </h5>
                <div className="flex flex-col pt-4 pb- w-[100%] items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-sm flex gap-3 pt-4 pb-2 hover:text-indigo-600 justify-center w-[60%]"
                    >
                    View in GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    
                  </a>
                  <hr className=" border-indigo-600 w-[40%] " />
                  {/* </div> */}
                  
                </div>
                {project.link && 
                <a href={project.link} target="_blank" rel="noreferrer" className="flex justify-center">
                  <div className="text-xs w-fit rounded-full top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Try Live
                  </div>
                </a>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="w-7/12 mx-auto border-gray-300 sm:w-8/12" />
    </>
  );
}

export default Portfolio;
