import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me!</p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          necessitatibus, blanditiis aperiam doloribus corporis quibusdam
          architecto eligendi, dolores eos, sint modi ab ducimus quo nemo.
          Corrupti itaque adipisci architecto voluptate aspernatur velit quam,
          molestias, cupiditate a, repellendus quidem voluptatibus.
          Perspiciatis, libero. Laboriosam quidem animi, saepe ipsa quos
          consectetur deserunt sunt!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          qui cumque, ipsa incidunt vitae quisquam illo natus at culpa voluptas
          quo, beatae ratione accusamus iusto cupiditate illum. Voluptatem
          nesciunt velit, voluptates sint ipsum cum ratione iste qui quidem
          maxime aspernatur ut temporibus esse deserunt animi facilis officia
          pariatur amet illo.
        </p>
      </div>
    </div>
  );
};

export default About;
