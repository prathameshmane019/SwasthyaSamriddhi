"use client"
import Sidebar from "@/app/components/doctorSidebar";
import { useEffect, useState } from 'react';

export default function DoctorLayout({ children }) {
  const [doctor, setDoctor] = useState(null);
  useEffect(() => {
    const doctorInfo = localStorage.getItem('user');
    if (doctorInfo) {
      const parsedDoctorInfo = JSON.parse(doctorInfo);
      setDoctor(parsedDoctorInfo);
    }
  }, []);

  return (    
    <div className="flex">
      <Sidebar doctor={doctor} />
      <div className="w-full h-full" >
        {children}
      </div>
    </div>
  );
}
