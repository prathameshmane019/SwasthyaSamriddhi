"use client"
import axios from "axios"; 
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
const MedicalProfile = () => {
    const [medical, setMedical] = useState(null);
  const { data: session } = useSession();
    useEffect(() => {
        const fetchMedical = async () => {
             if (session) {
                try {
                    const response = await axios.post("api/findmedical", { id: session.user.id }); // Pass data as object
                    setDoctor(response.data); 
                } catch (error) {
                    console.error("Error fetching medical info:", error);
                }
            }
        };

        fetchMedical();
    }, [session]);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Medical Profile</h2>

            {medical && ( 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Personal Information</h3>
                            <p className="text-sm text-gray-600">Name: {medical.fullname.firstName} {medical.fullname.middleName} {medical.fullname.surName}</p>
                            <p className="text-sm text-gray-600">Gender: {medical.gender}</p>
                            <p className="text-sm text-gray-600">Date of Birth: {new Date(medical.dob).toLocaleDateString()}</p>
                            <p className="text-sm text-gray-600">Mobile: {medical.mobile}</p>
                            <p className="text-sm text-gray-600">Email: {medical.email}</p>
                            <p className="text-sm text-gray-600">Aadhar Card: {medical.adharCard}</p>
                        </div>
                    </div>

                    <div>
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Professional Information</h3>
                            <p className="text-sm text-gray-600">Degree: {medical.degree}</p>
                            <p className="text-sm text-gray-600">Specialization: {medical.specialization}</p>
                            <p className="text-sm text-gray-600">License Number: {medical.licenseNumber}</p>
                        </div>

                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Medical Information</h3>
                            <p className="text-sm text-gray-600">Medical Name: {medical.medicalDetails.medicalName}</p>
                            <p className="text-sm text-gray-600">Contact Number: {medical.hospitalDetails.hospitalContactNo}</p>
                            <p className="text-sm text-gray-600">Address: {medical.medicalDetails.medicalAddress.building}, {medical.medicalDetails.medicalAddress.city}, {medical.medicalDetails.medicalAddress.taluka}, {medical.medicalDetails.medicalAddress.district}, {medical.medicalDetails.medicalAddress.state} - {medical.medicalDetails.medicalAddress.pincode}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MedicalProfile;
