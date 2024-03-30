"use client"
import { useState } from 'react';
export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('profile');

    const userProfile = {
        userId: "U032400001",
        password: "********",
        firstName: "John",
        middleName: "Doe",
        surName: "Smith",
        adharCard: "1234 5678 9012",
        email: "johndoe@example.com",
        dob: "01/01/1990",
        gender: "Male",
        mobile: "1234567890",
        bloodGroup: "O+",
        building: "123 Street",
        city: "City",
        taluka: "Taluka",
        district: "District",
        state: "State",
        pincode: "123456",
        allergies: "Peanuts",
        medicationName: "Paracetamol",
        medicationFrequency: "Once a day",
        confirmPassword: "********"
    };

    const userHealthRecords = [
        {
            doctorId: "D123",
            visitDate: "2024-03-30",
            diagnosis: "Fever",
            prescription: "Paracetamol",
            status: "Active",
            notes: "Follow up after one week"
        },
        {
            doctorId: "D124",
            visitDate: "2024-03-25",
            diagnosis: "Cold",
            prescription: "Antibiotics",
            status: "Closed",
            notes: "Take rest and plenty of fluids"
        }
    ];

    return (
        <div className="dashboard-container">
            
            <div className="content">
                {activeTab === 'profile' && (
                    <div>
                        <h2>Profile</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>User ID:</td>
                                    <td>{userProfile.userId}</td>
                                </tr>
                                <tr>
                                    <td>First Name:</td>
                                    <td>{userProfile.firstName}</td>
                                </tr>
                                <tr>
                                    <td>Middle Name:</td>
                                    <td>{userProfile.middleName}</td>
                                </tr>
                                <tr>
                                    <td>Surname:</td>
                                    <td>{userProfile.surName}</td>
                                </tr>
                                <tr>
                                    <td>Adhar Card:</td>
                                    <td>{userProfile.adharCard}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{userProfile.email}</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth:</td>
                                    <td>{userProfile.dob}</td>
                                </tr>
                                <tr>
                                    <td>Gender:</td>
                                    <td>{userProfile.gender}</td>
                                </tr>
                                <tr>
                                    <td>Mobile:</td>
                                    <td>{userProfile.mobile}</td>
                                </tr>
                                <tr>
                                    <td>Blood Group:</td>
                                    <td>{userProfile.bloodGroup}</td>
                                </tr>
                                <tr>
                                    <td>Building:</td>
                                    <td>{userProfile.building}</td>
                                </tr>
                                <tr>
                                    <td>City:</td>
                                    <td>{userProfile.city}</td>
                                </tr>
                                <tr>
                                    <td>Taluka:</td>
                                    <td>{userProfile.taluka}</td>
                                </tr>
                                <tr>
                                    <td>District:</td>
                                    <td>{userProfile.district}</td>
                                </tr>
                                <tr>
                                    <td>State:</td>
                                    <td>{userProfile.state}</td>
                                </tr>
                                <tr>
                                    <td>Pincode:</td>
                                    <td>{userProfile.pincode}</td>
                                </tr>
                                <tr>
                                    <td>Allergies:</td>
                                    <td>{userProfile.allergies}</td>
                                </tr>
                                <tr>
                                    <td>Medication Name:</td>
                                    <td>{userProfile.medicationName}</td>
                                </tr>
                                <tr>
                                    <td>Medication Frequency:</td>
                                    <td>{userProfile.medicationFrequency}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'healthRecord' && (
                    <div>
                        <h2>Health Record</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Doctor ID</th>
                                    <th>Visit Date</th>
                                    <th>Diagnosis</th>
                                    <th>Prescription</th>
                                    <th>Status</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userHealthRecords.map((record, index) => (
                                    <tr key={index}>
                                        <td>{record.doctorId}</td>
                                        <td>{record.visitDate}</td>
                                        <td>{record.diagnosis}</td>
                                        <td>{record.prescription}</td>
                                        <td>{record.status}</td>
                                        <td>{record.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <style jsx>{`
                .dashboard-container {
                    display: flex;
                }
                .sidebar {
                    width: 200px;
                    background-color: #f2f2f2;
                    padding: 20px;
                    border-right: 1px solid #ccc;
                }
                .content {
                    flex: 1;
                    padding: 20px;
                }
                button {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ccc;
                    padding: 8px;
                    text-align: left;
                }
            `}</style>
        </div>
    );
}
