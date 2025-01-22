import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] bg-contain rounded-3xl bg-center text-white animate-zoomOut mx-auto mt-2 overflow-hidden"
        style={{
          backgroundImage: `url('home-bg.jpg')`,
          width: "90%", // Ensure the path is correct
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold animate-slideIn">
            Welcome to FindMyCA
          </h1>
          <p className="mt-4 text-xl animate-slideIn delay-500">
            Your trusted platform for connecting with the best Chartered Accountants worldwide.
          </p>
          <NavLink
            to="/about"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all animate-bounceIn delay-1000"
          >
            Learn More
          </NavLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4" style={{ width: "85%" }}>
          <h2 className="text-center text-3xl font-bold mb-6">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Certified Professionals",
                text: "We ensure that all our listed CAs are certified and highly qualified to handle your financial needs.",
                icon: "✅",
              },
              {
                title: "Personalized Matches",
                text: "Get matched with a Chartered Accountant that suits your specific requirements and preferences.",
                icon: "🔍",
              },
              {
                title: "Secure Platform",
                text: "Your data is safe with us. We prioritize security and confidentiality in all our interactions.",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200 animate-slideIn"
                style={{
                  animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <div className="text-4xl text-blue-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4" style={{ width: "85%" }}>
          <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Tax Consulting",
                text: "Expert advice on tax planning and compliance to help you minimize your tax liabilities.",
                image: "/src/assets/tc.jpg", // Ensure the path is correct
              },
              {
                title: "Audit & Assurance",
                text: "Comprehensive audit and assurance services to ensure your financial statements are accurate.",
                image: "/src/assets/aa.jpg", // Ensure the path is correct
              },
              {
                title: "Financial Planning",
                text: "Personalized financial planning services to help you achieve your financial goals.",
                image: "/src/assets/fp.png", // Ensure the path is correct
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200 animate-slideIn"
                style={{
                  animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

 

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-4" style={{ width: "85%" }}>
          <h2 className="text-center text-3xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "John Doe",
                feedback:
                  "FindMyCA connected me with an amazing CA who helped me sort out my taxes seamlessly. Highly recommend!",
              },
              {
                name: "Jane Smith",
                feedback:
                  "The platform is easy to use, and the CAs I’ve worked with were very professional and knowledgeable.",
              },
              {
                name: "Rahul Mehta",
                feedback:
                  "A reliable service that made finding a trustworthy CA a hassle-free experience for my small business.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200 animate-slideIn"
                style={{
                  animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <p className="italic text-gray-700 mb-4">
                  "{testimonial.feedback}"
                </p>
                <h4 className="font-bold text-lg text-blue-500">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Our Team Section */}
<section className="py-12">
  <div className="container mx-auto px-4" style={{ width: "85%" }}>
    <h2 className="text-center text-3xl font-bold mb-6">Meet Our Team</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          name: "Alice Johnson",
          role: "CEO",
          image: "/src/assets/t1.webp", // Ensure the path is correct
        },
        {
          name: "Bob Williams",
          role: "CTO",
          image: "/src/assets/t2.jpg", // Ensure the path is correct
        },
        {
          name: "Charlie Brown",
          role: "CFO",
          image: "/src/assets/t3.jpg", // Ensure the path is correct
        },
      ].map((teamMember, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-90 hover:shadow-md"
          style={{
            animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
          }}
        >
          <img
            src={teamMember.image}
            alt={teamMember.name}
            className="rounded-full w-40 h-40 mx-auto mb-4" // Increased size to w-40 h-40
          />
          <h3 className="font-bold text-lg mb-2 text-center">
            {teamMember.name}
          </h3>
          <p className="text-gray-600 text-center">{teamMember.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Blog Section */}
      <section className="py-12">
        <div className="container mx-auto px-4" style={{ width: "85%" }}>
          <h2 className="text-center text-3xl font-bold mb-6">
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding Tax Deductions",
                excerpt:
                  "Learn about the various tax deductions available and how you can take advantage of them.",
                image: "/src/assets/td.png", // Ensure the path is correct
              },
              {
                title: "Top Financial Planning Tips",
                excerpt:
                  "Discover the best financial planning tips to help you achieve your financial goals.",
                image: "/src/assets/fp1.jpg", // Ensure the path is correct
              },
              {
                title: "How to Choose the Right CA",
                excerpt:
                  "Find out what to look for when choosing a Chartered Accountant for your business.",
                image: "/src/assets/caa.png", // Ensure the path is correct
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200 animate-slideIn"
                style={{
                  animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg mb-3">{blog.title}</h3>
                <p className="text-gray-600">{blog.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-12 bg-gradient-to-r bg-purple-300 text-white text-center animate-zoomOut mx-auto mb-2"
        style={{ width: "90%", borderRadius: "40px" }}
      >
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-4">
            Have Questions? Get in Touch
          </h3>
          <p className="text-lg mb-6">
            We are here to help you with any queries you may have.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-8 py-4 bg-orange-400 text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all animate-bounceIn"
          >
            Contact Us
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HomePage;
