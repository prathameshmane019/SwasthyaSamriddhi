"use client"

import React, { useState } from 'react';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [showAddRecordForm, setShowAddRecordForm] = useState(false);

    const fetchUsers = async () => {
    };

    // Function to show or hide the add record form
    const toggleAddRecordForm = () => {
        setShowAddRecordForm(!showAddRecordForm);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Doctor Dashboard</h1>

            <h2 className="text-2xl font-bold mb-4">Users:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
            </ul>

            <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchUsers}>
                Fetch Users
            </button>

            <button className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAddRecordForm}>
                {showAddRecordForm ? 'Hide Add Health Record Form' : 'Show Add Health Record Form'}
            </button>

            {showAddRecordForm && (
                <div className="mt-8">
                </div>
            )}
        </div>
    );
};

export default Dashboard;
