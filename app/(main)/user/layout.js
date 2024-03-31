import UserSidebar from "@/app/components/user_dashboard";

export default function UserLayout({ children }) {
    return (    
        <div className="flex "><UserSidebar/>
        <div className="w-full h-full ">
            {children}
        </div>
       </div>
        );
  }