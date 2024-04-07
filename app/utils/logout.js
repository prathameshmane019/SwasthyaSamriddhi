"use client"
import { signOut } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slice';

export const Loguout = async () => {
  try {
    // Log out the user from NextAuth session
    await signOut({ redirect: false, callbackUrl: '/' });

    const dispatch = useDispatch();
    dispatch(logout());
    clearUserFromLocalStorage();
    window.location.replace("/")
  } catch (error) {
    console.error('Logout Error:', error);
  }
};
