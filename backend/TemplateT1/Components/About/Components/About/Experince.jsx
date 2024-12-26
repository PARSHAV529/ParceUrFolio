import React from "react";
import { useSelector } from "react-redux";
import Timeline from "../Timeline/Timeline";

function Experience({ theme }) {
  const experienceData = useSelector((state) => state.formData.experience);

  return (
    <div className={`border ${theme.borderColor} min-h-[630px] w-[50%] ${theme.backgroundColor}`}>
      <h2 className={`font-semibold py-5 text-center ${theme.textColor}`}>{"<Experience />"}</h2>
      <Timeline
        events={experienceData.map((exp) => ({
          date: `${exp.startDate} to ${exp.endDate}`,
          title: exp.position,
          description: `${exp.company} (Location: ${exp.location})`,
        }))}
        theme={theme}
      />
    </div>
  );
}

export default Experience;
