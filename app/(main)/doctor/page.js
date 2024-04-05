"use client"
import axios from "axios"; // Corrected import statement
import { useState, useEffect } from "react";

const DoctorProfile = () => {
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            const doctorInfo = JSON.parse(localStorage.getItem('user')); // Parse the stored string to object
            if (doctorInfo) {
                try {
                    const response = await axios.post("api/finddoctor", { id: doctorInfo.id }); // Pass data as object
                    setDoctor(response.data); // Set the data received from the server
                } catch (error) {
                    console.error("Error fetching doctor info:", error);
                }
            }
        };

        fetchDoctor();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Doctor Profile</h2>

            {doctor && ( // Check if doctor data is available
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Personal Information</h3>
                            <p className="text-sm text-gray-600">Name: {doctor.fullname.firstName} {doctor.fullname.middleName} {doctor.fullname.surName}</p>
                            <p className="text-sm text-gray-600">Gender: {doctor.gender}</p>
                            <p className="text-sm text-gray-600">Date of Birth: {new Date(doctor.dob).toLocaleDateString()}</p>
                            <p className="text-sm text-gray-600">Mobile: {doctor.mobile}</p>
                            <p className="text-sm text-gray-600">Email: {doctor.email}</p>
                            <p className="text-sm text-gray-600">Aadhar Card: {doctor.adharCard}</p>
                        </div>
                    </div>

                    <div>
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Professional Information</h3>
                            <p className="text-sm text-gray-600">Degree: {doctor.degree}</p>
                            <p className="text-sm text-gray-600">Specialization: {doctor.specialization}</p>
                            <p className="text-sm text-gray-600">License Number: {doctor.licenseNumber}</p>
                        </div>

                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Hospital Information</h3>
                            <p className="text-sm text-gray-600">Hospital Name: {doctor.hospitalDetails.hospitalName}</p>
                            <p className="text-sm text-gray-600">Contact Number: {doctor.hospitalDetails.hospitalContactNo}</p>
                            <p className="text-sm text-gray-600">Address: {doctor.hospitalDetails.hospitalAddress.building}, {doctor.hospitalDetails.hospitalAddress.city}, {doctor.hospitalDetails.hospitalAddress.taluka}, {doctor.hospitalDetails.hospitalAddress.district}, {doctor.hospitalDetails.hospitalAddress.state} - {doctor.hospitalDetails.hospitalAddress.pincode}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorProfile;
