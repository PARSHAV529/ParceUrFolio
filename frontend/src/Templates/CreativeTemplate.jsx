// src/components/templates/CreativeTemplate.js
import React from 'react';
import { useSelector } from 'react-redux';
import Tempalte1 from './T1/Components/Template1';

export default function CreativeTemplate() {
  const formData = useSelector((state) => state.formData);

  return (
   <Tempalte1 formData={formData}/>
  // <div>helo</div>
  );
}

