import React, { useState, useRef } from 'react';
import { SlCloudUpload } from 'react-icons/sl';

const FileDropzone = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (onFileUpload) {
      onFileUpload(selectedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const selectedFile = event.dataTransfer.files[0];
    setFile(selectedFile);
    if (onFileUpload) {
      onFileUpload(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Handle file upload process here
      console.log('Uploading file:', file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4">
      <form onSubmit={handleSubmit}>
        <div
          className={`mb-4 p-4  rounded-lg flex flex-col items-center justify-center ${
            dragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center">
            <SlCloudUpload className=" mb-4 text-8xl text-light-gray" />
            <span className="text-blue-500 hover:underline">
              {file ? file.name : 'Drag & Drop your file here or click to upload'}
            </span>
          </label>
          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-dark-yellow py-3 px-10 font-bold rounded-lg text-black cursor-pointer mt-10"
          >
            Upload Contract File(s)
          </button>
        </div>
        {file && (
          <div className="mb-4 text-center">
            {/* <p className="text-gray-700">Selected file: {file.name}</p> */}
          </div>
        )}
      </form>
    </div>
  );
};

export default FileDropzone;
