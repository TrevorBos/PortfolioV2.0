import React from "react";
import eatDrinkRelax from "../assets/portfolio/eatDrinkRelax.png";
import gitAJob from "../assets/portfolio/GitAJob.png";
import runBuddy from "../assets/portfolio/runbuddyimg.png";
import taskinator from "../assets/portfolio/Taskinator.png";
import techBlog from "../assets/portfolio/techBlog.png";
import globber from "../assets/portfolio/globber.png";
import weatherDashboard from "../assets/portfolio/weatherDash.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: globber,
      demoLink: "https://globber-chat-box.herokuapp.com/",
      codeLink: "https://github.com/tarequem/globber",
      title: "Globber"
    },
    {
      id: 2,
      src: gitAJob,
      demoLink: "https://peaceful-reef-41407.herokuapp.com/",
      codeLink: "https://github.com/TrevorBos/Git-A-Job",
      title: "GitAJob"
    },
    {
      id: 3,
      src: eatDrinkRelax,
      demoLink: "https://trevorbos.github.io/EatDrinkRelax/",
      codeLink: "https://github.com/TrevorBos/EatDrinkRelax",
      title: "Eat Drink Relax"
    },
    {
      id: 4,
      src: techBlog,
      demoLink: "https://stark-ocean-65719.herokuapp.com/",
      codeLink: "https://github.com/TrevorBos/Tech-Blog",
      title: "Tech Blog"
    },
    {
      id: 5,
      src: taskinator,
      demoLink: "https://trevorbos.github.io/Taskinator/",
      codeLink: "https://github.com/TrevorBos/Taskinator",
      title: "Taskinator"
    },
    {
      id: 6,
      src: weatherDashboard,
      demoLink: "https://trevorbos.github.io/Weather-Dashboard/",
      codeLink: "https://github.com/TrevorBos/Weather-Dashboard",
      title: "Weather Dashboard"
    },
    {
      id: 7,
      src: runBuddy,
      demoLink: "https://trevorbos.github.io/Run-Buddy-M1/",
      codeLink: "https://github.com/TrevorBos/Run-Buddy-M1",
      title: "Run Buddy"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-purple-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work below!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, title }) => (
            <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="mt-4 text-center">{title}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demoLink} target="_blank" rel="noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={codeLink} target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
