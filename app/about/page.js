
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 leading-tight mb-4">About Us</h1>
            <p className="text-lg text-gray-600">Welcome to Swasthya Samrudhhi. Here's a brief overview of our project and what we aim to achieve.</p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-8">Our Mission, Vision, and Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Mission</h3>
              <p className="text-gray-700">Our mission is to provide accessible and efficient healthcare solutions to everyone.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Vision</h3>
              <p className="text-gray-700">Our vision is to create a healthier and happier society by leveraging technology.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Values</h3>
              <p className="text-gray-700">We believe in integrity, innovation, and inclusivity in all aspects of our work.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">Visualizing Our Mission</h2>
          <div className="flex justify-center">
            <img className="w-full md:w-2/3 lg:w-1/2" src="/3226126_43071.svg" alt="Illustration 1" />
          </div>
        </div>
      </div>

      {/* Illustration Section 2 */}
      <div className="bg-gray-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">Our Journey So Far</h2>
          <div className="flex justify-center">
            <img className="w-full md:w-2/3 lg:w-1/2" src="/7775254_3719229.svg" alt="Illustration 2" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-8">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">"Swasthya Samrudhhi has transformed the way we approach healthcare. Their solutions are top-notch and user-friendly."</p>
              <p className="text-gray-900 font-semibold mt-4">- John Smith, CEO</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">"We've been using Swasthya Samrudhhi's services for years, and we couldn't be happier with the results. Highly recommended!"</p>
              <p className="text-gray-900 font-semibold mt-4">- Jane Doe, COO</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">"The team at Swasthya Samrudhhi goes above and beyond to meet our needs. We're extremely satisfied with their dedication and expertise."</p>
              <p className="text-gray-900 font-semibold mt-4">- Alice Johnson, CFO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-8">Have questions or want to learn more about our project? Contact us today!</p>
          <a href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default About;
