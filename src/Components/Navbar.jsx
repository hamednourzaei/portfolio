import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 z-50 shadow-md border-b border-gray-600">
            <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center py-4">
                <div className="text-2xl font-bold text-dark-text hover:text-gray-400 transition duration-300">
                    <Link to="/">My Portfolio</Link>
                </div>

                <div className="hidden md:flex gap-8 items-center">
                    {['Home', 'Skills', 'Projects', 'Certification', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-lg text-dark-text hover:text-gray-400 relative group transition duration-300"
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-dark-text group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}
                </div>

                <button
                    className="md:hidden text-dark-text p-2 rounded-full hover:bg-gray-700 hover:text-white transition duration-300"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`md:hidden ${
                    isMenuOpen ? 'max-h-60' : 'max-h-0'
                } overflow-hidden bg-gradient-to-r from-dark-accent via-dark-secondary to-dark-accent transition-all duration-500`}
            >
                {['Home', 'Skills', 'Projects', 'Certification', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        className="block text-lg text-dark-text hover:bg-gray-700 hover:text-white px-6 py-3 transition duration-300"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
