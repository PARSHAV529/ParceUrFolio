import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MinimalistTemplate() {
  const formData = useSelector((state) => state.formData);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-lg p-6 sticky top-0 h-full">
        <div className="text-center">
          <img
            src={formData.basicInfo.profilePicture || '/default-profile.png'}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h1 className="text-xl font-bold text-gray-800">{formData.basicInfo.name}</h1>
          <p className="text-gray-600">{formData.basicInfo.jobTitle}</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navigation */}
        <header className="sticky top-0 bg-white shadow-md z-10 py-4 mb-6">
          <nav className="flex justify-center space-x-6">
            <Link to="#about" className="text-blue-600 font-semibold hover:underline">
              About
            </Link>
            <Link to="#projects" className="text-blue-600 font-semibold hover:underline">
              Projects
            </Link>
            <Link to="#skills" className="text-blue-600 font-semibold hover:underline">
              Skills
            </Link>
            <Link to="#experience" className="text-blue-600 font-semibold hover:underline">
              Experience
            </Link>
            <Link to="#certifications" className="text-blue-600 font-semibold hover:underline">
              Certifications
            </Link>
          </nav>
        </header>

        {/* Sections */}
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700">
            {formData.about || 'A passionate developer, always learning and growing.'}
          </p>
        </section>

        <section id="projects" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formData.projects.length > 0 ? (
              formData.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <img
                    src={project.image || '/default-project.jpg'}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 mt-2 inline-block"
                  >
                    View Project
                  </a>
                </div>
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
        </section>

         {/* Skills Section */}
         <section id="skills" className="mb-10">
  <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
  <div className="flex flex-wrap gap-4 justify-center">
    {formData.skills.length > 0 ? (
      formData.skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-300 transition duration-200"
        >
          {skill}
        </span>
      ))
    ) : (
      <p className="text-center text-gray-600">No skills listed.</p>
    )}
  </div>
</section>


        <section id="experience" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
          {formData.experience.length > 0 ? (
            formData.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow mb-4"
              >
                <h3 className="text-lg font-bold text-gray-800">
                  {exp.role} at {exp.company}
                </h3>
                <p className="text-sm text-gray-600">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))
          ) : (
            <p>No experience available.</p>
          )}
        </section>

        
      </div>
    </div>
  );
}