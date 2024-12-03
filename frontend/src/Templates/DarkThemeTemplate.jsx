// src/components/templates/DarkThemeTemplate.js
import React from 'react';
import { useSelector } from 'react-redux';

export default function DarkThemeTemplate() {
  const formData = useSelector((state) => state.formData);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>{formData.basicInfo.name}</h1>
        <p>{formData.basicInfo.jobTitle}</p>
      </header>
      <section style={styles.projects}>
        <h2>Projects</h2>
        {formData.projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {/* <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p> */}
          </div>
        ))}
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#333',
    color: '#fff',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  projects: {
    marginBottom: '40px',
  },
  projectCard: {
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#444',
    borderRadius: '8px',
  },
};
