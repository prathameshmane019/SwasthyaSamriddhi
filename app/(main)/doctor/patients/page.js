"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SearchUser = () => {
  const [id, setId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(null);
  const [enteredOTP, setEnteredOTP] = useState("");
  const router = useRouter();

  const generateOTP = () => {
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("/api/finduser", { id });
      const userData = response.data;
      setUserData(userData);
      setError(null);
  
    } catch (error) {
      setUserData(null);
      setError("User not found");
    }
  };

  const sendOTP = async () => {
    try {
      if (userData && userData.email) {
        await axios.post('/api/sendotp', { email: userData.email, otp });
        setOtpError(null);
      } else {
        setOtpError("User data or email not available");
      }
    } catch (error) {
      setOtpError("Failed to send OTP");
    }
  };

  const handleValidateOTP = async () => {
    console.log(enteredOTP);
    console.log(otp);
    if (otp === enteredOTP) {
      setOtpError(null);
      handleAddRecord();
    } else {
      setOtpError("Invalid OTP");
    }
  };

  const handleRecords = async () => {
      const generatedOtp = generateOTP();
      setOtp(generatedOtp);
      console.log(generatedOtp);
      setOtpSent(true); 
      try {
        await sendOTP();
      } catch (error) {
        setOtpError("Failed to send OTP");
      }
  };
  

  const handleAddRecord = () => {
    router.push(`/doctor/patients/addrecords?id=${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search for a User</h1>
      <div className="flex items-center">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      {userData && (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{userData._id}</div>
              <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900">{userData.fullname.firstName} {userData.fullname.middleName} {userData.fullname.surName}</div>
              <p className="mt-2 text-gray-600">{userData.mobile}</p>
            </div>
            <button onClick={() => {handleRecords(); sendOTP();}} className="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-auto mr-4">View Health Record</button>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {otpSent && (
        <div className="mt-4">
          <input
            type="text"
            value={enteredOTP}
            onChange={(e) => setEnteredOTP(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={handleValidateOTP} className="bg-blue-500 text-white px-4 py-2 rounded">
            Validate OTP
          </button>
        </div>
      )}
      {otpError && <p className="text-red-500 mt-4">{otpError}</p>}
    </div>
  );
};

export default SearchUser;
