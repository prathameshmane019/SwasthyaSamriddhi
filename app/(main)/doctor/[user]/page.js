// pages/users/[userId].js

import { useRouter } from 'next/navigation';

const UserDetails = () => {
  const router = useRouter();
  const { userId } = router.query;

  // Here you would fetch user information based on userId
  // For demonstration purposes, let's assume you have a function to fetch user info

  // const userInfo = fetchUserInfo(userId);

  // Once you have the user information, you can render it
  // For now, let's just display the userId

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetails;
