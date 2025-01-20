import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="w-full h-screen bg-cover bg-center flex flex-col bg-gradient-to-r from-gray-700 via-gray-800 to-gray-800 pt-20">
            <Navbar />

            <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-16 px-6">
                <div className="group w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-900 shadow-lg transition-transform duration-500 hover:scale-110 relative">
                    <img
                        src="/Images/profile_img.png"
                        alt="Profile"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-accent opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-dark-text text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        Hello, I'm Hamed!
                    </div>
                </div>

                <div className="text-center md:text-left flex flex-col items-center md:items-start gap-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dark-muted via-dark-hover to-dark-muted animate-gradient">
                        Frontend Developer
                    </h1>
                    <p className="text-lg md:text-xl text-dark-muted max-w-2xl leading-relaxed">
                        Crafting seamless digital experiences with modern technologies like{' '}
                        <span className="text-blue-600 font-medium">React</span>,{' '}
                        <span className="text-teal-600 font-medium">Redux</span>, and{' '}
                        <span className="text-purple-600 font-medium">Tailwind CSS</span>. Specializing in building
                        responsive, dynamic, and visually stunning user interfaces.
                    </p>
                    <a
                        href="#portfolio"
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-dark-muted via-dark-hover to-dark-muted text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500"
                    >
                        View My Work
                    </a>
                </div>
            </div>

            <div className="text-center py-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 z-50 shadow-md border-b border-gray-600">
                © 2025 Hamed Nourzaie All rights reserved.
            </div>
        </div>
    );
};

export default Home;
