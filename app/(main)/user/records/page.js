import React from 'react';

const UserRecords = () => {
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
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">Health Records</h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="border-b">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visit Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnosis</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prescription</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {userHealthRecords.map((record, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap">{record.doctorId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.visitDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.diagnosis}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.prescription}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserRecords;
