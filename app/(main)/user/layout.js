
import UserSidebar from "@/app/components/user_dashboard";

export default function DoctorLayout({ children }) {
    return (    
        <div className="flex "><UserSidebar/>
        <div className="w-full h-full m-3">
            {children}
        </div>
       </div>
        );
  }