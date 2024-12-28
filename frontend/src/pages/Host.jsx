import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Host = () => {
  // Access form data, theme, and template from Redux
  const formData = useSelector((state) => state.formData);
  const theme = useSelector((state) => state.theme); // assuming theme is stored in redux
  const template = useSelector((state) => state.template); // assuming template is stored in redux

  console.log(formData);
  console.log(theme);
  console.log(template);

  const handleHost = async () => {
    try {
      // Merge formData, theme, and template
      const dataToSend = {
        formData, // Merge formData
         theme, // Add theme data
         template, // Add template data
      };

      // Send the merged data to the backend API
      const response = await axios.post("http://localhost:5000/api/host", dataToSend);
      if (response.status === 200) {
        alert("Portfolio hosted successfully!");
      }
    } catch (error) {
      console.error("Error hosting portfolio:", error);
      alert("Failed to host portfolio. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Host Your Portfolio
        </h2>
        <div className="text-gray-700 mb-4">
          <p><strong>Name:</strong> {formData.basicInfo.name}</p>
          <p><strong>Email:</strong> {formData.basicInfo.email}</p>
          <p><strong>GitHub Username:</strong> {formData.basicInfo.githubUsername}</p>
          <p><strong>About Me:</strong> {formData.basicInfo.aboutMe}</p>
        </div>
        <Button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          onClick={handleHost}
        >
          Host Portfolio
        </Button>
      </div>
    </div>
  );
};

export default Host;
