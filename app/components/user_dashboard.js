"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react'; // Import useSession hook and signOut function

const UserSidebar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');
  const { data: session } = useSession(); // Get session data using useSession hook

  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);

  const handleLogout = async () => {
    await signOut(); // Call the signOut function to sign out the user
    router.push('/login'); // Redirect to the home page after logout
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-1/4 flex flex-col justify-between sticky top-0">
      <div className="p-4">
        <h2 className="text-xl font-semibold">User Dashboard</h2>
        <div className="flex items-center mb-4">
          <p className="text-lg font-medium">{session ? `ID: ${session.user.id}` : 'Loading...'}</p>
        </div>
        <nav>
          <Link href={{ pathname: '/user/', query: { id: session ? session.user.id : '' } }} className={`block py-2 px-4 rounded-md ${activeMenu === '/user/profile' ? 'bg-blue-600' : ''}`} onClick={() => setActiveMenu('/user/profile')}>Profile
          </Link>
          <Link href={{ pathname: '/user/records', query: { id: session ? session.user.id : '' } }} className={`block py-2 px-4 rounded-md ${activeMenu === '/user/records' ? 'bg-blue-600' : ''}`} onClick={() => setActiveMenu('/user/records')}>Records
          </Link>
        </nav>
        <button onClick={handleLogout} className="block py-2 px-4 rounded-md mt-4 bg-red-500 text-white">Logout</button>
      </div>
      <div className="p-4">
        <p className="text-xs">&copy; 2024 User Dashboard</p>
      </div>
    </div>
  );
};

export default UserSidebar;
