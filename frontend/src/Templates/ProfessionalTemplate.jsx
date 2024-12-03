// src/components/templates/ProfessionalTemplate.js
import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfessionalTemplate() {
  const formData = useSelector((state) => state.formData);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>{formData.basicInfo.name}</h1>
        <p>{formData.basicInfo.jobTitle} | {formData.basicInfo.email}</p>
      </header>
      <section style={styles.experience}>
        <h2>Experience</h2>
        {formData.experience.map((exp, index) => (
          <div key={index} style={styles.experienceCard}>
            <h3>{exp.jobTitle} at {exp.company}</h3>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  experience: {
    marginBottom: '40px',
  },
  experienceCard: {
    padding: '20px',
    marginBottom: '20px',
    borderLeft: '5px solid #0078D4',
    backgroundColor: '#f7f7f7',
  },
};
