"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from "@/app/components/footer";
import Image from 'next/image';

export default function Home() {
  return (
    <>


      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-50 text-gray-800 p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl  font-bold mb-4">
          Consent Based  
          <br/>
            <span className="text-emerald-600">Secure Healthcare Management</span>
          </h1>
          <p className="text-lg mb-8">
          Centralised Health Record Management: Access, manage, and share your health records anytime, anywhere, eliminating the need for physical documents and ensuring continuity of care.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/services">
              <button className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 transition duration-300">
                Get Services
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <Image src="/firstpage.png" height={800} width={800} alt="Doctor illustration" className="w-[80%]  mx-auto" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white p-4 rounded-lg shadow-lg absolute bottom-10 right-10 max-w-xs"
      >
        <p className="font-semibold mb-2">1520+ Active Clients</p>
        <ul className="text-sm">
          <li>✓ Get 20% off on every 1st month</li>
          <li>✓ Expert Doctors</li>
        </ul>
      </motion.div>

      <Footer />
    </>
  );
}