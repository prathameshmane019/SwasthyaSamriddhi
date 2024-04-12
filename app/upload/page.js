"use client"
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import axios from "axios";

export default function Home() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setSelectedImages(acceptedFiles);
    console.log(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop });

  const onUpload = async () => {
    setUploadStatus("Uploading....");
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("image", image);
    })
    try {
      const response = await axios.post("/api/upload", formData);
      console.log(response.data);
      setUploadStatus("Upload successful");
    } catch (error) {
      console.log("imageUpload" + error);
      setUploadStatus("Upload failed..");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragActive ? "border-blue-500" : ""
        }`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      {selectedImages.length > 0 && (
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onUpload}
          >
            Upload to Cloudinary
          </button>
          <p className="mt-2">{uploadStatus}</p>
        </div>
      )}
    </div>
  );
}
