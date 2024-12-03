import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function DataPreview() {
    // Check if formData exists and is valid
  // const { formData } = location.state || {}; 
  const formData = useSelector((state) => state.formData);

  const navigate = useNavigate();  // Access the formData from the state

  // Log the data to check if it's passed correctly
  console.log("DataPreview formData:", formData);// Check what data is passed
  
    if (!formData ) {
      return <div>No data available</div>;
    }

    const handleSubmit = () => {
        // Navigate to the Select Template page after submission
        navigate('/select-template');  // Replace '/select-template' with your desired path
      };
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow">
        <h1 className="text-2xl font-bold mb-4">Data Preview</h1>
  
        {/* Render Basic Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Basic Info</h2>
          <p>Name: {formData.basicInfo.name}</p>
          <p>Email: {formData.basicInfo.email}</p>
          <p>Job Title: {formData.basicInfo.jobTitle}</p>
          <p>City: {formData.basicInfo.city}</p>
          <p>Phone: {formData.basicInfo.phone}</p>
        </div>
  
        {/* Render Education */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <ul>
            {formData.education.map((edu, index) => (
              <li key={index}>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Institute:</strong> {edu.institute}</p>
                <p><strong>Start Date:</strong> {edu.startDate}</p>
                <p><strong>End Date:</strong> {edu.endDate}</p>
                <p><strong>Marks:</strong> {edu.marks}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Render Experience */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul>
            {formData.experience.map((exp, index) => (
              <li key={index}><p><strong>Role:</strong> {exp.role}</p>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Start Date:</strong> {exp.startDate}</p>
              <p><strong>End Date:</strong> {exp.endDate}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Render Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
  
        {/* Render Projects */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul>
            {formData.projects.map((project, index) => (
              <li key={index}>
                <strong>{project.name}</strong>: {project.description} ({project.link})
              </li>
            ))}
          </ul>
        </div>

         {/* Submit button */}
      <div className="mt-6">
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </div>
      </div>
    );
  }
  