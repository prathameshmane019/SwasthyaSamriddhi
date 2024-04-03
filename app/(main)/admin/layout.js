"use client"
import AdminDashboard from "@/app/components/adminDashboard";
import Sidebar from "@/app/components/doctorSidebar";
import { useEffect, useState } from 'react';

export default function DoctorLayout({ children }) {
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    const adminInfo = localStorage.getItem('user');
    if (adminInfo) {
      const parsedDoctorInfo = JSON.parse(adminInfo);
      setAdmin(parsedDoctorInfo);
    }
  }, []);

  return (    
    <div className="flex ">
      <AdminDashboard admin={admin} />
      <div className="w-full h-full" >
        {children}
      </div>
    </div>
  );
}
