'use client'
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import Link from "next/link";

export default function MedicalRegistrationForm() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surName, setSurName] = useState("");
  const [adharCard, setAdharCard] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [medicalName, setMedicalName] = useState("");
  const [building, setBuilding] = useState("");
  const [city, setCity] = useState("");
  const [taluka, setTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [medicalContactNo, setMedicalContactNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCancel = () => {
    router.push("/");
  };

  const handleSelectionChange = (event) => {
    setGender(event.target.value);
  };

  const validateAadharCard = (aadhar) => {
    const aadharRegex = /^\d{12}$/;
    return aadharRegex.test(aadhar);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const validateLicenseNumber = (license) => {
    const licenseRegex = /^[A-Z]{2,3}[0-9]{4,8}$/;
    return licenseRegex.test(license);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      if (
        validateAadharCard(adharCard) &&
        validateEmail(email) &&
        validateMobile(mobile) &&
        validateLicenseNumber(licenseNumber)
      ) {
        const formData = {
          password,
          fullname: { firstName, middleName, surName },
          adharCard,
          email,
          dob,
          gender,
          mobile,
          degree,
          specialization,
          licenseNumber,
          medicalDetails: {
            medicalName,
            medicalAddress: {
              building,
              city,
              taluka,
              district,
              state,
              pincode: parseInt(pincode)
            },
            medicalContactNo
          }
        };

        console.log(formData);
        try {
          const result = await axios.post("/api/register/medical", formData);
          console.log(result);
          if (result.status === 200) {
            setShowSuccessMessage(true);
            setTimeout(() => {
              router.push("/login");
            }, 2000);
          }
        } catch (error) {
          console.error("Error registering medical:", error);
        }
      } else {
        console.error("Invalid input in one or more fields");
      }
    } else {
      console.error("Passwords do not match");
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="w-full max-w-6xl shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Medical Registration</h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Surname" value={surName} onChange={(e) => setSurName(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Aadhar Card Number" value={adharCard} onChange={(e) => setAdharCard(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="email" variant="bordered" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="date" variant="bordered" label="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <select id="gender" value={gender} onChange={handleSelectionChange} className="block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500   h-14" required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="License Number" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} required />
          </div>
          <div className="col-span-3">
            <Input type="text" variant="bordered" label="Medical Name" value={medicalName} onChange={(e) => setMedicalName(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Building" value={building} onChange={(e) => setBuilding(e.target.value)} />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="City" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Taluka" value={taluka} onChange={(e) => setTaluka(e.target.value)} />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="District" value={district} onChange={(e) => setDistrict(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="State" value={state} onChange={(e) => setState(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
          </div>
          <div className="col-span-2">
            <Input type="text" variant="bordered" label="Medical Contact Number" value={medicalContactNo} onChange={(e) => setMedicalContactNo(e.target.value)} required />
          </div>
          <div className="col-span-3">
            <Input type="password" variant="bordered" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="col-span-3">
            <Input type="password" variant="bordered" label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <div className="col-span-3">
            <Button color="default" className="w-full" onClick={handleCancel}>Cancel</Button>
          </div>
          <div className="col-span-3">
            <Button color="primary" className="w-full" type="submit">Register</Button>
          </div>
        </div>
        <div className="mt-2 ">
          <p className="text-sm text-center">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
        </div>
        {showSuccessMessage && (
          <div className="mt-4 flex items-center space-x-2 text-green-500">
            
            <span>You registered successfully!</span>
          </div>
        )}
      </form>
    </div>
  );
}
