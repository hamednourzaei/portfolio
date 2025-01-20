import React from 'react';
import Navbar from './Navbar';

const Certification = () => {
  const certifications = [
    {
      title: 'CSS Complete Course for Beginners',
      link: 'https://www.udemy.com/certificate/UC-e9155361-5653-4000-b620-01f4ede4c582/',
    },
    {
      title: 'ReactJs: Complete Guide for Frontend',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-26537437-3b78-4449-a99c-677c67922204.jpg',
    },
    {
      title: 'Masters Classes for Web Designing Course (HTML, CSS, JS & SEO)',
      link: 'https://www.udemy.com/certificate/UC-1b967330-9a05-4c5d-b04c-42a12296a977/',
    },
    {
      title: 'Front End Web Development Niche Website Complete Project',
      link: 'https://www.udemy.com/certificate/UC-67e5581b-6c91-4267-a13d-b5f4a4e0e3c5/',
    },
    {
      title: 'Python Programming - From Basics to Advanced Level',
      link: 'https://www.udemy.com/certificate/UC-4e074813-15c7-4e6a-8977-6c06256ef62a/',
    },
    {
      title: 'Machine Learning From Basic to Advanced',
      link: 'https://www.udemy.com/certificate/UC-46a78cd0-e03f-4e99-a44c-95a3c466f1df/',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-8 px-5 py-20">
        <h1 className=" w-full text-3xl font-bold text-gray-800">Certifications</h1> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-700 mb-3">{cert.title}</h2>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
