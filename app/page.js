
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500">
        <main className="flex flex-col items-center justify-center px-8 md:px-16 lg:px-32 text-center mt-10 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Our Healthcare Platform</h1>
          <p className="text-lg md:text-xl text-white mb-8">Empowering healthcare providers and improving patient care</p>
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow-lg uppercase tracking-wide hover:bg-blue-600 hover:text-white transition duration-300">Get Started</button>
        </main>
        </div>
        <div className="custom-shape-divider-bottom-1713021709">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>  
     
<section className="relative h-[80vh] py-20 mt-20">
        <img src="/bg-18.svg" alt="Illustration" className="absolute inset-0 object-cover  h-[80%] mx-auto  " />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The Problems We're Solving</h2>
          <ul className="text-lg text-gray-700">
            <li className="mb-2">Medical Fitness Exam Fraud</li>
            <li className="mb-2">Hospital Data Integrity</li>
            <li className="mb-2">Survey Efficiency</li>
            <li className="mb-2">Insurance Fraud</li>
          </ul> </div>
      </section>

      <section className="relative h-[80vh] py-20 mt-10">
        <img src="/bg-14.svg" alt="Illustration" className="absolute inset-0 object-cover  h-[70%] mx-auto  " />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-lg text-gray-700">The solution enhances healthcare by addressing these key challenges. It provides a comprehensive platform that tackles medical fitness exam fraud, ensures hospital data integrity, optimizes survey efficiency, and mitigates insurance fraud. By leveraging advanced technologies and robust security measures, our platform empowers healthcare organizations to overcome these obstacles effectively.
          </p>
        </div>
      </section>

    </>
  );
}
