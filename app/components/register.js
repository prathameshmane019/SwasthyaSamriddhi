// "use client"
// import React, { useState } from "react";
// import Link from "next/link";
// import { Input, Button } from "@nextui-org/react";
// import axios from "axios";
// import { toast } from 'sonner'


// export default function RegisterComponent() {
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [middleName, setMiddleName] = useState("");
//   const [surName, setSurName] = useState("");
//   const [adharCard, setAdharCard] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [building, setBuilding] = useState("");
//   const [city, setCity] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [district, setDistrict] = useState("");
//   const [state, setState] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [allergies, setAllergies] = useState("");
//   const [medicationName, setMedicationName] = useState("");
//   const [medicationFrequency, setMedicationFrequency] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const handleSelectionChange = (event) => {
//     setGender(event.target.value);
//   };
//   const handleCancel = () => {

//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password == confirmPassword) {
//       const formData = {
//         fullname: {
//           firstName,
//           middleName,
//           surName
//         },
//         adharCard,
//         email,
//         dob,
//         gender,
//         mobile,
//         bloodGroup,
//         weight,
//         height,
//         address: {
//           building,
//           city,
//           taluka,
//           district,
//           state,
//           pincode
//         },
//         allergies,
//         medication: {
//           name: medicationName,
//           frequency: medicationFrequency
//         },

//         password
//       };
//       console.log("Form Data:", formData);
//       try {
//         const result = await axios.post("/api/register/user", formData);
//         toast.success('User Registration Succesfull')
//         console.log(result);
//       } catch (error) {
//         console.log("User Registration failed");
//         toast.error('User Registration failed')
//       }
//     } else {
//       toast.warning("Passwords do not match.");
//     }
//   }
//   return (
//     <div className="flex flex-col justify-center items-center  ">
//       <form onSubmit={handleSubmit} className="w-full max-w-6xl  shadow-md rounded-lg p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
//         <div className="grid grid-cols-6 gap-6">
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Middle Name"
//               value={middleName}
//               onChange={(e) => setMiddleName(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Surname"
//               value={surName}
//               onChange={(e) => setSurName(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="tel"
//               variant="bordered"
//               label="Mobile"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="email"
//               variant="bordered"
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Adhar No."
//               value={adharCard}
//               onChange={(e) => setAdharCard(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="date"
//               variant="bordered"
//               label="Date of Birth"
//               value={dob}
//               onChange={(e) => setDob(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="weight"
//               variant="bordered"
//               label="Weight"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="height"
//               variant="bordered"
//               label="height"
//               value={height}
//               onChange={(e) => setHeight(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <select
//               id="gender"
//               value={gender}
//               onChange={handleSelectionChange}
//               className="block appearance-none w-full border  py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500 text-gray-700 h-14"
//             >
//               <option value="">Select gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Building"
//               value={building}
//               onChange={(e) => setBuilding(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="City"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Taluka"
//               value={taluka}
//               onChange={(e) => setTaluka(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="District"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="State"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Pincode"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Blood Group"
//               value={bloodGroup}
//               onChange={(e) => setBloodGroup(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Allergies"
//               value={allergies}
//               onChange={(e) => setAllergies(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Medication Name"
//               value={medicationName}
//               onChange={(e) => setMedicationName(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-2">
//             <Input
//               type="text"
//               variant="bordered"
//               label="Medication Frequency"
//               value={medicationFrequency}
//               onChange={(e) => setMedicationFrequency(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-3">
//             <Input
//               type="password"
//               variant="bordered"
//               label="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-3">
//             <Input
//               type="password"
//               variant="bordered"
//               label="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="mb-4"
//             />
//           </div>
//           <div className="col-span-3"><Button color="default" className="w-full" onClick={handleCancel}>Cancel</Button></div>
//           <div className="col-span-3"><Button color="primary" className="w-full" type="submit">  Register</Button></div>
//            </div>
//            <div className="mt-2 ">
//             <p className="text-sm text-center">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
//           </div>
//       </form>
//     </div>
//   );
// }  
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { toast } from 'sonner';
import Link from "next/link";
<<<<<<< HEAD
=======
import { useRouter } from 'next/navigation';
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab

const steps = [
  { 
    title: "Personal Information", 
    fields: [
      { name: "firstName", required: true },
      { name: "middleName", required: false },
      { name: "surName", required: true },
      { name: "mobile", required: true },
      { name: "email", required: true },
      { name: "adharCard", required: true }
    ]
  },
  { 
    title: "Additional Details", 
    fields: [
      { name: "dob", required: true },
      { name: "gender", required: true },
      { name: "weight", required: false },
      { name: "height", required: false },
<<<<<<< HEAD
      { name: "bloodGroup", required: false }
=======
      { name: "bloodGroup", required: true }
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
    ]
  },
  { 
    title: "Address", 
    fields: [
      { name: "pincode", required: true },
      { name: "building", required: true },
      { name: "city", required: true },
      { name: "taluka", required: false },
      { name: "district", required: true },
      { name: "state", required: true }
<<<<<<< HEAD
=======
     
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
    ]
  },
  { 
    title: "Medical Information", 
    fields: [
      { name: "allergies", required: false },
      { name: "medicationName", required: false },
      { name: "medicationFrequency", required: false }
    ]
  },
  { 
    title: "Account Setup", 
    fields: [
      { name: "password", required: true },
      { name: "confirmPassword", required: true }
    ]
  },
];

