import React, { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating a successful form submission
    setStatus({ type: 'success', message: 'Your message has been sent successfully!' });

    setTimeout(() => {
      setStatus(null);
    }, 2000);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="w-full  bg-gradient-to-r from-gray-700 animate-fadeAndBounce via-gray-800 to-gray-700 min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 pt-10">
      <Navbar />
      <section className="w-1/2 p-2  bg-gray-800 rounded-xl drop-shadow-lg ">
        <h2 className="text-3xl font-semibold text-white text-center mb-8 p-5">Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex font-semibold flex-col mb-4">
            <label htmlFor="name" className="text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-gray-600 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>

          {status && (
            <div
              className={`mt-4 p-3 text-center text-white rounded-md ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
            >
              {status.message}
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
