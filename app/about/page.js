'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "./about.css";

const ScrollSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const beamRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const beam = beamRef.current;

      if (beam) {
        const moveX = (clientX / window.innerWidth) * 50;
        const moveY = (clientY / window.innerHeight) * 50;

        beam.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Beams animated background */}
      <div 
        ref={beamRef}
        className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary-200 opacity-50 bg-beams -z-10 pointer-events-none"
      />

      {/* Existing sections */}
      <motion.div className="py-16 lg:py-20" style={{ scale }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-1/2 mb-8 md:mb-0 text-dark">
              <motion.h2
                className="text-4xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Access to immediate cash
              </motion.h2>
              <p className="text-lg mb-6">
                Ease your risk of delayed payments and get paid what you're owed by insurance companies, on time!
              </p>
              <ul className="list-disc list-inside text-lg">
                <motion.li
                  whileHover={{ x: 10, color: '#22c55e' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Apply for KLAIM financing plan and get advance payments
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: '#22c55e' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  No need to wait for insurance companies to pay you in 90 days
                </motion.li>
              </ul>
            </div>
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src="/aboutus.png" alt="Cash stack" className="custom-image-size mx-auto rounded-lg" />

            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Vision section */}
      <motion.div className="py-16 lg:py-20" style={{ scale }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-1/2 mb-8 md:mb-0 text-dark">
              <motion.h2
                className="text-4xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Our Vision
              </motion.h2>
              <p className="text-lg mb-6">
              To create a unified healthcare platform that connects all hospitals across India, enabling seamless sharing of patient health records. By fostering collaboration and enhancing accessibility, our vision is to empower healthcare providers to deliver high-quality, personalized care to every patient, no matter their location, ensuring that medical information is accessible nationwide.
              .
              </p>
            </div>
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src="/vision.png" alt="Vision" className="w-full max-w-md mx-auto rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission section */}
      <motion.div className="py-16 lg:py-20" style={{ scale }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center justify-between"
          >
            <div className="md:w-1/2 mb-8 md:mb-0 text-dark">
              <motion.h2
                className="text-4xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Our Mission
              </motion.h2>
              <p className="text-lg mb-6">
              Our mission is to provide a robust and affordable Electronic Health Record (EHR) system to every hospital, including those in small cities and rural areas. We aim to improve the healthcare system's efficiency, accuracy, and security by offering a centralized solution that bridges the gap between urban and rural healthcare, ensuring that every patient receives the best possible care, no matter where they are.

              </p>
            </div>
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src="/mission1.png" alt="Mission" className="w-full max-w-md mx-auto rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Existing section - Simplify claim process */}
      <motion.div className="py-16 lg:py-20" style={{ scale }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center justify-between"
          >
            <div className="md:w-1/2 mb-8 md:mb-0 text-dark">
              <motion.h2
                className="text-4xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Simplify your claim process
              </motion.h2>
              <p className="text-lg mb-6">
                Easy-to-use platform that simplifies the painful process of claim management.
              </p>
              <ul className="list-disc list-inside text-lg">
                <motion.li
                  whileHover={{ x: 10, color: '#22c55e' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Streamlined and automated claim submission that eliminates human errors, saves time and hard-earned cash
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: '#22c55e' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Submit and resubmit claims without downloading, editing and re-uploading hundreds of xml files
                </motion.li>
              </ul>
            </div>
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src="/aboutus2.png" alt="Claim process" className="w-full max-w-md mx-auto rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollSection;
