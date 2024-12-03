import React, { useState } from "react";
import { BasicInfoForm } from "./GettingStarted/BasicInfoForm";
import { EducationForm } from "./GettingStarted/EducationForm";
import { ExperienceForm } from "./GettingStarted/ExperienceForm";
import { SkillsForm } from "./GettingStarted/SkillsForm";
import { ProjectsForm } from "./GettingStarted/ProjectsForm";
import { TabNavigation } from "./GettingStarted/TabNavigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch } from "react-redux";
import { setBasicInfo, setEducation, setExperience, setProjects, setSkills } from "@/Redux/formDataSlice";

export default function GettingStarted() {
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    basicInfo: {
      name: "",
      email: "",
      jobTitle: "",
      city: "",
      phone: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
  });

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
  const handleChange = (section, fieldOrIndex, value, action = "update") => {

    setFormData((prev) => {
      const newFormData = {
        ...prev,
        [section]: {
          ...prev[section],
          [fieldOrIndex]: value,
        },
      };
     
      
      return newFormData;
    });
    
      // Handle object state updates
      dispatch(section === "basicInfo" ? setBasicInfo({ ...formData.basicInfo, [fieldOrIndex]: value }): null);
    
  };
  
  
  

  const handleAddOrEdit = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], data],
    }));
  };

  const handleEdit = (section, index, data) => {
    const updatedSection = [...formData[section]];
    updatedSection[index] = data;
    setFormData((prev) => ({
      ...prev,
      [section]: updatedSection,
    }));
  };

  const handleAddSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  const isTabValid = () => {
    switch (activeTab) {
      case 0:
        return Object.values(formData.basicInfo).every((field) => field.trim() !== "");
      case 1:
        return formData.education.length > 0;
      case 2:
        return formData.experience.length > 0;
      case 3:
        return formData.skills.length > 0;
      case 4:
        return formData.projects.length > 0;
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
    console.log(formData);
    
navigate("/data-preview", { state: { formData } });
  };

  const TABS = [
    { id: 0, label: "Basic Info", content: <BasicInfoForm formData={formData} handleChange={handleChange} /> },
    {
      id: 1,
      label: "Education",
      content: (
        <EducationForm
          formData={formData.education}
          handleChange={handleChange}
          handleAddOrEdit={handleAddOrEdit}
        />
      ),
    },
    {
      id: 2,
      label: "Experience",
      content: (
        <ExperienceForm
          formData={formData.experience}
          handleAddOrEdit={(data) => handleAddOrEdit("experience", data)}
          handleEdit={handleEdit}
        />
      ),
    },
    {
      id: 3,
      label: "Skills",
      content: (
        <SkillsForm
          formData={formData.skills}
          handleAddSkill={handleAddSkill} // Pass the handleAddSkill function
          handleRemoveSkill={handleRemoveSkill} // Pass the handleRemoveSkill function
        />
      ),
    },
    {
      id: 4,
      label: "Projects",
      content: <ProjectsForm formData={formData} setFormData={setFormData} />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow">
      <h1 className="text-2xl font-bold mb-4">Getting Started</h1>
      <div className="mb-6">{TABS[activeTab].content}</div>
      <TabNavigation handlePrev={handlePrev} handleNext={handleNext} isTabValid={isTabValid} activeTab={activeTab} />
      <div className="mt-6">
        {activeTab === TABS.length - 1 ? (
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
        ) : null}
      </div>
    </div>
  );
}
