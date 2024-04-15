"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
// HeroIcons.js
import {IdentificationIcon ,UserGroupIcon, UserIcon, LocationMarkerIcon, CreditCardIcon, MailIcon, CakeIcon, PhoneIcon, BeakerIcon, CalendarIcon, PencilIcon,ClipboardListIcon } from '@heroicons/react/solid';
const UserProfilePage = () => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      setId(session.user.id)
    }
  }, [session]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (id) {
        setLoading(true);
        try {
          const response = await axios.post("/api/finduser", { id });
          setUserData(response.data);
          setLoading(false);
        } catch (error) {
          console.log("User not found or error occurred");
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <p className="text-lg font-medium text-gray-800">Loading...</p>
          </div>
        </div>
      ) : userData ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold text-center py-6 bg-blue-500 text-white flex items-center justify-center">
            <UserIcon className="mr-2 h-8 w-8 text-white" />
            User Profile
          </h2>
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <UserIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Full Name</p>
                </div>
                <p className="text-gray-800">{userData.fullname.firstName} {userData.fullname.middleName} {userData.fullname.surName}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <LocationMarkerIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Address</p>
                </div>
                <p className="text-gray-800">{userData.address.building}, {userData.address.city}, {userData.address.taluka}, {userData.address.district}, {userData.address.state}, {userData.address.pincode}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                <ClipboardListIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Medication</p>
                </div>
                <p className="text-gray-800">{userData.medication.name}: {userData.medication.frequency}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <IdentificationIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">ID</p>
                </div>
                <p className="text-gray-800">{userData._id}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <CreditCardIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Adhar Card</p>
                </div>
                <p className="text-gray-800">{userData.adharCard}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <MailIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Email</p>
                </div>
                <p className="text-gray-800">{userData.email}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <CakeIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Date of Birth</p>
                </div>
                <p className="text-gray-800">{new Date(userData.dob).toLocaleDateString()}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                <UserGroupIcon className="text-blue-500 mr-2 h-6 w-6" />
                   <p className="text-gray-600 font-medium">Gender</p>
                </div>
                <p className="text-gray-800">{userData.gender}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray -200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <PhoneIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Mobile</p>
                </div>
                <p className="text-gray-800">{userData.mobile}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <BeakerIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Blood Group</p>
                </div>
                <p className="text-gray-800">{userData.bloodGroup}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                <ClipboardListIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Allergies</p>
                </div>
                <p className="text-gray-800">{userData.allergies}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center mb-2">
                  <CalendarIcon className="text-blue-500 mr-2 h-6 w-6" />
                  <p className="text-gray-600 font-medium">Register Date</p>
                </div>
                <p className="text-gray-800">{new Date(userData.createdAt).toLocaleString()}</p>
              </div>
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