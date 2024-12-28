// src/components/SelectTemplate.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion for animations

export default function SelectTemplate() {
  const templates = [
    { name: 'Minimalist', path: '/template/minimalist' },
    { name: 'Creative', path: '/template/creative' },
    // { name: 'Professional', path: '/template/professional' },
    // { name: 'Dark Theme', path: '/template/dark-theme' },
    // { name: 'Timeline', path: '/template/timeline' },
  ];

  const navigate = useNavigate();

  const handleSelectTemplate = (path) => {
    navigate(path);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-md shadow-md mt-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-6 text-center text-gray-800"
      >
        Select Your Portfolio Template
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              onClick={() => handleSelectTemplate(template.path)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Choose this template for a sleek and modern portfolio look.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
