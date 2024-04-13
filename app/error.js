/* use client */

import { useState } from 'react';
import Link from 'next/link';

const UploadPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
        setErrorMessage('');
      };
      
      reader.onerror = () => {
        setErrorMessage('Error uploading image.');
      };
      
      reader.readAsDataURL(file);
    } else {
      setErrorMessage('Please upload a valid image file.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Upload Background Image</h1>
      
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="mb-4"
      />
      
      {backgroundImage && (
        <div 
          className="w-full h-500px bg-cover bg-no-repeat mt-4"
          style={{ backgroundImage: `url(/bg5-1.svg)` }}
        />
      )}

      {errorMessage && <p className="text-red-500 mt-4">OOPS Page Not found!!</p>}

      <Link href="/">
        <a className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Return to Home Page
        </a>
      </Link>
    </div>
  );
};

export default UploadPage;
