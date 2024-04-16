"use client"
import { useState } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import axios from 'axios';
import  Footer  from '@/app/components/footer';
import {  toast } from 'sonner'
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    toast.success('Thank you for contacting us')
    
    setFormData({ name: '', email: '', message: '' });
    console.log(formData);
    const result = await axios.post("/api/contact",formData);
  };

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className=" shadow-md rounded-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            variant='bordered'
            value={formData.name}
            onChange={handleChange}
            className="mb-4"
          />
          
          <Input
            label="Email"
            type="email"
            name="email"
            variant='bordered'
            value={formData.email}
            onChange={handleChange}
            className="mb-4"
          />
          <Textarea
            label="Message"
            name="message"
            variant='bordered'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mb-4"
          />
          <div className="flex justify-center"> 
            <Button
              type="submit"
              className="bg-indigo-600  px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </Button>
          </div>
        </form>
        
      </div>
      
    </div>
    <Footer/></>
  );
};

export default Contact;
