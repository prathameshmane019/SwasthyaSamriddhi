import Link from "next/link";
const UserSidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-[100vh] w-1/4 flex flex-col justify-between">
            <div className="p-4">
                <h2 className="text-xl font-semibold">Doctor Dashboard</h2>
                <div className="text-white text-start ml-3">
                    <Link href="/user/profile" className="">
                        Profile
                    </Link></div>
               
                <div className="text-white text-start ml-3"><Link href="/doctor/Record" className="">
                    Records
                </Link>
                </div>
            </div>
            <div className="p-4">
                <p className="text-xs">&copy; 2024 Doctor Dashboard</p>
            </div>
        </div>
    );
};

export default UserSidebar;
