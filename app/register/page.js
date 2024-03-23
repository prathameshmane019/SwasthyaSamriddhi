import Link from 'next/link';
import { UserCircleIcon, BriefcaseIcon } from '@heroicons/react/solid';

const RegisterTypePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Register As</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/register/user" className="button flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <UserCircleIcon className="h-8 w-8 mr-2" />
            User
        </Link>
        <Link href="/register/doctor" className="button flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <BriefcaseIcon className="h-8 w-8 mr-2" />
            Doctor
        </Link>
      </div>
    </div>
  );
};

export default RegisterTypePage;
