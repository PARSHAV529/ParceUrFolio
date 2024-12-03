// src/components/SelectTemplate.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectTemplate() {
  const templates = [
    { name: 'Minimalist', path: '/template/minimalist' },
    { name: 'Creative', path: '/template/creative' },
    { name: 'Professional', path: '/template/professional' },
    { name: 'Dark Theme', path: '/template/dark-theme' },
    { name: 'Timeline', path: '/template/timeline' },
  ];

  const navigate = useNavigate();

  const handleSelectTemplate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Select Your Portfolio Template</h1>
      {templates.map((template, index) => (
        <button key={index} onClick={() => handleSelectTemplate(template.path)}>
          {template.name}
        </button>
      ))}
    </div>
  );
}
