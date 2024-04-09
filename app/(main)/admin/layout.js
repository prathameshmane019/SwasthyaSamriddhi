
import AdminDashboard from "@/app/components/adminDashboard";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
export default async function DoctorLayout({ children }) {

  const session = await getServerSession(authOptions);
  const role = session?.user?.role
  if (!(role==="admin")) {
    console.log("unauthorised")
    redirect("/login");
   }
  return (    
    <div className="flex ">
      <AdminDashboard admin={admin} />
      <div className="w-full h-full" >
        {children}
      </div>
    </div>
  );
}
