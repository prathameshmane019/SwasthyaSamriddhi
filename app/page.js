
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500">
        <main className="flex flex-col items-center justify-center px-8 md:px-16 lg:px-32 text-center mt-10 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Your Centralised Health Record Management System</h1>
          <p className="text-lg md:text-xl text-white mb-8">Your Privacy, Our Promise</p>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose SwasthyaSamriddhi?</h2>
        
            <p className="text-lg text-gray-700">Centralised Health Record Management: Access, manage, and share your health records anytime, anywhere, eliminating the need for physical documents and ensuring continuity of care.<br></br>

Secure & Confidential: We prioritize the highest standards of data protection and privacy with robust encryption, secure servers, and strict adherence to healthcare regulations like HIPAA, ensuring the confidentiality and integrity of your health information.<br></br>

Equitable Access to Healthcare: We are dedicated to bridging the healthcare gap by providing our services to every individual, especially in rural areas, empowering them with access to quality healthcare services and resources.<br></br>
</p></div>
      </section>

      <section className="relative h-[80vh] py-20 mt-10">
        <img src="/bg-14.svg" alt="Illustration" className="absolute inset-0 object-cover  h-[70%] mx-auto  " />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Us</h2>
          <p className="text-lg text-gray-700">Be Part of the Future of Healthcare: Join our growing community, explore our innovative services, and experience the future of healthcare with SwasthyaSamriddhi. Sign up today, stay connected, and take the first step towards empowered, personalized, and seamless healthcare access across India.
          </p>
        </div>
      </section>

    </>
  );
}
