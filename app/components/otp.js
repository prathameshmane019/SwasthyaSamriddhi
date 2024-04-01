"use client"
import React, { useState } from 'react';


const OTPForm = ({ userData, otp, setOtpError, handleAddRecord }) => {
  const [enteredOTP, setEnteredOTP] = useState("");

  const handleValidateOTP = async () => {
    try {
      if (otp === enteredOTP) {
        setOtpError(null);
        handleAddRecord();
      } else {
        setOtpError("Invalid OTP");
      }
    } catch (error) {
      setOtpError("Failed to validate OTP");
    }
  };

  return (
    <>
      <input
        type="text"
        value={enteredOTP}
        onChange={(e) => setEnteredOTP(e.target.value)}
        placeholder="Enter OTP"
        className="border p-2 mr-2"
      />
      <button onClick={handleValidateOTP} className="bg-blue-500 text-white px-4 py-2 rounded">
        Validate OTP
      </button>
    </>
  );
};

export default OTPForm;
