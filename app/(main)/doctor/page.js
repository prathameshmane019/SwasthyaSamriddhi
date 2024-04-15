"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { UserIcon, LightBulbIcon, BadgeCheckIcon, LocationMarkerIcon, PhoneIcon, MailIcon, CreditCardIcon,IdentificationIcon } from '@heroicons/react/solid';

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchDoctor = async () => {
      if (session) {
        try {
          const response = await axios.post("/api/finddoctor", { id: session.user.id });
          setDoctor(response.data);
        } catch (error) {
          console.error("Error fetching doctor info:", error);
        }
      }
    };
    fetchDoctor();
  }, [session]);

  return (
    <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className=" rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <UserIcon className="h-6 w-6 mr-2 text-primary" />
          <h2 className="text-2xl font-bold text-primary">Doctor Profile</h2>
        </div>
        {doctor && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center mb-2">
                  <UserIcon className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-50">Personal Information</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-800 dark:text-slate-50">Name: {doctor.fullname.firstName} {doctor.fullname.middleName} {doctor.fullname.surName}</p>
                  <p className="text-sm  text-slate-800 dark:text-slate-50">Gender: {doctor.gender}</p>
                  <p className="text-sm  text-slate-800 dark:text-slate-50">Date of Birth: {new Date(doctor.dob).toLocaleDateString()}</p>
                  <p className="text-sm  text-slate-800 dark:text-slate-50">
                    <PhoneIcon className="h-5 w-5 mr-2 text-blue-500 inline-block" />
                    {doctor.mobile}
                  </p>
                  <p className="text-sm  text-slate-800 dark:text-slate-50">
                    <MailIcon className="h-5 w-5 mr-2 text-blue-500 inline-block" />
                    {doctor.email}
                  </p>
                  <p className="text-sm  text-slate-800 dark:text-slate-50">
                    <CreditCardIcon className="h-5 w-5 mr-2 text-blue-500 inline-block" />
                    {doctor.adharCard}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center mb-2">
                  <LightBulbIcon className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="text-lg font-semibold  text-slate-800 dark:text-slate-50">Professional Information</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-800 dark:text-slate-50">Degree: {doctor.degree}</p>
                  <p className="text-sm  text-slate-800 dark:text-slate-50">Specialization: {doctor.specialization}</p>
                  <p className="text-sm  text-slate-800 dark:text-slate-50">License Number: {doctor.licenseNumber}</p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center mb-2">
                  <BadgeCheckIcon className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="text-lg font-semibold  text-slate-800 dark:text-slate-50">Hospital Information</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-800 dark:text-slate-50">Hospital Name: {doctor.hospitalDetails.hospitalName}</p>
                  <p className="text-sm text-slate-800 dark:text-slate-50">
                    <PhoneIcon className="h-5 w-5 mr-2 text-blue-500 inline-block" />
                    {doctor.hospitalDetails.hospitalContactNo}
                  </p>
                  <p className="text-sm text-slate-800 dark:text-slate-50">
                    <LocationMarkerIcon className="h-5 w-5 mr-2 text-blue-500 inline-block" />
                    {doctor.hospitalDetails.hospitalAddress.building}, {doctor.hospitalDetails.hospitalAddress.city}, {doctor.hospitalDetails.hospitalAddress.taluka}, {doctor.hospitalDetails.hospitalAddress.district}, {doctor.hospitalDetails.hospitalAddress.state} - {doctor.hospitalDetails.hospitalAddress.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;