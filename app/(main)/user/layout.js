import UserSidebar from "@/app/components/user_dashboard";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default  async function UserLayout({ children }) {
    const session = await getServerSession(authOptions);
    const role = session?.user?.role
    if (!(role==="user")) {
      console.log("unauthorised")
      redirect("/login");
     }
    return (    
        <div className="flex "><UserSidebar/>
        <div className="w-full h-full ">
            {children}
        </div>
       </div>
        );
  }