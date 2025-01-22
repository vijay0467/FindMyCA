import React, { useState } from 'react';
import 'aos/dist/aos.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[40vh] bg-contain bg-center rounded-[30px] overflow-hidden text-white mx-auto mt-3"
        style={{
          backgroundImage: `url('bg3.jpg')`, // Add relevant background image
          width: '80%',
          borderRadius: '50px',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-md mx-auto">
          <h1 className="text-4xl font-bold transition-opacity duration-1000 opacity-0 animate-fadeInUp mb-4">
            Contact Us
          </h1>
          <p className="mt-1 text-lg transition-opacity duration-1000 opacity-0 animate-fadeInUp delay-500">
            We would love to hear from you. Please fill out the form below to get in touch with us.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-center text-3xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg border border-gray-400 animate-fadeInUp">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center mt-6">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition-all">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Our Office Section */}
      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center text-3xl font-bold mb-6">Our Office</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4 animate-fadeInLeft">
              <img src="bg2.jpg" alt="Our Office" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4 animate-fadeInRight">
              <p className="text-lg leading-relaxed">
                Visit our office at the heart of the city. We are located at 123 Main Street, City, Country. Our office
                is open from Monday to Friday, 9 AM to 5 PM. Feel free to drop by for a consultation or any inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
          <p className="text-lg mb-6">Stay connected with us through social media.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <i className="fab fa-facebook-f text-3xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors duration-300">
              <i className="fab fa-linkedin-in text-3xl"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;