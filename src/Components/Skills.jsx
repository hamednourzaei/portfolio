import React from 'react';
import Navbar from './Navbar';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const Skills = () => {
  const skills = [
    { title: 'HTML', icon: <FaHtml5 className="text-6xl text-orange-500" />, percentage: 90 },
    { title: 'CSS', icon: <FaCss3Alt className="text-6xl text-blue-500" />, percentage: 80 },
    { title: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-3xl text-teal-400" />, percentage: 80 },
    { title: 'JavaScript', icon: <IoLogoJavascript className="text-6xl text-yellow-400" />, percentage: 85 },
    { title: 'React', icon: <FaReact className="text-6xl text-cyan-400" />, percentage: 90 },
    { title: 'Redux', icon: <SiRedux className="text-6xl text-purple-500" />, percentage: 80 },
  ];

  // Data for Line Chart
  const data = {
    labels: skills.map(skill => skill.title),
    datasets: [
      {
        label: 'Skill Percentage',
        data: skills.map(skill => skill.percentage),
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
        pointBackgroundColor: '#4caf50',
      },
    ],
  };

  // Options for Line Chart
  const options = {
    scales: {
      y: {
        min: 0, // تنظیم حداقل مقدار محور Y به 0
        max: 100, // تنظیم حداکثر مقدار محور Y به 100
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-800 pt-20">
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-8 px-5 py-20">
        <h1 className="w-full bg-gradient-to-r from-gray-700 animate-fadeAndBounce via-gray-800 to-gray-800 text-4xl font-extrabold text-gray-100 text-center" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
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
              className="flex animate-pulseIcon flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-700 to-purple-600 p-6 rounded-xl shadow-lg shadow-indigo-800/50 w-28 sm:w-36 h-36 sm:h-40 duration-900 hover:scale-10 hover:rotate-9 hover:shadow-2xl hover:shadow-indigo-700/50 animate-fadeIn"
            >
              <div className="animate-bounceIcon">{skill.icon}</div>
              <h2 className="text-gray-100 text-base sm:text-lg font-semibold mt-4 animate-fadeIn">
                {skill.title}
              </h2>
              
              {/* Progress bar for skill percentage */}
              <div className="w-full h-2 mt-4 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Line Chart */}
        <div className="mt-10 w-full max-w-7xl">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
