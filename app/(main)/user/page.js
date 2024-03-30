// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import useRouter from 'next/router' instead of 'next/navigation'
// import { signOut, useSession } from 'next-auth/react'; // Import useSession hook

const { ReadPreference } = require("mongodb");

// const UserPage = () => {
//   const router = useRouter();
//   const [healthRecords, setHealthRecords] = useState([]);
//   const { data: session } = useSession(); // Use useSession hook to get session data

//   // Function to fetch user's health records (dummy implementation)
//   const fetchHealthRecords = async () => {
//     // Replace this with actual API call to fetch health records from backend
//     const dummyHealthRecords = [
//       { id: 1, date: '2022-01-01', diagnosis: 'Flu', doctor: 'Dr. Smith' },
//       { id: 2, date: '2022-02-15', diagnosis: 'Allergy', doctor: 'Dr. Johnson' },
//       // Add more dummy health records as needed
//     ];
//     setHealthRecords(dummyHealthRecords);
//   };

//   // Effect to fetch health records on component mount
//   useEffect(() => {
//     fetchHealthRecords();
//   }, []);

//   // Function to handle logout
//   const handleLogout = async () => {
//     await signOut({ redirect: false, callbackUrl: '/' });
//     router.push('/');
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Your Health Records</h1>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {/* Display user information if session exists */}
//         {session && (
//           <div>
//             <p>Name: {session.user.id}</p>
//             <p>Email: {session.user.email}</p>
//             <p>Email: {session.user.role}</p>
//           </div>
//         )}
//       </div>
//       <div className="mt-8">
//         <button
//           className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserPage;


// export default page
import React from 'react'

const page = () => {
  return (
    <div>UserSidebar</div>
  )
}

export default page
