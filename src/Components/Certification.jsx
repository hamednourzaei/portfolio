import React from 'react';
import Navbar from './Navbar';

const Certification = () => {
  const certifications = [
    {
      title: 'ReactJs: Complete Guide for Frontend',
      link: 'https://mftplus.com/verifycertificate?auto=1&nationalcode=105868470490&code=1760016',
    },
    {
      title: 'CSS Complete Course for Beginners',
      link: 'https://www.udemy.com/course/30-css-exercises/?srsltid=AfmBOoo21XyyeerXHMMeutGr5gC1IbDs5O-7754texptc04_E4ujrJTH&couponCode=LETSLEARNNOW',
    },
    {
      title: 'Masters Classes for Web Designing Course (HTML, CSS, JS & SEO)',
      link: 'https://www.udemy.com/course/master-classes-for-web-design-course-html-css-js-seo/?srsltid=AfmBOopbLdk9b1fogac-2EnykhZX4K2wbOCzKCIslrUgUUg91eleNSTv',
    },
    {
      title: 'Front End Web Development Niche Website Complete Project',
      link: 'https://www.udemy.com/course/front-end-web-development-niche-website-complete-project/?srsltid=AfmBOopJtuvf4Bc69oh36GwaD1lw_mr7u3Nw0wU5rwFeSibKLyOPSt7P&couponCode=LETSLEARNNOW',
    },
    {
      title: 'Next.js 15 & React - The Complete Guide',
      link: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/?couponCode=LETSLEARNNOW',
    },
    {
      title: 'Git from Basics to Advanced: Practical Guide for Developers',
      link: 'https://www.udemy.com/course/git-learnit/?couponCode=LETSLEARNNOW',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-8 px-5 py-20">
      <h1
  className="w-full border-b p-5 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-yellow-500 via-red-500 to-blue-500 animate-bg text-center"
  style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
>
  Certifications
</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 shadow-md rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition duration-300 animate-fadeAndBounce"
            >
              <h2 className="text-white font-semibold text-lg mb-3">{cert.title}</h2>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-4 py-2 text-sm text-white rounded-md ${cert.title === 'ReactJs: Complete Guide for Frontend' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'}`}
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
