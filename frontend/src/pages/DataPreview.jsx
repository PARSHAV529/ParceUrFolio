import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

export default function DataPreview() {
  const formData = useSelector((state) => state.formData);
  const navigate = useNavigate();

  if (!formData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-600"
        >
          No data available
        </motion.p>
      </div>
    );
  }

  const handleSubmit = () => {
    navigate('/select-template');
  };

  const renderSection = (title, content) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-8"
    >
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2"
      >
        {title}
      </motion.h2>
      {content}
    </motion.div>
  );

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-md shadow-md mt-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-6 text-gray-800 text-center"
      >
        Data Preview
      </motion.h1>

      {renderSection("Basic Info", (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4 text-gray-700"
        >
          <p><strong>Name:</strong> {formData.basicInfo.name}</p>
          <p><strong>Email:</strong> {formData.basicInfo.email}</p>
          <p><strong>Job Title:</strong> {formData.basicInfo.jobTitle}</p>
          <p><strong>City:</strong> {formData.basicInfo.city}</p>
          <p><strong>Phone:</strong> {formData.basicInfo.phone}</p>
        </motion.div>
      ))}

      {renderSection("Education", (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          {formData.education.map((edu, index) => (
            <motion.li
              key={index}
              className="p-4 bg-gray-50 rounded-md shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Institute:</strong> {edu.institute}</p>
              <p><strong>Duration:</strong> {edu.startDate} - {edu.endDate}</p>
              <p><strong>Marks:</strong> {edu.marks}</p>
            </motion.li>
          ))}
        </motion.ul>
      ))}

      {renderSection("Experience", (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          {formData.experience.map((exp, index) => (
            <motion.li
              key={index}
              className="p-4 bg-gray-50 rounded-md shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p><strong>Role:</strong> {exp.role}</p>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Duration:</strong> {exp.startDate} - {exp.endDate}</p>
            </motion.li>
          ))}
        </motion.ul>
      ))}

      {renderSection("Skills", (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap gap-2"
        >
          {formData.skills.map((skill, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full shadow-sm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      ))}

      {renderSection("Projects", (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          {formData.projects.map((project, index) => (
            <motion.li
              key={index}
              className="p-4 bg-gray-50 rounded-md shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p><strong>{project.name}</strong>: {project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-1 block"
              >
                {project.link}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-8 flex justify-center"
      >
        <motion.div
          whileHover={{
            scale: 1.1,
  
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#3b82f6", // Blue color for hover
            transition: { duration: 0.3 }
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <Button onClick={handleSubmit} variant="primary" className="px-8 py-3 text-lg">
            Submit
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
