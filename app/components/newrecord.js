"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";

export default function RegisterHealthRecordComponent() {
  const [visitDate, setVisitDate] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      visitDate,
      diagnosis,
      prescription,
      status,
      notes,
      patientId,
      doctorId,
    };

    try {
      const result = await axios.post("/api/records/newrecord", formData);
      console.log(result);
    } catch (error) {
      console.log("HealthRecord Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-6xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Register Health Record</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <Input
              type="date"
              variant="bordered"
              label="Visit Date"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              variant="bordered"
              label="Diagnosis"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              variant="bordered"
              label="Prescription"
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              variant="bordered"
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              variant="bordered"
              label="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              variant="bordered"
              label="Patient ID"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              variant="bordered"
              label="Doctor ID"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="col-span-2">
            <Button color="primary" className="w-full" type="submit">
              Register Health Record
            </Button>
          </div>
        </div>
        <div className="mt-2 ">
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
