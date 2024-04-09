"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { useSession } from 'next-auth/react';

const UserProfilePage = () => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const { data: session } = useSession();
  useEffect(() => {
    if(session){
      setId(session.user.id)
    }
  }, [session]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (id) {
        setLoading(true); // 
        try {
          const response = await axios.post("/api/finduser", {id} );
          setUserData(response.data); // Update userData with the response data
          setLoading(false); // Set loading to false after the request is completed
        } catch (error) {
          console.log("User not found or error occurred");
          setLoading(false); // Set loading to false in case of an error
        }
      }
    };

    fetchUserData();
  }, [id]); // Fetch user data whenever id changes

  return (
    <div className="container mx-auto px-4">
      {loading? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <p className="text-lg font-medium text-gray-800">Loading...</p>
          </div>
        </div>
      ) : userData? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-semibold text-center py-4 bg-gray-800 text-white">Profile</h2>
          <div className="p-6">
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Full Name</p>
              <p>{userData.fullname.firstName} {userData.fullname.middleName} {userData.fullname.surName}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Address</p>
              <p>{userData.address.building}, {userData.address.city}, {userData.address.taluka}, {userData.address.district}, {userData.address.state}, {userData.address.pincode}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Medication</p>
              <p>{userData.medication.name}: {userData.medication.frequency}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">ID</p>
              <p>{userData._id}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Adhar Card</p>
              <p>{userData.adharCard}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Email</p>
              <p>{userData.email}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Date of Birth</p>
              <p>{new Date(userData.dob).toLocaleDateString()}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Gender</p>
              <p>{userData.gender}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Mobile</p>
              <p>{userData.mobile}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Blood Group</p>
              <p>{userData.bloodGroup}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Allergies</p>
              <p>{userData.allergies}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Created At</p>
              <p>{new Date(userData.createdAt).toLocaleString()}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Updated At</p>
              <p>{new Date(userData.updatedAt).toLocaleString()}</p>
            </div>
            
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-800">User not found</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;