"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input, Button } from '@nextui-org/react';
import { signIn, useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner'

export default function LoginComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const toggleVisibility = () => setIsVisible(!isVisible);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.role === "user") {
      router.replace("/user");
    }
    if (session?.user?.role === "doctor") {
      router.replace("/doctor");      
    }
    if (session?.user?.role === "medical") {
      router.replace("/medical");      
    }
    if (session?.user?.role === "admin") {
      router.replace("/admin");      
    }
  }, [session, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        userId,
        password,
        redirect: false,
      });
      
      if (result.ok) {
        console.log('Login Successful !');
        toast.success('Login Successful');
      }
    } catch (error) {
      console.error('Failed to login', error);
      toast.error('Failed to login');
    }
  };

  const handleCancel = () => {
    setUserId('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex w-full max-w-4xl bg-white overflow-hidden">
        <div className="w-1/2 p-8 flex items-center justify-center ">
          <Image
            src="login.svg"
            alt="Login illustration"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="w-1/2 p-8">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <Input
              type="text"
              variant="bordered"
              label="User Id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="mb-4"
            />
            <Input
              label="Password"
              variant="bordered"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-6"
            />
            <div className="flex justify-center space-x-4">
              <Button color="default" onClick={handleCancel} className="w-36">
                Cancel
              </Button>
              <Button color="primary" type="submit" className="w-36">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}