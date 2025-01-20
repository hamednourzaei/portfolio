import React, { useState } from "react";
import Navbar from "./Navbar";
import { ImCross } from "react-icons/im";


const Projects = () => {
  const [modalValue, setModalValue] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Employee Task Management System",
      description:
        "A responsive task management system where admins can assign tasks to employees, with individual dashboards for better task tracking.",
      technologies: ["React", "Context API", "Tailwind CSS", "LocalStorage", "CSS"],
      features: [
        "Admin dashboard for task assignment",
        "Employee dashboard to view assigned tasks",
        "Responsive design for all devices",
        "Login functionality using localStorage",
        "State management with Context API",
      ],
   
      github: "https://github.com/Code-with-Sahani/Employee-Task-Management-System",
    },
    {
      title: "Optical Character Recognition System",
      description:
        "A system that extracts text from images using OCR technology, with features for text editing and saving.",
      technologies: ["React", "OCR API", "Tailwind CSS", "HTML", "CSS"],
      features: [
        "Extract text from uploaded images",
        "Real-time text recognition using OCR technology",
        "Editable extracted text with options to modify",
        "Save extracted text locally for future use",
        "Supports multiple image formats like JPEG, PNG, etc.",
      ],
    
      github: "https://github.com/Code-with-Sahani/Optical-Character-Recognition-System",
    },
    {
      title: "Optical Character Recognition System",
      description:
        "A system that extracts text from images using OCR technology, with features for text editing and saving.",
      technologies: ["React", "OCR API", "Tailwind CSS", "HTML", "CSS"],
      features: [
        "Extract text from uploaded images",
        "Real-time text recognition using OCR technology",
        "Editable extracted text with options to modify",
        "Save extracted text locally for future use",
        "Supports multiple image formats like JPEG, PNG, etc.",
      ],
    
      github: "https://github.com/Code-with-Sahani/Optical-Character-Recognition-System",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-10 px-5 py-20">
        <h1 className="w-full p-5 text-3xl font-bold text-gray-100 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-7xl justify-center items-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer border-2 border-gray-200 bg-gray-800 shadow-lg w-full h-[250px] sm:h-[300px] rounded-xl flex flex-col justify-between items-center p-6 group animate-fadeAndBounce"
            >
              <div className="w-full flex flex-col justify-start items-start">
                <h1 className="text-white font-semibold text-lg ">
                  {item.title}
                </h1>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {item.description}
                </p>
              </div>
              <div className="w-full flex justify-between items-center mt-6">
                <a
                  href={item.github}
                  className="p-2 bg-blue-600 text-white font-semibold rounded-lg group-hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                <button
                  className="p-2 bg-purple-600 text-white font-semibold rounded-lg group-hover:bg-purple-700 transition duration-300"
                  onClick={() => {
                    setSelectedProject(item);
                    setModalValue(true);
                  }}
                >
                  View Details
                </button>
                
              </div>
            </div>
          ))}
        </div>

        {/* Details Modal */}
        {modalValue && selectedProject && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">
                  {selectedProject.title}
                </h1>
                <ImCross
                  className="cursor-pointer text-2xl"
                  onClick={() => setModalValue(false)}
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  Description
                </h2>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
