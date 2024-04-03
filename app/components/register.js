"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const validateMobile = (value) => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(value);
};
const validateEmail = (value) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(value);
};

const validateAadhaar = (value) => {
  const regex = /^[0-9]{12}$/;
  return regex.test(value);
};

const validateBloodGroup = (value) => {
  const validBloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  return validBloodGroups.includes(value);
};

const validatePassword = (password, confirmPassword) => {
  return password === confirmPassword;
};


export default function RegisterComponent() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    userId: "U032400001",
    fullname: {
      firstName: "",
      middleName: "",
      surName: "",
    },
    adharCard: "",
    email: "",
    dob: "",
    gender: "",
    mobile: "",
    bloodGroup: "",
    address: {
      building: "",
      city: "",
      taluka: "",
      district: "",
      state: "",
      pincode: "",
    },
    allergies: "",
    medication: {
      name: "",
      frequency: "",
    },
    password: "",
    confirmPassword: "",
  });

  const handleSelectionChange = (event) => {
    setFormValues({ ...formValues, gender: event.target.value });
  };

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const [emailError, setEmailError] = useState("");
  const handleCancel = () => {

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      password,
      confirmPassword,
      mobile,
      adharCard,
      bloodGroup,
      ...otherFormValues
    } = formValues;

    if (!validatePassword(password, confirmPassword)) {
      alert("Passwords do not match");
      return;
    }

    if (!validateMobile(mobile)) {
      alert("Please enter a valid mobile number");
      return;
    }

    if (!validateAadhaar(adharCard)) {
      alert("Please enter a valid Aadhaar number");
      return;
    }

    if (!validateBloodGroup(bloodGroup)) {
      alert("Please enter a valid blood group");
      return;
    }
    if (!validateEmail(formValues.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    
    if (!validatePassword(password, confirmPassword)) {
      alert("Passwords do not match");
      return;
    }

    // Submit the form data to the server
    axios.post("/api/register/user", formValues).then((response) => {
      if (response.status === 200) {
        router.back();
      }
    });
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-6xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="First Name"
              value={formValues.fullname.firstName}
              onChange={handleInputChange}
              name="fullname.firstName"
              required
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Middle Name"
              value={formValues.fullname.middleName}
              onChange={handleInputChange}
              name="fullname.middleName"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Sur Name"
              value={formValues.fullname.surName}
              onChange={handleInputChange}
              name="fullname.surName"
              required
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Adhar Card"
              value={formValues.adharCard}
              onChange={handleInputChange}
              name="adharCard"
              required
            />
          </div>
          
    <div className="col-span-3">
      <Input
        type="email"
        variant="bordered"
        label="Email"
        value={formValues.email}
        onChange={handleInputChange}
        name="email"
        required
        feedback={emailError} // Display the error message
      />
    </div>
          <div className="col-span-3">
            <Input
              type="date"
              variant="bordered"
              label="Date of Birth"
              value={formValues.dob}
              onChange={handleInputChange}
              name="dob"
              required
            />
          </div>
          <div className="col-span-3">
            <select
              id="gender"
              value={formValues.gender}
              onChange={handleSelectionChange}
              className="block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500 bg-white text-gray-700 h-14"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-span-3">
            <Input
              type="tel"
              variant="bordered"
              label="Mobile"
              value={formValues.mobile}
              onChange={handleInputChange}
              name="mobile"
              required
              valid={validateMobile(formValues.mobile)}
              feedback="Please enter a valid mobile number"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Blood Group"
              value={formValues.bloodGroup}
              onChange={handleInputChange}
              name="bloodGroup"
              required
              valid={validateBloodGroup(formValues.bloodGroup)}
              feedback="Please enter a valid blood group"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Building"
              value={formValues.address.building}
              onChange={handleInputChange}
              name="address.building"
              required
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="City"
              value={formValues.address.city}
              onChange={handleInputChange}
              name="address.city"
              required
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Taluka"
              value={formValues.address.taluka}
              onChange={handleInputChange}
              name="address.taluka"
              required
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="District"
              value={formValues.address.district}
              onChange={handleInputChange}
              name="address.district"
              required
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="State"
              value={formValues.address.state}
              onChange={handleInputChange}
              name="address.state"
              required
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Pincode"
              value={formValues.address.pincode}
              onChange={handleInputChange}
              name="address.pincode"
              required
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Allergies"
              value={formValues.allergies}
              onChange={handleInputChange}
              name="allergies"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Medication Name"
              value={formValues.medication.name}
              onChange={handleInputChange}
              name="medication.name"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              variant="bordered"
              label="Medication Frequency"
              value={formValues.medication.frequency}
              onChange={handleInputChange}
              name="medication.frequency"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="password"
              variant="bordered"
              label="Password"
              value={formValues.password}
              onChange={handleInputChange}
              name="password"
              required
              feedback={
                !validatePassword(formValues.password, formValues.confirmPassword) &&
                "Passwords do not match"
              }
            />
          </div>
          <div className="col-span-3">
            <Input
              type="password"
              variant="bordered"
              label="Confirm Password"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              name="confirmPassword"
              required
              feedback={
                !validatePassword(formValues.password, formValues.confirmPassword) &&
                "Passwords do not match"
              }
            />
          </div>
          <div className="col-span-3"><Button color="default" className="w-full" onClick={handleCancel}>Cancel</Button></div>

          <div className="col-span-3">
            <Button color="primary" className="w-full" type="submit">
              Register
            </Button>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
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