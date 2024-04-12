"use client"
import React, { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useSession } from 'next-auth/react';
import {toast} from 'sonner'

export default function RegisterHealthRecordComponent({ search }) {
  const [formData, setFormData] = useState({
    
    diagnosis: "",
    prescription: "",
    status: "",
    notes: "",
    image:"",
  });
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const { data: session, status } = useSession(); // Using useSession hook
const [file,setFile]=useState("");
  useEffect(() => {
    const fetchDoctorId = async () => {
      if (session) {
        console.log("Session:", session);
        if (session.user && session.user.id) {
          setDoctorId(session.user.id);
        } else {
          console.log("Doctor ID not found in session");
          toast.warning("Doctor ID not found in session");
          
        }
      } else {
        console.log("Session not available");
        toast.error("Session not available");
      }
    };

    fetchDoctorId();
  }, [session]);

  useEffect(() => {
    setPatientId(search.id);
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log (file);
   const data = new FormData();
   data.set('file',file);
    try {
      const result = await axios.post("/api/records/newrecord", {
        ...formData,
        patientId,
        doctorId,
        method:"POST",
        body:data
      });
      result = await result.json();
       console.log(result);
       if(result.success){
        alert("file upload")
       }
      handleCancel()
      toast.success("HealthRecord Added Successfully")
      console.log(result);
      console.log();
     
    } catch (error) {
      console.log("HealthRecord Registration failed");
      toast.error("HealthRecord Registration failed");
    }
  };

  const handleCancel = () => {
    setFormData({
   
      diagnosis: "",
      prescription: "",
      status: "",
      notes: "",
      image:"",
    });
  };

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  if (status === "loading") {
    const promise = () => new Promise((resolve) => resolve("Record has been added"));

    return <div>Loading...</div>;

  }

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register Health Record</h2>
        <div className="grid grid-cols-1 gap-6">
       
          
          <Input
            type="text"
            variant="bordered"
            label="Diagnosis"
            value={formData.diagnosis}
            onChange={(e) => handleChange(e, "diagnosis")}
          />
          <Input
            type="text"
            variant="bordered"
            label="Prescription"
            value={formData.prescription}
            onChange={(e) => handleChange(e, "prescription")}
          />
          <Input
            type="text"
            variant="bordered"
            label="Status"
            value={formData.status}
            onChange={(e) => handleChange(e, "status")}
          />
          <Input
            type="text"
            variant="bordered"
            label="Notes"
            value={formData.notes}
            onChange={(e) => handleChange(e, "notes")}
          />
           <Input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0])}
            
          />
           <div className="flex justify-between">
            <Button color="default"  onClick={handleCancel} className="w-1/2 m-2">Cancel</Button>
            <Button color="primary" type="submit" className="w-1/2 m-2">Add Record</Button>
          </div>
        </div>
      </form>
    </div>
  );
}





