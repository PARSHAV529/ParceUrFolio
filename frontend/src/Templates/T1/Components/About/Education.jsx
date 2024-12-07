import React from "react";
import { useSelector } from "react-redux";
import Timeline from "../Timeline/Timeline";

function Education({ theme }) {
  const educationData = useSelector((state) => state.formData.education);

  return (
    <div className={`border ${theme.borderColor} min-h-[630px] w-[50%] ${theme.backgroundColor}`}>
      <h2 className={`font-semibold py-5 text-center ${theme.textColor}`}>{"<Education />"}</h2>
      <Timeline
        events={educationData.map((edu) => ({
          date: `${edu.startDate} to ${edu.endDate}`,
          title: edu.degree,
          description: `${edu.institute} (Marks: ${edu.marks}%)`,
        }))}
        theme={theme}
      />
    </div>
  );
}

export default Education;
