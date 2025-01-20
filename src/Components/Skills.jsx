import React from 'react';
import Navbar from './Navbar';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    { title: 'HTML', icon: <FaHtml5 className="text-6xl text-orange-500" /> },
    { title: 'CSS', icon: <FaCss3Alt className="text-6xl text-blue-500" /> },
    { title: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-6xl text-teal-400" /> },
    { title: 'JavaScript', icon: <IoLogoJavascript className="text-6xl text-yellow-400" /> },
    { title: 'React', icon: <FaReact className="text-6xl text-cyan-400" /> },
    { title: 'Redux', icon: <SiRedux className="text-6xl text-purple-500" /> },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-20">
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-8 px-5 py-20">
        <h1 className="w-full text-4xl font-extrabold text-gray-100 text-center" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
          My Skills
        </h1>
        <span className="text-lg text-gray-300 mt-2 text-center" style={{ textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)' }}>
          Technologies I am proficient in:
        </span>

        {/* Flex container with responsive wrapping */}
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-700 to-purple-600 p-6 rounded-xl shadow-lg shadow-indigo-800/50 w-28 sm:w-36 h-28 sm:h-32 transform transition duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-indigo-700/50 animate-fadeIn"
            >
              <div className="animate-bounceIcon">{skill.icon}</div>
              <h2 className="text-gray-100 text-base sm:text-lg font-semibold mt-4 animate-fadeIn">
                {skill.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
