import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DataPreview() {
  const formData = useSelector((state) => state.formData);
  const navigate = useNavigate();

  if (!formData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">No data available</p>
      </div>
    );
  }

  const handleSubmit = () => {
    navigate('/select-template');
  };

  const renderSection = (title, content) => (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">{title}</h2>
      {content}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-md shadow-md mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Data Preview</h1>

      {renderSection("Basic Info", (
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p><strong>Name:</strong> {formData.basicInfo.name}</p>
          <p><strong>Email:</strong> {formData.basicInfo.email}</p>
          <p><strong>Job Title:</strong> {formData.basicInfo.jobTitle}</p>
          <p><strong>City:</strong> {formData.basicInfo.city}</p>
          <p><strong>Phone:</strong> {formData.basicInfo.phone}</p>
        </div>
      ))}

      {renderSection("Education", (
        <ul className="space-y-4">
          {formData.education.map((edu, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded-md shadow-sm">
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Institute:</strong> {edu.institute}</p>
              <p><strong>Duration:</strong> {edu.startDate} - {edu.endDate}</p>
              <p><strong>Marks:</strong> {edu.marks}</p>
            </li>
          ))}
        </ul>
      ))}

      {renderSection("Experience", (
        <ul className="space-y-4">
          {formData.experience.map((exp, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded-md shadow-sm">
              <p><strong>Role:</strong> {exp.role}</p>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Duration:</strong> {exp.startDate} - {exp.endDate}</p>
            </li>
          ))}
        </ul>
      ))}

      {renderSection("Skills", (
        <div className="flex flex-wrap gap-2">
          {formData.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      ))}

      {renderSection("Projects", (
        <ul className="space-y-4">
          {formData.projects.map((project, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded-md shadow-sm">
              <p><strong>{project.name}</strong>: {project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-1 block"
              >
                {project.link}
              </a>
            </li>
          ))}
        </ul>
      ))}

      <div className="mt-8 flex justify-center">
        <Button onClick={handleSubmit} variant="primary" className="px-8 py-3 text-lg">
          Submit
        </Button>
      </div>
    </div>
  );
}
