import React from "react";

const Home = () => {
  const team = [
    {
      name: "Pablo",
      role: "Fullstack Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "",
      linkedin: "",
      skills: ["React", "JS", "Node",],
    },
    {
      name: "Julian",
      role: "Backend Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "",
      linkedin: "",
      skills: ["JAVA","Springboot"],
    },
    {
      name: "Gonzalo",
      role: "Frontend Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "",
      linkedin: "",
      skills: ["React", "JS", "Node","Jest", "Cypres"],
    },
    {
      name: "Chelso",
      role: "Backend Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "",
      linkedin: "",
      skills: ["JAVA","Springboot"],
    },
    {
      name: "Matias Silva",
      role: "Frontend Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "https://github.com/Ma77i",
      linkedin: "https://www.linkedin.com/in/mattias-silva/",
      skills: ["React", "JS", "Node", "MongoDB"],
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div style={{clipPath: 'polygon(100% 15%, 0% 100%, 100% 100%)',background: "linear-gradient(0deg, rgba(0,204,153,1) 0%, rgba(48,108,201,1) 58%, rgba(102,0,255,1) 100%)"}} className="w-full bg-[#8FE3CF] absolute -z-50 min-h-screen bottom-0 right-0"></div>
      {/* <h1 className="flex justify-center p-10 text-4xl font-bold">Team</h1> */}
      <div className="flex flex-row flex-wrap xl:flex-nowrap md:px-48 justify-center">
        <div className="flex justify-left pt-[15%] w-[45%] flex-col content-center align-center text-center xl:text-left">
          <h1 className="text-6xl md:text-8xl font-bold text-white">FISALU<span className="text-[#8FE3CF]">.</span></h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#06E2ED]">Finanzas saludables</h2>
        </div>
        <div className="w-full flex flex-col justify-center">
          <h2 className="flex justify-center p-10 text-3xl md:text-5xl font-bold md:pl-28 text-white">Nuestro equipo</h2>
          <div className="container items-stretch mx-auto px-2 py-8  flex flex-row flex-wrap justify-center xl:justify-end justify-items-end content-end items-start">
            {team.map((i) => (
              <div
                key={i.name}
                className="shadow-md shadow-indigo-500/50 w-[80%] sm:w-[40%] xs:w-[28%] max-w-[330px] mx-2 bg-white max-w-sm rounded-lg shadow-md my-4 p-2"
              >
                <div className="flex flex-col items-center ">
                  <img
                    className="mb-3 w-14 h-14 rounded-full shadow-lg border border-black"
                    src="https://picsum.photos/200"
                    alt="avatar"
                  />
                  <h5 className="mb-1 text-md font-bold text-gray-900">
                    {i.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {i.role}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-4">
                    <a
                      href={i.linkedin}
                      className=" inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-[#AA59CB] rounded-lg hover:bg-[#06E2ED] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Linkedin
                    </a>
                    <a
                      href={i.github}
                      className="inline-flex items-center py-2 px-4 text-xs font-medium text-center text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      Github
                    </a>
                  </div>
                </div>

                <div className="px-6 pt-4 pb-2">
                  {i.skills.map((skill) => (
                    <span
                      key={skill}
                      className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
      </div>
        </div>
      </div>


    </div>
  );
};

export default Home;
