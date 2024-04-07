"use client"
import { signOut } from 'next-auth/react';

export const Logout = async () => {
  try {
    await signOut();
    window.location.replace("/")
  } catch (error) {
    console.error('Logout Error:', error);
  }
  return 
};
