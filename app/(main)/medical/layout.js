
import Sidebar from "@/app/components/medicalSidebar";

export default function MedicalLayout({ children }) {
  

  return (    
    <div className="flex ">
      <Sidebar />
      <div className="w-full h-full" >
        {children}
      </div>
    </div>
  );
}
