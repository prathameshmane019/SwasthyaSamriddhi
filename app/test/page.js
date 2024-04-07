
"use client"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUserFromLocalStorage } from '@/app/redux/slice';
import { selectUser } from '@/app/redux/slice';
import { fetchUserById } from '../libs/fetchuser';

const MyComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());

    const fetchData = async () => {
      if (user) {
        console.log(user.id);
        try {
          const userFromServer =  dispatch(fetchUserById(user.id));
          console.log(userFromServer);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {user ? (
        <div>
          <p>User ID: {user._id}</p>
          <p>Full Name: {user.fullname.firstName} {user.fullname.middleName} {user.fullname.surName}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <p>Address: {user.address.building}, {user.address.city}, {user.address.taluka}, {user.address.district}, {user.address.state}, {user.address.pincode}</p>
          <p>Adhar Card: {user.adharCard}</p>
          <p>Allergies: {user.allergies}</p>
          <p>Blood Group: {user.bloodGroup}</p>
          <p>Date of Birth: {new Date(user.dob).toLocaleDateString()}</p>
          <p>Gender: {user.gender}</p>
          <p>Password: {user.password}</p>
          {/* You can continue displaying other user information */}
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default MyComponent;
