import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBasicInfo } from "@/redux/formDataSlice";

const Hero = () => {
  const [githubUsername, setGithubUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.formData.basicInfo);

  const fetchGitHubData = async () => {
    setError("");
    try {
      const response = await fetch(`https://api.github.com/users/${githubUsername}`);
      if (!response.ok) {
        throw new Error("User not found!");
      }
      const data = await response.json();

      // Dispatching data to Redux
      dispatch(
        setBasicInfo({
          githubUsername:githubUsername || "",
          name: data.name || "",
          city: data.location || "",
          profileImage: data.avatar_url || "",
        })
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = () => {
    navigate("/GettingStarted");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-r flex justify-center items-center from-blue-50 to-blue-100"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center items-center h-[70vh]"
      >
        <div className="flex flex-col items-center gap-y-10">
          <h1 className="text-center text-4xl lg:text-6xl font-extrabold text-blue-900">
            Create Your Portfolio in Minutes
          </h1>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="box w-full lg:w-[600px] px-5 py-10 flex flex-col items-center rounded-xl justify-center bg-white shadow-lg"
          >
            <h2 className="text-xl lg:text-2xl font-medium text-gray-700 mb-6 text-center">
              Showcase your skills and projects effortlessly!
            </h2>

            <motion.input
              type="text"
              placeholder="Enter your GitHub username"
              className="p-3 border rounded w-80 text-center focus:ring-2 focus:ring-blue-400"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                className="text-white bg-blue-600 p-2 mt-4 text-lg rounded-lg hover:bg-blue-700"
                onClick={fetchGitHubData}
              >
                Get Data
              </Button>
            </motion.div>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            {userDetails.name && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-5 w-full flex flex-col items-center bg-blue-50 p-5 rounded-lg shadow-md"
              >
                <img
                  src={userDetails.profileImage}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full border-2 border-blue-600 mb-3"
                />
                <h2 className="text-lg font-semibold text-blue-800">
                  {userDetails.name}
                </h2>
                <p className="text-sm text-gray-600">{userDetails.city}</p>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    className="text-white bg-green-500 p-2 text-lg mt-4 rounded-lg hover:bg-green-600"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

    
    </motion.div>
  );
};

export default Hero;
