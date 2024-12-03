// src/components/templates/CreativeTemplate.js
import React from 'react';
import { useSelector } from 'react-redux';

export default function CreativeTemplate() {
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
            {/* <p><strong>Tech:</strong> {project.technologies.join(', ')}</p> */}
          </div>
        ))}
      </section>
      <section style={styles.skills}>
        <h2>Skills</h2>
        <div style={styles.skillSet}>
          {formData.skills.map((skill, index) => (
            <span key={index} style={styles.skill}>{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '30px',
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
    border: '2px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f7f7f7',
  },
  skills: {
    marginBottom: '30px',
  },
  skillSet: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  skill: {
    backgroundColor: '#e0e0e0',
    padding: '10px',
    borderRadius: '5px',
  },
};