const initialFormData = {
<<<<<<< HEAD
  firstName: "", middleName: "", surName: "", mobile: "", email: "", adharCard: "",
  dob: "", gender: "", weight: "", height: "", bloodGroup: "",
  pincode: "", building: "", city: "", taluka: "", district: "", state: "",
  allergies: "", medicationName: "", medicationFrequency: "",
  password: "", confirmPassword: ""
=======
  fullname: { firstName: "", middleName: "", surName: "" },
  mobile: "",
  email: "",
  adharCard: "",
  dob: "",
  gender: "",
  weight: "",
  height: "",
  bloodGroup: "",
  address: {
    pincode: "",
    building: "",
    city: "",
    taluka: "",
    district: "",
    state: ""
    
  },
  allergies: "",
  medication: {
    name: "",
    frequency: ""
  },
  password: "",
  confirmPassword: ""
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
};

export default function MultiStepRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
<<<<<<< HEAD

  const validateField = (field, value, required) => {
    if (!required && !value) return ""; // If field is not required and empty, it's valid
=======
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validateField = (field, value, required) => {
    if (!required && !value) return "";
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab

    switch (field) {
      case "firstName":
      case "surName":
      case "building":
      case "city":
      case "district":
      case "state":
        return value.trim() ? "" : `${field} is required`;
      case "mobile":
        return /^\d{10}$/.test(value) ? "" : "Invalid mobile number";
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address";
      case "adharCard":
        return /^\d{12}$/.test(value) ? "" : "Invalid Aadhaar number";
      case "dob":
        return value ? "" : "Date of Birth is required";
      case "gender":
        return value ? "" : "Gender is required";
<<<<<<< HEAD
=======
      case "bloodGroup":
        return value ? "" : "Blood Group is required";
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
      case "weight":
      case "height":
        return value === "" || (!isNaN(value) && value > 0) ? "" : `Invalid ${field}`;
      case "pincode":
        return /^\d{6}$/.test(value) ? "" : "Invalid pincode";
      case "password":
        return value.length >= 8 ? "" : "Password must be at least 8 characters";
      case "confirmPassword":
        return value === formData.password ? "" : "Passwords do not match";
      default:
        return "";
    }
  };

  const handleInputChange = (field, value) => {
<<<<<<< HEAD
    setFormData({ ...formData, [field]: value });
=======
    let updatedFormData = { ...formData };
    if (field === "firstName" || field === "middleName" || field === "surName") {
      updatedFormData.fullname = { ...updatedFormData.fullname, [field]: value };
    } else if (field === "building" || field === "city" || field === "taluka" || field === "district" || field === "state" || field === "pincode") {
      updatedFormData.address = { ...updatedFormData.address, [field]: value };
    } else if (field === "medicationName") {
      updatedFormData.medication = { ...updatedFormData.medication, name: value };
    } else if (field === "medicationFrequency") {
      updatedFormData.medication = { ...updatedFormData.medication, frequency: value };
    } else {
      updatedFormData[field] = value;
    }
    setFormData(updatedFormData);
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
    const fieldConfig = steps.flatMap(step => step.fields).find(f => f.name === field);
    setErrors({ ...errors, [field]: validateField(field, value, fieldConfig.required) });
  };

  const handleAddressLookup = async () => {
<<<<<<< HEAD
    if (!formData.pincode) {
=======
    if (!formData.address.pincode) {
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
      toast.error("Please enter a pincode");
      return;
    }
    try {
<<<<<<< HEAD
      const response = await axios.get(`https://api.postalpincode.in/pincode/${formData.pincode}`);
=======
      const response = await axios.get(`https://api.postalpincode.in/pincode/${formData.address.pincode}`);
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
      if (response.data[0].Status === "Success") {
        const { District, State } = response.data[0].PostOffice[0];
        setFormData(prev => ({
          ...prev,
<<<<<<< HEAD
          district: District,
          state: State
=======
          address: {
            ...prev.address,
            district: District,
            state: State
          }
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
        }));
        setErrors(prev => ({
          ...prev,
          district: "",
          state: ""
        }));
        toast.success("Address details fetched successfully");
      } else {
        toast.error("Invalid pincode");
      }
    } catch (error) {
      toast.error("Error fetching address details");
    }
  };

  const validateStep = (stepIndex) => {
    const stepFields = steps[stepIndex].fields;
    const stepErrors = {};
    let isValid = true;

    stepFields.forEach(field => {
<<<<<<< HEAD
      const error = validateField(field.name, formData[field.name], field.required);
=======
      let value;
      if (field.name === "firstName" || field.name === "middleName" || field.name === "surName") {
        value = formData.fullname[field.name];
      } else if (field.name === "building" || field.name === "city" || field.name === "taluka" || field.name === "district" || field.name === "state" || field.name === "pincode") {
        value = formData.address[field.name];
      } else if (field.name === "medicationName") {
        value = formData.medication.name;
      } else if (field.name === "medicationFrequency") {
        value = formData.medication.frequency;
      } else {
        value = formData[field.name];
      }
      const error = validateField(field.name, value, field.required);
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
      if (error) {
        stepErrors[field.name] = error;
        isValid = false;
      }
    });

    setErrors(prev => ({ ...prev, ...stepErrors }));
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      if (currentStep === steps.length - 1) {
<<<<<<< HEAD
        try {
          const result = await axios.post("/api/register/user", formData);
          toast.success('User Registration Successful');
          console.log(result);
          // Reset form or redirect user
        } catch (error) {
          console.error("User Registration failed", error);
          toast.error('User Registration failed');
=======
        if (isSubmitting) return;
        setIsSubmitting(true);
        try {
          const { confirmPassword, ...dataToSubmit } = formData;
          const result = await axios.post("/api/register/user", dataToSubmit);
          toast.success('User Registration Successful');
          console.log(result);
          router.push('/');
        } catch (error) {
          console.error("User Registration failed", error);
          toast.error('User Registration failed');
        } finally {
          setIsSubmitting(false);
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
        }
      } else {
        nextStep();
      }
    } else {
      toast.error("Please fill in all required fields correctly");
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    } else {
      toast.error("Please fill in all required fields correctly");
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const renderField = (field) => {
    switch (field.name) {
      case "gender":
        return (
          <Select
            label="Gender"
            placeholder="Select gender"
            value={formData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            errorMessage={errors.gender}
            isInvalid={!!errors.gender}
          >
            <SelectItem key="male" value="male">Male</SelectItem>
            <SelectItem key="female" value="female">Female</SelectItem>
            <SelectItem key="other" value="other">Other</SelectItem>
          </Select>
        );
      case "dob":
        return (
          <Input
            type="date"
            label="Date of Birth"
            value={formData.dob}
            onChange={(e) => handleInputChange("dob", e.target.value)}
            errorMessage={errors.dob}
            isInvalid={!!errors.dob}
          />
        );
      case "password":
      case "confirmPassword":
        return (
          <Input
            type="password"
            label={field.name === "password" ? "Password" : "Confirm Password"}
            value={formData[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            errorMessage={errors[field.name]}
            isInvalid={!!errors[field.name]}
          />
        );
      case "pincode":
        return (
          <div className="flex gap-2">
            <Input
              type="text"
              label="Pincode"
<<<<<<< HEAD
              value={formData.pincode}
=======
              value={formData.address.pincode}
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
              onChange={(e) => handleInputChange("pincode", e.target.value)}
              errorMessage={errors.pincode}
              isInvalid={!!errors.pincode}
            />
            <Button onClick={handleAddressLookup}>Lookup</Button>
          </div>
        );
      default:
<<<<<<< HEAD
=======
        let value;
        if (field.name === "firstName" || field.name === "middleName" || field.name === "surName") {
          value = formData.fullname[field.name];
        } else if (field.name === "building" || field.name === "city" || field.name === "taluka" || field.name === "district" || field.name === "state") {
          value = formData.address[field.name];
        } else if (field.name === "medicationName") {
          value = formData.medication.name;
        } else if (field.name === "medicationFrequency") {
          value = formData.medication.frequency;
        } else {
          value = formData[field.name];
        }
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
        return (
          <Input
            type="text"
            label={field.name.charAt(0).toUpperCase() + field.name.slice(1)}
<<<<<<< HEAD
            value={formData[field.name]}
=======
            value={value}
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            errorMessage={errors[field.name]}
            isInvalid={!!errors[field.name]}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`w-1/5 h-2 rounded ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: index <= currentStep ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
          <p className="text-center font-semibold">{steps[currentStep].title}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {steps[currentStep].fields.map((field) => (
              <div key={field.name} className="mb-4">
                {renderField(field)}
              </div>
            ))}
          </motion.div>
          <div className="flex justify-between mt-6">
<<<<<<< HEAD
            <Button onClick={prevStep} disabled={currentStep === 0}>Previous</Button>
=======
            <Button onClick={prevStep} disabled={currentStep === 0 || isSubmitting}>Previous</Button>
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
            <Button 
              type={currentStep === steps.length - 1 ? "submit" : "button"} 
              color={currentStep === steps.length - 1 ? "primary" : "default"}
              onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
<<<<<<< HEAD
            >
              {currentStep === steps.length - 1 ? "Register" : "Next"}
=======
              disabled={isSubmitting}
            >
              {currentStep === steps.length - 1 ? (isSubmitting ? "Registering..." : "Register") : "Next"}
>>>>>>> ac079be7c37a6ec449d84e94576e5076a322d3ab
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
        </div>
      </motion.div>
    </div>
  );
}