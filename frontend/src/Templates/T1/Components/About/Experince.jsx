import React from 'react';
import "../../GlobalT1.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";
import { useSelector } from 'react-redux';

function Experience() {
  const experienceData = useSelector((state) => state.formData.experience);

  return (
    <div className="education">
      <h2>{"<Experience />"}</h2>
      <Timeline
        events={experienceData.map((exp) => ({
          date: `${exp.startDate} - ${exp.endDate}`,
          title: exp.role,
          description: `${exp.company}`,
        }))}
      />
    </div>
  );
}

export default Experience;
