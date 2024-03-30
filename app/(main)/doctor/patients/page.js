"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchUser = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    // Here you would implement logic to search for the user in the database by ID
    // For simplicity, let's assume you have a function called searchUserById

    // searchUserById(searchQuery);

    // Once the user is found, you can redirect to the Add Health Record page
    router.push(`/addHealthRecord?id=${searchQuery}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search for a User</h1>
      <div className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter user's ID"
          className="border p-2 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchUser;
