"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { LogoutIcon } from '@heroicons/react/solid';

const UserSidebar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');
  const { data: session } = useSession();

  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  return (
    <div className="bg-gradient-to-br from-green-500 to-green-800 text-white h-[100vh] w-1/4 flex flex-col justify-between backdrop-blur-lg border border-green-900 rounded-md">
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
        <button onClick={handleLogout} className="flex items-center justify-center block py-2 px-4 rounded-md mt-4 bg-red-500 text-white">
          <LogoutIcon className="w-6 h-6 mr-2" /> Logout
        </button></div>
      <div className="p-4">
        <p className="text-xs">&copy; 2024 User Dashboard</p>
      </div>
    </div>
  );
};

export default UserSidebar;
