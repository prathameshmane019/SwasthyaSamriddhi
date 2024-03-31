import React from 'react';

// UserProfilePage component
const UserProfilePage = () => {
    // Example user profile data
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

    return (
        <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-2xl font-semibold text-center py-4 bg-gray-800 text-white">Profile</h2>
                <table className="w-full">
                    <tbody>
                        {Object.entries(userProfile).map(([key, value], index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                <td className="py-2 px-4 font-medium text-gray-600">{key}</td>
                                <td className="py-2 px-4">{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserProfilePage;
