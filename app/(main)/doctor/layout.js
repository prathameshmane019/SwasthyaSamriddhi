import Sidebar from "@/app/components/doctorSidebar";

export default function DoctorLayout({ children }) {
    return (    
        <div className="flex "><Sidebar/>
        <div className="w-full h-full">
            {children}
        </div>
       </div>
        );
  }