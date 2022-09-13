import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me!
          </p>
        </div>
        <p className="text-xl mt-10">
          My name is Trevor Bos. I just completed the UofT Coding Bootcamp. Now,
          I am looking for my first full-time job in this field. I have been
          working as a territory manager with Microsoft for the last two years
          and many customer service based jobs before that. My job has provided
          me valuable experience in working with people, collaborating as a
          team, and developing new ideas. I cannot say for sure what my big
          career goal is as the world is constantly changing and I try to stay
          in the now. However, I do know that I can provide a fresh perspective
          to every project i am a part of. I am open to challenges and look
          forward to constructive feedback to help me grow. I am open-minded and
          learn new things quickly. I am hoping to apply my skills in developing
          high-quality and unique products.
        </p>
        <br />
        <p className="text-xl">
          Outside of work, I enjoy immersing myself in nature; frequently
          finding myself winding through forest trails with my partner. I also
          enjoy a bit of friendly competition via card/ board games with friends
          and getting lost in the newest indie console game.
        </p>
      </div>
    </div>
  );
};

export default About;
