import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[40vh] bg-cover bg-center rounded-[30px] overflow-hidden text-white mx-auto mt-3"
        style={{
          backgroundImage: `url('bg1.jpg')`, width: "80%", borderRadius: "50px" // Add relevant background image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-md mx-auto">
          <h1 className="text-4xl font-bold transition-opacity duration-1000 opacity-0 animate-fadeIn">
            About FindMyCA
          </h1>
          <p className="mt-4 text-lg transition-opacity duration-1000 opacity-0 animate-fadeIn delay-1000">
            Your trusted platform for connecting individuals and businesses with the best Chartered Accountants
            worldwide.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 " data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-6 transition-colors duration-300">Our Mission</h2>
          <div className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="transition-colors duration-300">
              At <strong>FindMyCA</strong>, our mission is to simplify the process of finding reliable Chartered
              Accountants for individuals and businesses alike. We aim to provide a seamless platform to connect clients
              with certified professionals who can guide them through tax filings, audits, and financial planning.
            </p>
            <p className="mt-4 transition-colors duration-300">
              With a focus on transparency and quality, we strive to become the leading platform for accessing trusted
              financial expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300">Why Choose FindMyCA?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Certified Professionals',
                text: 'We ensure that all our listed CAs are certified and highly qualified to handle your financial needs.',
                icon: '✅',
              },
              {
                title: 'Personalized Matches',
                text: 'Get matched with a Chartered Accountant that suits your specific requirements and preferences.',
                icon: '🔍',
              },
              {
                title: 'Secure Platform',
                text: 'Your data is safe with us. We prioritize security and confidentiality in all our interactions.',
                icon: '🔒',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg animate-zoomIn hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-3 hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 hover:text-blue-600 transition-colors duration-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 " data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-6xl ">
          <h2 className="text-center text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'John Doe',
                feedback:
                  'FindMyCA connected me with an amazing CA who helped me sort out my taxes seamlessly. Highly recommend!',
              },
              {
                name: 'Jane Smith',
                feedback:
                  'The platform is easy to use, and the CAs I’ve worked with were very professional and knowledgeable.',
              },
              {
                name: 'Rahul Mehta',
                feedback:
                  'A reliable service that made finding a trustworthy CA a hassle-free experience for my small business.',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg animate-zoomIn hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <p className="italic text-gray-700 mb-4 hover:text-blue-600 transition-colors duration-300">"{testimonial.feedback}"</p>
                <h4 className="font-bold text-lg text-blue-500 hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 bg-purple-700 text-white text-center animate-zoomOut mb-2 mx-auto" style={{ width: "80%", borderRadius: "50px" }}>
        <div className="container mx-auto px-4 max-w-md">
          <h3 className="text-3xl font-bold mb-4 hover:text-purple-400 transition-colors duration-300">
            Get Started with FindMyCA Today!
          </h3>
          <p className="text-lg mb-6 hover:text-purple-400 transition-colors duration-300">
            Whether you’re an individual or a business, we have the perfect Chartered Accountant for you.
          </p>
          <a
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-all"
          >
            Join Now
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutUs;