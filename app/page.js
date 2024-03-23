"use client"
import { useRouter } from "next/navigation";
import { ArrowRightIcon, UserCircleIcon, LockClosedIcon, ChatIcon } from '@heroicons/react/solid';

export default function Home() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/register');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleLearnMoreClick = () => {
    router.push('/about');
  };

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500">
      <main className="flex flex-col items-center justify-center px-20 text-center mt-20">
        <img src="/vecteezy_family-health-insurance_16390596.png" alt="SecureHealth Logo" className="h-56 mb-8" />

        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to <span className="text-yellow-400">SecureHealth</span> Management
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-100">
          Your Privacy, Our Promise
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button onClick={handleSignUpClick} className="card bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 rounded-lg p-6 text-white shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
            <UserCircleIcon className="h-12 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold">Register Now</h3>
            <p>Join SecureHealth Management.</p>
          </button>

          <button onClick={handleLoginClick} className="card bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-lg p-6 text-white shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
            <LockClosedIcon className="h-12 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold">Login</h3>
            <p>Already have an account? Log in here.</p>
          </button>

          <button onClick={handleContactClick} className="card bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-lg p-6 text-white shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
            <ChatIcon className="h-12 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold">Contact Us</h3>
            <p>Have questions? Reach out to us.</p>
          </button>

          <button onClick={handleLearnMoreClick} className="card bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 rounded-lg p-6 text-white shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
            <ArrowRightIcon className="h-12 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold">Learn More</h3>
            <p>Find out more about SecureHealth.</p>
          </button>
        </div>
      </main>
    </div>
  );
}
