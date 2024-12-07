import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

export default function MinimalistTemplate() {
  const formData = useSelector((state) => state.formData);
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const theme = useSelector((state) => state.theme.themes[selectedTheme]);

  return (
    <div className={`lg:flex-row ${theme.backgroundColor} min-h-screen`}>
      {/* Navigation */}
      <header className={`w-full bg-gradient-to-r ${theme.primaryGradient} py-4 sticky top-0 z-10 shadow-md`}>
        <nav className="flex justify-center space-x-6">
          <Link to="#about" className="text-white font-semibold hover:underline">
            About
          </Link>
          <Link to="#projects" className="text-white font-semibold hover:underline">
            Projects
          </Link>
          <Link to="#skills" className="text-white font-semibold hover:underline">
            Skills
          </Link>
          <Link to="#experience" className="text-white font-semibold hover:underline">
            Experience
          </Link>
          <Link to="#education" className="text-white font-semibold hover:underline">
            Education
          </Link>
        </nav>
      </header>

      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Typing Animation */}
          <div className="text-left md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800">
              My name is{' '}
              <span className={`${theme.textColor}`}>
                <Typewriter
                  words={[formData.basicInfo?.name || 'Unknown']}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              I am a{' '}
              <span className={`${theme.textColor}`}>
                <Typewriter
                  words={[formData.experience?.[0]?.role || 'Professional']}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>

          {/* Right Side: Profile Image */}
          <img
            src={formData.basicInfo?.profileImage || '/default-profile.png'}
            alt="Profile"
            className="w-72 h-72 mx-auto rounded-full shadow-lg border-4"
          />
        </div>

        {/* About Section */}
        <section id="about" className="mb-8">
          <h2 className={`text-2xl font-bold ${theme.textColor} mb-4`}>About Me</h2>
          <p className="text-gray-700 leading-7">
            {formData.basicInfo?.aboutMe || 'A passionate developer, always learning and growing.'}
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-8">
          <h2 className={`text-2xl font-bold ${theme.textColor} mb-4`}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formData.projects?.length > 0 ? (
              formData.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme.textColor} mt-2 inline-block`}
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
          <h2 className={`text-2xl font-bold mb-6 text-center ${theme.textColor}`}>Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {formData.skills?.length > 0 ? (
              formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-400 transition duration-200"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-center text-gray-600">No skills listed.</p>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-8">
          <h2 className={`text-2xl font-bold ${theme.textColor} mb-4`}>Experience</h2>
          {formData.experience?.length > 0 ? (
            formData.experience.map((exp, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {exp.role} at {exp.company}
                </h3>
                <p className="text-sm text-gray-600">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
            ))
          ) : (
            <p>No experience available.</p>
          )}
        </section>

        {/* Education Section */}
        <section id="education" className="mb-8">
          <h2 className={`text-2xl font-bold ${theme.textColor} mb-4`}>Education</h2>
          {formData.education?.length > 0 ? (
            formData.education.map((edu, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-lg mb-4">
                <h3 className="text-lg font-bold text-blue-800">{edu.degree}</h3>
                <p className="text-sm text-gray-600">
                  {edu.institute}, Marks: {edu.marks}%
                </p>
                <p className="text-sm text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))
          ) : (
            <p>No education details available.</p>
          )}
        </section>
      </div>
    </div>
  );
}
