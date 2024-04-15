"use client"
import React, { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner"
export default function RegisterHealthRecordComponent({ search }) {
  const [formData, setFormData] = useState({
    diagnosis: "",
    prescription: "",
    status: "",
    notes: "",
  });
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [file, setFile] = useState(null);
  const { data: session, status } = useSession(); 
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
  const handleCancel = () => {
    setFormData({
      diagnosis: "",
      prescription: "",
      status: "",
      notes: "",
      file: ""
    });
    setFile(null)
  };
  useEffect(() => {
    setPatientId(search.id);
  }, [search]);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(file);
    const formDataWithImage = new FormData();
    formDataWithImage.append("patientId", patientId);
    formDataWithImage.append("doctorId", doctorId);
    formDataWithImage.append("diagnosis", formData.diagnosis);
    formDataWithImage.append("prescription", formData.prescription);
    formDataWithImage.append("status", formData.status);
    formDataWithImage.append("notes", formData.notes);
    formDataWithImage.append("image", file);

    try {
      const response = await axios.post("/api/records/newrecord", formDataWithImage, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    
      console.log(response);
      handleCancel()
      toast.success("HealthRecord Added Successfully")
    }
    catch (err) {
      console.error("record upload failed", err);
      toast.error("record upload failed");
    }
  };

  return (
    <div className="flex justify-center items-center  min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-lg w-full p-8  rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register Health Record</h2>
        <div className="grid grid-cols-1 gap-6">
          <Input
            type="text"
            variant="bordered"
            label="Diagnosis"
            value={formData.diagnosis}
            onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
          />
          <Input
            type="text"
            variant="bordered"
            label="Prescription"
            value={formData.prescription}
            onChange={(e) => setFormData({ ...formData, prescription: e.target.value })}
          />
          <Input
            type="text"
            variant="bordered"
            label="Status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          />
          <Input
            type="text"
            variant="bordered"
            label="Notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
          <div className="grid grid-cols-1 gap-6">
          <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragActive ? "border-blue-500" : ""}`}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <>
              <p>Add Files if available</p>
                {file && <><p>{file.name}</p><img src={URL.createObjectURL(file)} alt="Selected" className="max-w-full h-auto mt-4" /></>}
              </>
            )}
            </div>
            </div>
            <div className="flex justify-between">
              <Button color="default" type="button" onClick={handleCancel} className="w-1/2 m-2">
                Cancel
              </Button>
              <Button color="primary" type="submit" className="w-1/2 m-2">
                Add Record
              </Button>
            </div>
          </div>
      </form>
    </div>
  );
}

