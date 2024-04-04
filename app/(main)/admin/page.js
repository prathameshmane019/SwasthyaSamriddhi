"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody } from '@nextui-org/react';

function Dashboard() {
  const [recordCount, setRecordCount] = useState("Loading");
  const [userCount, setUserCount] = useState("Loading");
  const [doctorCount, setDoctorCount] = useState("Loading");

  useEffect(() => {
    fetchData();
    fetchUserCount();
    fetchDoctorCount();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/admin/allrecords');
      setRecordCount(response.data.length);
    } catch (error) {
      console.error('Error fetching record data:', error);
    }
  };

  const fetchUserCount = async () => {
    try {
      const response = await axios.get('/api/admin/users');
      setUserCount(response.data.length);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchDoctorCount = async () => {
    try {
      const response = await axios.get('/api/admin/doctors');
      setDoctorCount(response.data.length);
    } catch (error) {
      console.error('Error fetching doctor data:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center my-8">Dashboard</h1>

      <div className="grid grid-cols-3 gap-8">
        <Card shadow className="max-w-sm">
          <CardBody className="text-center">
            <h5 className="mb-4">Total Records</h5>
            <h2>{recordCount}</h2>
          </CardBody>
        </Card>

        <Card shadow className="max-w-sm">
          <CardBody className="text-center">
            <h5 className="mb-4">Total Users</h5>
            <h2>{userCount}</h2>
          </CardBody>
        </Card>

        <Card shadow className="max-w-sm">
          <CardBody className="text-center">
            <h5 className="mb-4">Total Doctors</h5>
            <h2>{doctorCount}</h2>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
