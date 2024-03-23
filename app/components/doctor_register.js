'use client'
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import Link from "next/link";

export default function DoctorRegistrationForm() {
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
  const [hospitalName, setHospitalName] = useState("");
  const [building, setBuilding] = useState("");
  const [city, setCity] = useState("");
  const [taluka, setTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [hospitalContactNo, setHospitalContactNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCancel = () => {

  }
  const handleSelectionChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const formData = {
        fullname: {
          firstName,
          middleName,
          surName
        },
        adharCard,
        email,
        dob,
        gender,
        mobile,
        degree,
        specialization,
        licenseNumber,
        hospitalDetails: {
          hospitalName,
          hospitalAddress: {
            building,
            city,
            taluka,
            district,
            state,
            pincode: parseInt(pincode) // Parse pincode to an integer
          },
          hospitalContactNo
        }
      };
      console.log("Form Data:", formData);
      try {
        const result = await axios.post("/api/register/doctor", formData);
        console.log(result);
        router.push("/login");
      } catch (error) {
        console.error("Error registering doctor:", error);
      }
    } else {
      console.error("Passwords do not match");
    }
  };
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-6xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Doctor Registration</h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Middle Name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Surname"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Aadhar Card Number"
              value={adharCard}
              onChange={(e) => setAdharCard(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="email"
              variant="bordered"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="date"
              variant="bordered"
              label="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <select
              id="gender"
              value={gender}
              onChange={handleSelectionChange}
              className="block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500 bg-white text-gray-700 h-14"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Specialization"
              value={specialization}
              onChange={(e) => setSpecialization
                (e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="License Number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Hospital Name"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Building"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Taluka"
              value={taluka}
              onChange={(e) => setTaluka(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Hospital Contact Number"
              value={hospitalContactNo}
              onChange={(e) => setHospitalContactNo(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="password"
              variant="bordered"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="password"
              variant="bordered"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-4"
            />
          </div>
        
        <div className="col-span-3"><Button color="default" className="w-full" onClick={handleCancel}>Cancel</Button></div>

        <div className="col-span-3"><Button color="primary" className="w-full" type="submit">  Register
        </Button></div>

        </div>
        <div className="mt-2 ">
            <p className="text-sm text-center">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
          </div>
      </form>
    </div>
  );
}
