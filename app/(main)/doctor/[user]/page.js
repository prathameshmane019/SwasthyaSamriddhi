// pages/users/[userId].js
"use client"
import { useRouter } from 'next/navigation';

const UserDetails = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetails;
