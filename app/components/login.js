'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input, Button } from "@nextui-org/react";
import { signIn,useSession } from "next-auth/react";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './../redux/slice';
// import Doctor from "../models/doctor";
import User from "../models/user";
import { useRouter } from "next/navigation";
export default  function LoginComponent () {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
const [user,setUser]= useState({});
  const toggleVisibility = () => setIsVisible(!isVisible);
  const dispatch = useDispatch();
  const { data: session } = useSession(); 


  // const user = useSelector((state) => state.user.user); // Get the user from Redux state
  useEffect(() => {
   
    if (user) {
      dispatch(login(user)); 
      // Dispatch action to store user in Redux state
    } else {
      dispatch(logout()); // Dispatch action to clear user from Redux state
    }
    if(session?.user?.role=="user"){
      router.replace("/user")
    }
    if(session?.user?.role=="doctor"){
      router.replace("/doctor")
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
        const userData = await User.findOne({userId:userId})
        setUser(userData);
        console.log("Login Successfull");
      }
    } catch (error) {
      console.log("Failed to login", error);
    }

  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit}>
        <div className="w-100 p-9 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <Input
            type="text"
            variant="bordered"
            label="User Id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mb-4"
            style={{ width: "100%" }}
          />
          <Input
            label="Password"
            variant="bordered"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
            style={{ width: "100%" }}
          />
          <Button color="primary" className="w-full" type="submit">
            Login
          </Button>
          <div className="mt-2">
            <p className="text-sm">Don't have an account? <Link href="/register" className="text-blue-500">Register</Link></p>
          </div> </div>
      </form>
    </div>
  );
}
