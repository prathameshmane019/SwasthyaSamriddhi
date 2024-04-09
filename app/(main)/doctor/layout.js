
import Sidebar from "@/app/components/doctorSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
export default async function DoctorLayout({ children }) {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role
  if (!(role==="doctor")) {
    console.log("unauthorised")
    redirect("/login");
   }

  return (    
    <div className="flex ">
      <Sidebar />
      <div className="w-full h-full" >
        {children}
      </div>
    </div>
  );
}
