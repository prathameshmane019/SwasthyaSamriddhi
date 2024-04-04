"use client"
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

const AdminDashboard = ({ admin }) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');
  const { data: session } = useSession();

  // Update active menu based on route change
  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);

  // Logout function using NextAuth.js signOut
  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/'); // Redirect to the home page after logout
  };

  return (
    <div className="bg-gray-800 text-white h-[100vh] w-1/4 flex flex-col justify-between">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white rounded-full p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-3.464 6.5A5.485 5.485 0 002 13.5C2 15.985 5.134 19 10 19s8-3.015 8-5.5a5.485 5.485 0 00-4.536-5.5A4 4 0 0010 2zM6.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 16c-3.866 0-7-2.015-7-4.5S6.134 7 10 7s7 2.015 7 4.5S13.866 16 10 16zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-lg font-medium">{admin ? `ID: ${admin.id}` : 'Loading...'}</p>
        </div>
        <nav>
          <Link href="/admin" className={`block py-2 px-4 rounded-md ${activeMenu === '/admin' ? 'bg-blue-600' : ''}`} onClick={() => setActiveMenu('/')}>Dashboard
          </Link>
          <Link href="/admin/users" className={`block py-2 px-4 rounded-md ${activeMenu === "/admin/users" ? 'bg-blue-600' : ''}`} onClick={() => setActiveMenu("/admin/uesrs")}>Users
          </Link>
          <Link href="/admin/doctor" className={`block py-2 px-4 rounded-md ${activeMenu === '/doctor/doctor' ? 'bg-blue-600' : ''}`} onClick={() => setActiveMenu('/admin/doctor')}>Doctors
          </Link>
        </nav>
      </div>
      <div className="p-4">
        {session ? (
          <button onClick={handleLogout} className="text-xs bg-red-500 text-white px-4 py-2 rounded-md">Logout</button>
        ) : (
          <p className="text-xs">&copy; 2024 Admin Dashboard</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
