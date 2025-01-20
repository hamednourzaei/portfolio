import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#1e1e1e] via-gray-900 to-[#1d1d1d] text-gray-200 z-50 shadow-lg">
            <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center py-4">
                {/* Brand */}
                <div className="text-2xl font-bold text-gray-200 hover:text-gray-400 transition duration-300">
                    <Link to="/">My Portfolio</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {['Home', 'Skills', 'Projects', 'Certification', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-lg text-gray-200 hover:text-gray-400 relative group transition duration-300"
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-200 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden text-gray-200 p-2 rounded-full hover:bg-gray-700 hover:text-white transition duration-300"
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

            {/* Mobile Menu */}
            <div
                className={`md:hidden ${
                    isMenuOpen ? 'max-h-60' : 'max-h-0'
                } overflow-hidden bg-gradient-to-r from-[#1e1e1e] via-gray-900 to-[#1d1d1d] transition-all duration-500`}
            >
                {['Home', 'Skills', 'Projects', 'Certification', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        className="block text-lg text-gray-200 hover:bg-gray-700 hover:text-white px-6 py-3 transition duration-300"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
