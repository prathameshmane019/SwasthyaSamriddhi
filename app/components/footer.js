import React from 'react'
import Link from 'next/link'
const footer = () => {
  return (


    <footer className="bg-white rounded-t-3xl shadow dark:bg-gray-900 mx-0 mb-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-8" alt="SwasthyaSamridhhi Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SwasthyaSamridhhi</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline me-4 md:me-6">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">SwasthyaSamridhhi</a>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}

export default footer
