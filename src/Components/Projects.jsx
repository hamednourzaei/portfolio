import React, { useState } from 'react';
import Navbar from './Navbar';
import { ImCross } from "react-icons/im";
import ImgSlider from './ImgSlider';

const Projects = () => {
   const [modalValue, setModalValue] = useState(false);
   const [imageModalValue, setImageModalValue] = useState(false);
   const [selectedProject, setSelectedProject] = useState(null);

   const projects = [
      {
         title: "Employee Task Management System",
         description: "A responsive task management system where admins can assign tasks to employees, with individual dashboards for better task tracking.",
         technologies: ["React", "Context API", "Tailwind CSS", "LocalStorage", "CSS"],
         features: [
            "Admin dashboard for task assignment",
            "Employee dashboard to view assigned tasks",
            "Responsive design for all devices",
            "Login functionality using localStorage",
            "State management with Context API",
         ],
         images: ["/Images/ems1.png", "/Images/ems2.png", "/Images/ems3.png"],
         github: "https://github.com/Code-with-Sahani/Employee-Task-Management-System",
      },
      {
         title: "Optical Character Recognition System",
         description: "A system that extracts text from images using OCR technology, with features for text editing and saving.",
         technologies: ["React", "OCR API", "Tailwind CSS", "HTML", "CSS"],
         features: [
            "Extract text from uploaded images",
            "Real-time text recognition using OCR technology",
            "Editable extracted text with options to modify",
            "Save extracted text locally for future use",
            "Supports multiple image formats like JPEG, PNG, etc.",
         ],
         images: ["/Images/OCR1.png", "/Images/OCR2.png"],
         github: "https://github.com/Code-with-Sahani/Optical-Character-Recognition-System",
      },
   ];

   return (
      <div className="w-full min-h-screen bg-gray-100">
         <Navbar />
         <div className="flex flex-col justify-start items-center gap-4 px-5 py-20">
         <h1 className="  w-full text-3xl font-bold text-gray-800">Projects</h1> 

            <div className="w-full flex flex-wrap justify-start items-center gap-6 px-4">
               {projects.map((item, index) => (
                  <div
                     key={index}
                     className="cursor-pointer border-2 border-gray-200 bg-white shadow-lg w-full sm:w-[350px] md:w-[400px] h-[200px] rounded-xl flex flex-col justify-between items-center p-4 group hover:scale-100 transition-transform duration-300"
                  >
                     <div className="w-full flex flex-col justify-start items-start">
                        <h1 className="text-black font-semibold text-lg">{item.title}</h1>
                        <p className="text-gray-600 text-sm text-ellipsis line-clamp-3 mt-1">{item.description}</p>
                     </div>

                     <div className="w-full flex justify-between items-center mt-4">
                        <a
                           href={item.github}
                           className="p-2 text-center bg-blue-600 text-white font-semibold rounded-lg group-hover:bg-blue-700"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           View on GitHub
                        </a>
                        <button
                           className="p-2 bg-blue-600 text-white font-semibold rounded-lg group-hover:bg-blue-700"
                           onClick={() => {
                              setSelectedProject(item);
                              setModalValue(true);
                           }}
                        >
                           View Details
                        </button>
                        <button
                           className="p-2 bg-gray-600 text-white font-semibold rounded-lg group-hover:bg-gray-700"
                           onClick={() => {
                              setSelectedProject(item);
                              setImageModalValue(true);
                           }}
                        >
                           View Images
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
                        <h1 className="text-2xl font-semibold">{selectedProject.title}</h1>
                        <ImCross
                           className="cursor-pointer text-2xl"
                           onClick={() => setModalValue(false)}
                        />
                     </div>

                     <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-700">Description</h2>
                        <p className="text-gray-600">{selectedProject.description}</p>

                        <h2 className="text-lg font-semibold text-gray-700 mt-4">Features</h2>
                        {selectedProject.features.map((feature, ind) => (
                           <p key={ind} className="text-gray-600">{feature}</p>
                        ))}

                        <h2 className="mt-4 text-lg font-semibold text-gray-700">Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                           {selectedProject.technologies.map((tech, index) => (
                              <span
                                 key={index}
                                 className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-lg"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {/* Image Modal */}
            {imageModalValue && selectedProject && (
               <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                  <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
                     <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">Images of {selectedProject.title}</h1>
                        <ImCross
                           className="cursor-pointer text-2xl"
                           onClick={() => setImageModalValue(false)}
                        />
                     </div>

                     <div className="mt-4">
                        <ImgSlider image={selectedProject.images} />
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Projects;
