"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";

const SuccessMessage = ({ message, onClose }) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline"> {message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 5.652a.5.5 0 0 1 0 .707L10.06 10l4.288 4.646a.5.5 0 0 1-.707.707L9.354 10l4.287-4.646a.5.5 0 0 1 .707-.707z"/>
        </svg>
      </span>
    </div>
  );
};

export default function RegisterComponent() {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surName, setSurName] = useState("");
  const [adharCard, setAdharCard] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [building, setBuilding] = useState("");
  const [city, setCity] = useState("");
  const [taluka, setTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medicationName, setMedicationName] = useState("");
  const [medicationFrequency, setMedicationFrequency] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleSelectionChange = (event) => {
    setGender(event.target.value);
  };
  const handleCancel = () => {

  }
  const handleCloseSuccessMessage = () => {
    setSuccessMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
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
        bloodGroup,
        weight,
        height,
        address: {
          building,
          city,
          taluka,
          district,
          state,
          pincode
        },
        allergies,
        medication: {
          name: medicationName,
          frequency: medicationFrequency
        },

        password
      };
      console.log("Form Data:", formData);
      try {
        const result = await axios.post("/api/register/user", formData);
        setSuccessMessage("Registration successful!");
        console.log(result);
      } catch (error) {
        console.log("User Registration failed");
        setSuccessMessage("Registration Failed!");
      }
    } else {
      setSuccessMessage("Passwords do not match.");
    }
  }
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100">
      {successMessage && <SuccessMessage message={successMessage} onClose={handleCloseSuccessMessage} />}
      <form onSubmit={handleSubmit} className="w-full max-w-6xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
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
              type="tel"
              variant="bordered"
              label="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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
              type="text"
              variant="bordered"
              label="Adhar No."
              value={adharCard}
              onChange={(e) => setAdharCard(e.target.value)}
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
            <Input
              type="weight"
              variant="bordered"
              label="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="height"
              variant="bordered"
              label="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
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
              label="Blood Group"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Medication Name"
              value={medicationName}
              onChange={(e) => setMedicationName(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Medication Frequency"
              value={medicationFrequency}
              onChange={(e) => setMedicationFrequency(e.target.value)}
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
          <div className="col-span-3"><Button color="primary" className="w-full" type="submit">  Register</Button></div>
           </div>
           <div className="mt-2 ">
            <p className="text-sm text-center">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
          </div>
      </form>
    </div>
  );
}  