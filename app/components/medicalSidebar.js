"use client"
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {  useSession } from 'next-auth/react';
import { LogoutIcon } from '@heroicons/react/solid';
import { Logout } from "../utils/logout";
// import {Tooltip} from "@nextui-org/tooltip";
import {Tooltip} from "@nextui-org/react";
const MedicalSidebar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');
  const { data: session } = useSession();
  const [medical,setMedical]=useState()
  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);
useEffect(()=>{
  if(session){
    setMedical(session?.user)
  }
},[session])
  const handleLogout = async () => {
    await Logout()
  };

  return (
    <div className="bg-gradient-to-br from-green-500 to-green-800 text-white h-[100vh] w-1/4 flex flex-col justify-between backdrop-blur-lg border border-green-900 rounded-md">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Medical Dashboard</h2>
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white rounded-full p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-3.464 6.5A5.485 5.485 0 002 13.5C2 15.985 5.134 19 10 19s8-3.015 8-5.5a5.485 5.485 0 00-4.536-5.5A4 4 0 0010 2zM6.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 16c-3.866 0-7-2.015-7-4.5S6.134 7 10 7s7 2.015 7 4.5S13.866 16 10 16zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-lg font-medium">{medical ? `ID: ${medical.id}` : 'Loading...'}</p>
        </div>
        <nav>
          <Link href="/medical/" className={`block py-2 px-4 rounded-md ${activeMenu === '/medical/' ? 'bg-blue-600' : ''}`} onClick={() => setActiveMenu('/medical/')}>Profile
          </Link>
          <Link href="/medical/patients" className={`block py-2 px-4 rounded-md ${activeMenu === '/medical/patients' ? 'bg-blue-600' : ''}`} onClick={() => setActiveMenu('/medical/patients')}>Patients
          </Link>
          <div className="p-4">
        {session ? (
         <button onClick={handleLogout} className="flex items-center justify-center block py-2 px-4 rounded-md mt-4 bg-red-500 text-white">
         <LogoutIcon className="w-6 h-6 mr-2" /> Logout
       </button>  ) : (
          <p className="text-xs">&copy; 2024 Medical Dashboard</p>
        )}
      </div>
        </nav>
      </div>
      
    </div>
  );
};

export default MedicalSidebar;
