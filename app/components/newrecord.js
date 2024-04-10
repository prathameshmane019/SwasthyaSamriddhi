"use client"
import React, { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useSession } from 'next-auth/react';


export default function RegisterHealthRecordComponent({ search }) {
  const [formData, setFormData] = useState({
    
    diagnosis: "",
    prescription: "",
    status: "",
    notes: "",
  });
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const { data: session, status } = useSession(); // Using useSession hook

  useEffect(() => {
    const fetchDoctorId = async () => {
      if (session) {
        console.log("Session:", session);
        if (session.user && session.user.id) {
          setDoctorId(session.user.id);
        } else {
          console.log("Doctor ID not found in session");
        }
      } else {
        console.log("Session not available");
      }
    };

    fetchDoctorId();
  }, [session]);

  useEffect(() => {
    setPatientId(search.id);
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const result = await axios.post("/api/records/newrecord", {
        ...formData,
        patientId,
        doctorId,
      });
      console.log(result);
      console.log();
    } catch (error) {
      console.log("HealthRecord Registration failed");
    }
  };

  const handleCancel = () => {
    setFormData({
   
      diagnosis: "",
      prescription: "",
      status: "",
      notes: "",
    });
  };

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  if (status === "loading") {
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
           <div className="flex justify-between">
            <Button color="default"  onClick={handleCancel} className="w-1/2 m-2">Cancel</Button>
            <Button color="primary" type="submit" className="w-1/2 m-2">Add Record</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
