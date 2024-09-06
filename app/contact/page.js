"use client"
import { useState } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import axios from 'axios';
import Footer from '@/app/components/footer';
import { toast } from 'sonner';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success('Thank you for contacting us');
    setFormData({ username: '', email: '', message: '' });
    console.log(formData);
    const result = await axios.post("/api/contact", formData);
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="p-8 w-full max-w-4xl">
        <div className="flex items-center">
          <div className="w-1/2 pr-4">
            <div className="relative">
              {/* Placeholder for the illustration */}
              <div className="w-full h-64  rounded-2xl flex items-center justify-center">
                <Image height={400} width={400 } src="/contact-image.svg"></Image>
              </div>
    
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <Input
                label="Username"
                name="username"
                variant="bordered"
                value={formData.username}
                onChange={handleChange}
                className="mb-4"
              />
              <Input
                label="Email"
                type="email"
                name="email"
                variant="bordered"
                value={formData.email}
                onChange={handleChange}
                className="mb-4"
              />
              <Textarea
                label="Message..."
                name="message"
                variant="bordered"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mb-4"
              />
              <Button
                 type="submit"
  className="w-full bg-[#065f46] text-white py-2 rounded-lg hover:bg-[#065f46] transition duration-300"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;