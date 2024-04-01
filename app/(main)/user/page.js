"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const UserProfilePage = ({ searchParams }) => {
    const [id, setId] = useState("");
    const [loading, setLoading] = useState(false); // State to track loading status
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setId(searchParams);
    }, [searchParams]);

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
            {loading ? (
                <div>Loading...</div>
            ) : userData ? (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <h2 className="text-2xl font-semibold text-center py-4 bg-gray-800 text-white">Profile</h2>
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Full Name</td>
                                <td className="py-2 px-4">{userData.fullname.firstName} {userData.fullname.middleName} {userData.fullname.surName}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Address</td>
                                <td className="py-2 px-4">{userData.address.building}, {userData.address.city}, {userData.address.taluka}, {userData.address.district}, {userData.address.state}, {userData.address.pincode}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Medication</td>
                                <td className="py-2 px-4">{userData.medication.name}: {userData.medication.frequency}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">ID</td>
                                <td className="py-2 px-4">{userData._id}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Adhar Card</td>
                                <td className="py-2 px-4">{userData.adharCard}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Email</td>
                                <td className="py-2 px-4">{userData.email}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Date of Birth</td>
                                <td className="py-2 px-4">{new Date(userData.dob).toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Gender</td>
                                <td className="py-2 px-4">{userData.gender}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Mobile</td>
                                <td className="py-2 px-4">{userData.mobile}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Blood Group</td>
                                <td className="py-2 px-4">{userData.bloodGroup}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Allergies</td>
                                <td className="py-2 px-4">{userData.allergies}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Created At</td>
                                <td className="py-2 px-4">{new Date(userData.createdAt).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Updated At</td>
                                <td className="py-2 px-4">{new Date(userData.updatedAt).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium text-gray-600 capitalize">Records</td>
                                <td className="py-2 px-4">{userData.records.join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>User not found</div>
            )}
        </div>
    );
};

export default UserProfilePage;