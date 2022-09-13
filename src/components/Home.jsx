import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-purple-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack Developer!
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have almost one year of experiece creating and designing software.
            Currently, I get the most passionate about using specific
            technologies such as React, Tailwind, NodeJs, and MYSQL.
          </p>
          <div>
            <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-800 cursor-pointer text-white">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
