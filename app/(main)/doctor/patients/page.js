"use client"
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const SearchUser = () => {
  const [id, setId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/finduser?id=${id}`);
      const userData = response.data;
      setUserData(userData);
      setError(null);
    } catch (error) {
      setUserData(null);
      setError("User not found");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search for a User</h1>
      <div className="flex items-center">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter user's ID"
          className="border p-2 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      {userData && (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{userData._id}</div>
              <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900">{userData.fullname.firstName} {userData.fullname.middleName} {userData.fullname.surName}</div>
              <p className="mt-2 text-gray-600">{userData.mobile}</p>
            </div>
            <Link href={{pathname:'/doctor/patients/addrecords',
              query:{
                id:id
              } }
                  }
                      className="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-auto mr-4">View Health Record</Link>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SearchUser;