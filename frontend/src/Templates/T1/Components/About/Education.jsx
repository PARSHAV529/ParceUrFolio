import React from 'react';
import "../../GlobalT1.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";
import { useSelector } from 'react-redux';

function Education() {
  const educationData = useSelector((state) => state.formData.education);

  return (
    <div className="education">
      <h2>{"<Education />"}</h2>
      <Timeline
        events={educationData.map((edu) => ({
          date: `${edu.startDate} to ${edu.endDate}`,
          title: edu.degree,
          description: `${edu.institute} (Marks: ${edu.marks}%)`,
        }))}
      />
    </div>
  );
}

export default Education;
