import React, { useState } from "react";
import { BasicInfoForm } from "./GettingStarted/BasicInfoForm";
import { EducationForm } from "./GettingStarted/EducationForm";
import { ExperienceForm } from "./GettingStarted/ExperienceForm";
import { SkillsForm } from "./GettingStarted/SkillsForm";
import { ProjectsForm } from "./GettingStarted/ProjectsForm";
import { TabNavigation } from "./GettingStarted/TabNavigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {  useSelector } from "react-redux";

export default function GettingStarted() {
  const [activeTab, setActiveTab] = useState(0);
  const reduxData = useSelector(s=>s.formData)


  // const [formData, setFormData] = useState({
  //   basicInfo: {
  //     name: "John Doe",
  //     email: "john@example.com",
  //     jobTitle: "Developer",
  //     city: "New York",
  //     phone: "123-456-7890",
  //   },
  //   education: [
  //     {
  //       degree: "BSc Computer Science",
  //       institute: "XYZ University",
  //       startDate: "2018-01-01",
  //       endDate: "2022-12-31",
  //       marks: "80%",
  //     },
  //   ],
  //   experience: ["Intern at ABC Corp", "Freelancer"],
  //   skills: ["JavaScript", "React", "Node.js"],
  //   projects: [
  //     { name: "Project One", description: "Description of project one", link: "http://example.com" },
  //   ],
  // });
  

  const navigate = useNavigate(); // Use navigate hook to navigate between pages
  
  
 

  const isTabValid = () => {
    switch (activeTab) {
      case 0:
        return Object.values(reduxData.basicInfo).every((field) => field.trim() !== "");
      case 1:
        return reduxData.education.length > 0;
      case 2:
        return reduxData.experience.length > 0;
      case 3:
        return reduxData.skills.length > 0;
      case 4:
        return reduxData.projects.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isTabValid()) {
      // dispatch(
      //   activeTab === 1
      //     ? setBasicInfo({ ...formData.basicInfo })
      //     : null
      // );
      setActiveTab((prev) => Math.min(prev + 1, TABS.length - 1));
      
    } else {
      alert("Please complete the required fields before proceeding.");
    }
  };

  const handlePrev = () => {
    setActiveTab((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    // Navigate to the data-preview page and pass the form data
    // console.log(reduxData);
    
navigate("/data-preview", { state: { reduxData } });
  };

  const TABS = [
    { id: 0, label: "Basic Info", content: <BasicInfoForm /> },
    {
      id: 1,
      label: "Education",
      content: (
        <EducationForm
        
        />
      ),
    },
    {
      id: 2,
      label: "Experience",
      content: (
        <ExperienceForm
         
        />
      ),
    },
    {
      id: 3,
      label: "Skills",
      content: (
        <SkillsForm
         
        />
      ),
    },
    {
      id: 4,
      label: "Projects",
      content: <ProjectsForm />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-md  ">
      <h1 className="text-2xl font-bold mb-4">Getting Started</h1>
      <div className="mb-6">{TABS[activeTab].content}</div>
      <TabNavigation handlePrev={handlePrev} handleNext={handleNext} handleSubmit={handleSubmit} isTabValid={isTabValid} activeTab={activeTab} />
     
    </div>
  );
}
