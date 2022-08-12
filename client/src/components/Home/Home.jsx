import React from "react";

const Home = () => {
  const team = [
    {
      name: "Pablo",
      role: "Fullstack Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "",
      linkedin: "",
      skills: [""],
    },
    {
      name: "Javier",
      role: "Backend Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "",
      linkedin: "",
      skills: [""],
    },
    {
      name: "Gonzalo",
      role: "Frontend Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "",
      linkedin: "",
      skills: [""],
    },
    {
      name: "Chelso",
      role: "Backend Developer",
      image: "https://avatars2.githubusercontent.com/u/17098281?s=460&v=4",
      github: "",
      linkedin: "",
      skills: [""],
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
    <>
      <h1 className="flex justify-center p-10 text-4xl font-bold">Team</h1>
      <div className="container mx-auto px-4 py-8  flex flex-wrap">
        {team.map((i) => (
          <div
            key={i.name}
            className="w-full max-w-sm rounded-lg border border-gray-200 shadow-md dark:border-gray-400 mx-auto my-4 p-2"
          >
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 w-20 h-20 rounded-full shadow-lg"
                src="https://picsum.photos/200"
                alt="avatar"
              />
              <h5 className="mb-1 text-xl font-bold text-gray-900">
                {i.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {i.role}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href={i.linkedin}
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Linkedin
                </a>
                <a
                  href={i.github}
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="px-6 pt-4 pb-2">
              {i.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
