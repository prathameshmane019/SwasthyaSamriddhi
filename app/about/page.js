import Footer from '@/app/components/footer';
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 leading-tight mb-4">About Us</h1>
            <p className="text-lg text-gray-600">Welcome to Swasthya Samrudhhi. Here&apos;s a brief overview of our project and what we aim to achieve.</p>
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
              <p className="text-gray-700">Empowering Every Individual with Access to Centralised Health Record Management.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Vision</h3>
              <p className="text-gray-700">Creating One Centralised Health Record Management System Across India.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Values</h3>
              <p className="text-gray-700">We believe in integrity, innovation, and inclusivity in all aspects of our work.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-16 lg:py-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">Visualizing Our Mission</h2>
        </div>
        <div className="mx-auto">
          <img className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg" src="/Medicine.gif" alt="Illustration 1" style={{ background: 'none' }} />
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-100 py-16 lg:py-20 flex items-center justify-center">
        <div className="mx-auto">
          <img className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg" src="/py.gif" alt="Illustration 1" style={{ background: 'none' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-8">Our Achievements</h2>
          <p className="text-lg text-gray-600">Here are some of our notable achievements and milestones in the healthcare industry.</p>
        </div>
      </div>

      {/* Illustration Section 2 */}
      <div className="bg-gray-800 py-16 lg:py-20 flex items-center justify-center rounded-b-3xl mb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">Our Journey So Far</h2>
        </div>
        <div className="mx-auto">
          <img className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg" src="/Pediatrician.gif" alt="Illustration 1" style={{ background: 'none' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
