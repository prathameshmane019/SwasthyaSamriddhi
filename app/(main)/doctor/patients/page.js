"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Input, Button, Card, CardBody } from '@nextui-org/react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { toast } from 'sonner';

const SearchUser = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [id, setId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(null);
  const [enteredOTP, setEnteredOTP] = useState("");
  const [verifiedOtp, setVerifiedOtp] = useState(false);
  const [action, setAction] = useState(""); 
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
      setOtp("");
      setOtpSent(false);
      setVerifiedOtp(false);
      if (id.trim().length === 0 || id.trim().length < 13 || !id.trim().includes("U")) {
        setError("Please enter a valid ID");
        toast.error("Please enter a valid ID");
        setUserData(null);
        return;
      }
      if(userData?._id === id)
      {
        setUserData(userData);
        return;
      }
      const response = await axios.post("/api/finduser", { id });
      const userData1 = response.data;
      setUserData(userData1);
      setError(null);
    } catch (error) {
      setUserData(null);
      setError("User not found");
      toast.error("User not found");
    }
  };

  const sendOTP = async (otp) => {
    try {
      if (userData) {
        const name = userData.fullname.firstName + " " + userData.fullname.surName;
        await axios.post('/api/sendOtp', { email: userData.email, otp: otp, name: name });
      }
    } catch (error) {
      toast.error("Failed to send OTP");
      throw new Error("Failed to send OTP");
    }
  };
  
  const handleAction = async (actionType) => {
    if (verifiedOtp) {
      if (action === "showRecords") {
        router.push(`/doctor/patients/records?id=${id}`);
      } else if (action === "addRecord") {
        router.push(`/doctor/patients/addrecords?id=${id}`);
      }
    }
    if (!otpSent || !verifiedOtp) {
      setShowOtp(true);
      const generatedOtp = generateOTP(); 
      setOtp(generatedOtp); 
      await sendOTP(generatedOtp); // Send OTP
      setOtpSent(true);
    }
    setAction(actionType);
    setShowOtp(true);
  };

  const handleValidateOTP = async () => {
    if (!enteredOTP || !otp) {
      setOtpError("Please enter OTP first");
      toast.error("Please enter OTP first");
      return;
    }

    if (otp === enteredOTP) {
      setOtpError(null);
      setVerifiedOtp(true);
      toast.success("OTP validation Successful!");
      if (action === "showRecords") {
        router.push(`/doctor/patients/records?id=${id}`);
      } else if (action === "addRecord") {
        router.push(`/doctor/patients/addrecords?id=${id}`);
      }
      // Clear only OTP-related fields after successful submission
      resetOtpFields();
    } else {
      setOtpError("Invalid OTP");
      toast.error("Invalid OTP");
    }
  };

  const resetOtpFields = () => {
    setOtp("");
    setOtpError(null);
    setEnteredOTP("");
    setShowOtp(false);
  };

  const resetFields = () => {
    setId("");
    setUserData(null);
    setError(null);
    setOtpSent(false);
    setOtp("");
    setOtpError(null);
    setEnteredOTP("");
    setAction("");
    setShowOtp(false);
  };

  return (
    <div className="container mx-auto mt-5 p-10">
      <h1 className="text-2xl font-bold mb-4">Search for a User</h1>
      <div className="flex items-center space-x-4">
        <Input
          type="text"
          value={id}
          variant='bordered'
          onChange={(e) => setId(e.target.value)}
          className="flex-grow"
          placeholder="Enter user"
        />
        <Button onClick={handleSearch} className="bg-primary text-white">
          Search
        </Button>
      </div>
      {userData && (
        <div className='mt-5'>
        <Card shadow>
          <CardBody>
            <div className="flex items-center">
              <div className="flex-grow">
                <div className="text-indigo-500 font-semibold">{userData._id}</div>
                <div className="text-lg font-semibold ">{userData.fullname.firstName} {userData.fullname.middleName} {userData.fullname.surName}</div>
                <p className="">{userData.mobile}</p>
              </div>
              {verifiedOtp ? <div className='flex flex-row flex-wrap gap-2'><Button onClick={() => handleAction("showRecords")} className="bg-green-500 text-slate-50 ">Show Record</Button><Button onClick={() => handleAction("addRecord")} className="bg-green-500 text-slate-50 ">Add Record</Button></div> : <Button onClick={() => handleAction("")} className="bg-primary-500 text-slate-50  mr-2">Send OTP</Button>}
            </div>
            {otp ? (
              <div className="mt-4">
                <Input
                  type="text"
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                  className="border p-2 mr-2"
                  placeholder="Enter OTP"
                />
                <Button onClick={handleValidateOTP} className="bg-blue-500 text-white">
                  Validate OTP
                </Button>
              </div>
            ) : ""}
          </CardBody>
        </Card>
      </div>
        
      )}
      {error && (
        <div className="flex items-center mt-4 text-red-500">
          <ExclamationCircleIcon className="w-6 h-6 mr-2" />
          <p>{error}</p>
        </div>
      )}
      {otpError && (
        <div className="flex items-center mt-4 text-red-500">
          <ExclamationCircleIcon className="w-6 h-6 mr-2" />
          <p>{otpError}</p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;