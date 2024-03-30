const DoctorProfile = () => {
    const doctor = {
        "fullname": {
            "firstName": "Aishwarya",
            "middleName": "Kapil",
            "surName": "Deshmukh"
        },
        "hospitalDetails": {
            "hospitalAddress": {
                "building": "bveh",
                "city": "bfbwb",
                "taluka": "bbfb",
                "district": "bbhfbhbr",
                "state": "Maharashtra",
                "pincode": 413304
            },
            "hospitalName": "vfhrhfhrb",
            "hospitalContactNo": "08788761515"
        },
        "_id": "D300324000001",
        "adharCard": "123321123",
        "email": "deshukhaishwarya484@gmail.com",
        "dob": "2004-03-26T00:00:00.000Z",
        "mobile": "715896336",
        "gender": "female",
        "degree": "MBBS",
        "specialization": "vbb",
        "licenseNumber": "k734445",
        "createdAt": "2024-03-30T08:03:10.475Z",
        "updatedAt": "2024-03-30T08:03:10.475Z",
        "__v": 0,
        "password": "1234"
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Doctor Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Personal Information</h3>
                        <p className="text-sm text-gray-600">Name: {doctor.fullname.firstName} {doctor.fullname.middleName} {doctor.fullname.surName}</p>
                        <p className="text-sm text-gray-600">Gender: {doctor.gender}</p>
                        <p className="text-sm text-gray-600">Date of Birth: {new Date(doctor.dob).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-600">Mobile: {doctor.mobile}</p>
                        <p className="text-sm text-gray-600">Email: {doctor.email}</p>
                        <p className="text-sm text-gray-600">Aadhar Card: {doctor.adharCard}</p>
                    </div>
                </div>

                <div>
                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Professional Information</h3>
                        <p className="text-sm text-gray-600">Degree: {doctor.degree}</p>
                        <p className="text-sm text-gray-600">Specialization: {doctor.specialization}</p>
                        <p className="text-sm text-gray-600">License Number: {doctor.licenseNumber}</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Hospital Information</h3>
                        <p className="text-sm text-gray-600">Hospital Name: {doctor.hospitalDetails.hospitalName}</p>
                        <p className="text-sm text-gray-600">Contact Number: {doctor.hospitalDetails.hospitalContactNo}</p>
                        <p className="text-sm text-gray-600">Address: {doctor.hospitalDetails.hospitalAddress.building}, {doctor.hospitalDetails.hospitalAddress.city}, {doctor.hospitalDetails.hospitalAddress.taluka}, {doctor.hospitalDetails.hospitalAddress.district}, {doctor.hospitalDetails.hospitalAddress.state} - {doctor.hospitalDetails.hospitalAddress.pincode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
